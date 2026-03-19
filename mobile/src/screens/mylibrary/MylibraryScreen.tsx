import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import client from "../../api/client"; // client 파일 경로에 맞춰 수정하세요
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";
import Search from "../../components/common/Search";

export default function LibraryScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  // 화면이 포커스될 때마다 데이터를 가져오는 방식
  useFocusEffect(
    useCallback(() => {
      const fetchAllBooks = async () => {
        try {
          setLoading(true);
          console.log("--- 서재 데이터 요청 시작 ---");
          
          // 공통 client 사용 (BASE_URL이 이미 설정되어 있으므로 경로만 작성)
          const response = await client.get("/user-books");
          
          // axios는 데이터를 response.data에 담아줍니다.
          const data = response.data;
          console.log("서버 응답 데이터:", data);

          if (data?.books && Array.isArray(data.books)) {
            setBooks(data.books);
          } else {
            setBooks([]);
          }
        } catch (err: any) {
          console.error("전체 서재 로딩 실패:", err.response?.data || err.message);
        } finally {
          setLoading(false);
          console.log("--- 서재 데이터 요청 종료 ---");
        }
      };

      fetchAllBooks();
    }, [])
  );

  return (
    <MainLayout>
      <View style={{ width: '100%', paddingHorizontal: 20, paddingTop: 10 }}>
        <Search 
          placeholder="검색" 
          onPress={() => navigation.navigate("SearchScreen")} 
          editable={false} 
        />
      </View>

      <ScrollView style={{ flex: 1, paddingVertical: 35, paddingHorizontal: 26 }}>
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
