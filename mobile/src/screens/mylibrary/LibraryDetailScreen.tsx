import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Keyboard } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibraryBookItem from "../../components/library/LibraryBookItem";
import Search from "../../components/common/Search";
import { useNavigation, useRoute } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

const CONFIG = {
  wish: {
    title: "독서 위시리스트",
    status: "WISH",
    iconName: "shopping-bag"
  },
  reading: {
    title: "독서 중",
    status: "READING",
    iconName: "book-open"
  },
  finished: {
    title: "독서 완료",
    status: "FINISHED",
    iconName: "award"
  },
};

export default function LibraryDetailScreen() {
  const route = useRoute<any>();
  const type = route.params?.type || "wish";
  const { title, status, iconName } = CONFIG[type];
  const navigation = useNavigation();

  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isFullSearch, setIsFullSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://192.168.132.1:3000/user-books?status=${status}`);
        if (!response.ok) throw new Error('네트워크 응답이 좋지 않습니다.');
        const data = await response.json();
        setBooks(data.books);
      } catch (err) {
        console.error("데이터를 가져오는데 실패했습니다:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserBooks();
  }, [type]);

  return (
    <MainLayout showHeader={false} showTabBar={!isFullSearch}>
      <View style={styles.container}>
        
        
        {!isFullSearch && (
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backArrow}>{"←"}</Text>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{title}</Text>
              <Feather name={iconName as any} size={18} color="black" />
            </View>
            <View style={styles.divider} />
          </View>
        )}

        
        <Search 
          isFullMode={isFullSearch}
          onBack={() => {setIsFullSearch(false)}}
          onPress={() => setIsFullSearch(true)}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="검색"
          editable={isFullSearch}
        />

        
        {isFullSearch ? (
          <View style={styles.recentSearchSection}>
            <View style={styles.headerSection}>
              <Text style={styles.recentTitle}>최근 검색</Text>
            </View>
              <Text style={styles.emptyRecent}>최근 검색 내역이 없습니다.</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.editBtnWrapper}>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editBtnText}>편집</Text>
              </TouchableOpacity>
            </View>

            {loading ? (
              <ActivityIndicator size="large" color="#000" style={styles.loader} />
            ) : (
              <View style={styles.bookGrid}>
                {books.map((book) => (
                  <View key={book.bookId} style={styles.bookItemWrapper}>
                    <LibraryBookItem title={book.title} coverImage={book.coverImage} />
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 28,
    paddingHorizontal: 14,
  },
  fullSearchWrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  recentSearchSection: {
    padding: 20,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  emptyRecent: {
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  headerSection: {
    marginTop: 20,
    marginBottom: 18,
  },
  titleRow: {
    flexDirection: "row",
    marginBottom: 15,
    marginLeft: 10,
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    marginRight: 23,
    color: "#000",
  },
  headerTitle: {
    color: "#000",
    fontSize: 27,
    fontWeight: 500,
    marginRight: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginRight: 30,
    marginLeft: 10,
  },
  editBtnWrapper: {
    alignItems: "flex-end",
    //marginTop: 15,
    marginBottom: 18,
  },
  editBtn: {
    backgroundColor: "#EEEEEE",
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  editBtnText: {
    fontSize: 18,
  },
  loader: {
    marginTop: 50,
  },
  bookGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  bookItemWrapper: {
    width: '33.3%',
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    color: '#888',
  },
});
