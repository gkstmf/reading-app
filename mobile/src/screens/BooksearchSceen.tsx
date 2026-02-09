import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MainLayout from "../layouts/MainLayout";
import Search from "../components/common/Search"; // 
import BookItem from "../components/book/BookItem";
import SearchHistory from "../components/book/SearchHistory";


export default function BookSearchScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState(["종의 기원", "사피엔스"]); 

  // 테스트용 임시 데이터 (나중에 백과 연결 예정)
  const [books] = useState([
    { id: 1, title: '종의 기원', author: '찰스 다윈', publisher: '사이언스북스', image: 'https://via.placeholder.com/50' },
    { id: 2, title: '종의 기원: 생명의 신비', author: '정유정', publisher: '은행나무', image: 'https://via.placeholder.com/50' },
  ]);

  const deleteHistory = (index: number) => {
  const newHistory = history.filter((_, i) => i !== index);
  setHistory(newHistory);
};

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (searchQuery.trim().length === 0) return; 

    setHistory((prev) => {
      const filteredHistory = prev.filter((item) => item !== searchQuery);
      return [searchQuery, ...filteredHistory].slice(0, 10); // 최신 10개만 유지
    });
  };

  return (
    <MainLayout>
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false} 
      >
        <Text style={styles.headerTitle}>우리독서</Text>

        <View style={styles.searchSection}>
          <Search 
            placeholder="종의 기원" 
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
        </View>

        {/* 리스트 섹션 */}
        <View style={styles.listSection}>
          {searchQuery.length > 0 ? (
            filteredBooks.map((book) => (
              <BookItem 
              key={book.id} 
              book={book} 
              onPress={() => navigation.navigate("BookDetail", { bookId: book.id })} />
            ))
          ) : (
           <SearchHistory 
              history={history}
              onPressItem={(item) => setSearchQuery(item)}
              onDeleteItem={(index) => deleteHistory(index)}
              onClearAll={() => setHistory([])}
            />
          )}
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20, 
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 40,
    marginBottom: 20,
  },
  searchSection: {
    marginBottom: 30,
    width: '100%',
  },
  listSection: {
    paddingLeft: 10, 
  },
  resultText: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 15,
  }
});