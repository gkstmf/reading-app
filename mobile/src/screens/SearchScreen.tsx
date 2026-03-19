import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Search from "../components/common/Search";



export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const navigation = useNavigation<any>();

  // 🔍 도서 검색 API 호출
  const handleSearch = async (text: string) => {
    setSearchQuery(text);
    if (text.trim().length > 0) {
      try {
        // API 명세서의 /books?query={searchKeyword} 사용
        const response = await fetch(`http://192.168.219.112:3000/book?query=${encodeURIComponent(text)}`);
        
        if (!response.ok) throw new Error('서버 응답 없음');
        const data = await response.json();
        

        setResults(data.books); 
        
      } catch (err) {
        console.error("검색 에러:", err);
      }
    } else {
      setResults([]);
    }
  };

  // 📖 검색 결과 아이템 렌더링
  const renderBookItem = ({ item }: any) => (
    <TouchableOpacity 
      style={styles.bookItem} 
      // 👈 클릭 시 BookDetailScreen으로 bookId 전달
      onPress={() => navigation.navigate("BookDetailScreen", { bookId: item.isbn })}
    >
      <Image source={{ uri: item.coverImage }} style={styles.coverImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.bookDetails}>{item.author} · {item.publisher}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Search 
        isFullMode={true}
        onBack={() => { Keyboard.dismiss(); navigation.goBack(); }}
        value={searchQuery}
        onChangeText={handleSearch}
        onSubmit={() => {
            console.log("엔터 클릭! 검색어:", searchQuery);
            // 검색 기록 저장 API 호출 등을 여기서 하시면 됩니다.
        }}
        placeholder="제목, 저자, 출판사 검색"
      />
      {searchQuery.length > 0 ? (
        <FlatList 
          data={results}
          keyExtractor={(item, index) => `${item.isbn}_${index}`}
          //keyExtractor={(item) => item.isbn.toString()}
          renderItem={renderBookItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>검색 결과가 없습니다.</Text>}
        />
      ) : (
        <View style={styles.recentSection}>
            <View style={styles.recentHeader}>
                <Text style={styles.recentTitle}>최근 검색</Text>
        </View>
        <Text style={styles.emptyText}>최근 검색 내역이 없습니다.</Text>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  listContent: { paddingHorizontal: 20, paddingTop: 10 },
  bookItem: { flexDirection: "row", marginBottom: 15, alignItems: "center" },
  coverImage: { width: 50, height: 75, borderRadius: 4, backgroundColor: "#F5F5F5" },
  bookInfo: { flex: 1, marginLeft: 15 },
  bookTitle: { fontSize: 16, fontWeight: "600", color: "#000" },
  bookDetails: { fontSize: 13, color: "#666", marginTop: 4 },
  recentSection: { padding: 20 },
  recentHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  recentTitle: { fontSize: 16, fontWeight: "bold" },
  viewAll: { color: "#3897f0", fontWeight: "bold" },
  emptyText: { color: "#AAA", textAlign: "center", marginTop: 50 }
});