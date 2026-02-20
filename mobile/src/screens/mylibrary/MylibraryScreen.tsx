import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, View, ActivityIndicator, RefreshControl } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";
import Search from "../../components/common/Search";

const API_URL = "http://192.168.219.112:3000/user-books";

export default function LibraryScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  const fetchAllBooks = useCallback(async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      
      if (data?.books && Array.isArray(data.books)) {
        setBooks(data.books);
      } else {
        setBooks([]);
      }
    } catch (err) {
      console.error("전체 서재 로딩 실패:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchAllBooks(books.length === 0); // 처음이거나 데이터가 없을 때만 전체 로딩바 표시
    }
  }, [isFocused, fetchAllBooks]);

  // 🔄 손가락으로 당겨서 새로고침 핸들러
  const onRefresh = () => {
    setRefreshing(true);
    fetchAllBooks(false);
  };

  return (
    <MainLayout>
      <View style={{ width: '100%', paddingHorizontal: 20, paddingTop: 10 }}>
        <Search 
          placeholder="검색" 
          onPress={() => navigation.navigate("SearchScreen")} 
          editable={false} 
        />
      </View>

      <ScrollView style={{ flex: 1, paddingVertical: 35, paddingHorizontal: 26 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <>
            <LibrarySection
              title="독서 위시리스트"
              books={books.filter(b => b.status === "WISH")}
              type="wish"
            />

            <LibrarySection
              title="독서 중"
              books={books.filter(b => b.status === "READING")}
              type="reading"
            />

            <LibrarySection
              title="독서 완료"
              books={books.filter(b => b.status === "FINISHED")}
              type="finished"
            />
          </>
        )}
      </ScrollView>
    </MainLayout>
  );
}
