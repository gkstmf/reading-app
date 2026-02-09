import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";
import SearchBar from "../../components/common/SearchBar";

const API_URL = "http://192.168.219.110:3000/user-books";

export default function LibraryScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setLoading(true);
        console.log("--- API 호출 시작 (로컬) ---");

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // 상태 코드 먼저 확인
        if (!response.ok) {
          const errorText = await response.text();
          console.error("서버 에러 응답:", errorText);
          throw new Error(`HTTP ${response.status}`);
        }

        // JSON 파싱
        const data = await response.json();
        console.log("서버 응답 데이터:", data);

        if (data?.books && Array.isArray(data.books)) {
          console.log("받아온 책 개수:", data.books.length);
          setBooks(data.books);
        } else {
          console.warn("books 필드가 없음 또는 배열 아님");
          setBooks([]);
        }
      } catch (err) {
        console.error("전체 서재 로딩 실패:", err);
      } finally {
        setLoading(false);
        console.log("--- API 호출 종료 ---");
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <MainLayout>
      <View style={{ width: '100%', paddingHorizontal: 20, paddingTop: 10 }}>
        <SearchBar />
      </View>

      <ScrollView style={{ flex: 1, paddingVertical: 35, paddingHorizontal: 26 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <>
            <LibrarySection
              title="독서 위시리스트"
              books={books.filter(b => b.status === "WISH")}
              //iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/u0tctwi0_expires_30_days.png"
            />

            <LibrarySection
              title="독서 중"
              books={books.filter(b => b.status === "READING")}
              //iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/39hw5iz2_expires_30_days.png"
            />

            <LibrarySection
              title="독서 완료"
              books={books.filter(b => b.status === "FINISHED")}
              //iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/dmxohdva_expires_30_days.png"
            />
          </>
        )}
      </ScrollView>
    </MainLayout>
  );
}
