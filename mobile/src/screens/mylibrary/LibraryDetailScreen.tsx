import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibraryBookItem from "../../components/library/LibraryBookItem";

interface LibraryDetailProps {
  type: "wish" | "reading" | "finished";
}

const CONFIG = {
  wish: {
    title: "독서 위시리스트",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/m6sfpnu2_expires_30_days.png",
    status: "WISH",
  },
  reading: {
    title: "독서 중",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/hnoaf56r_expires_30_days.png",
    status: "READING",
  },
  finished: {
    title: "독서 완료",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/3jx43qvj_expires_30_days.png",
    status: "FINISHED",
  },
};

export default function LibraryDetailScreen({ type = "wish" }: LibraryDetailProps) {
  const { title, icon, status } = CONFIG[type];
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://192.168.132.1:3000/user-books?status=${status}`);
        
        if (!response.ok) {
          throw new Error('네트워크 응답이 좋지 않습니다.');
        }

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
    <MainLayout>
      <ScrollView style={{ flex: 1, paddingVertical: 28, paddingHorizontal: 14 }}>
        {/* 상단 타이틀 섹션 */}
        <View style={{ marginBottom: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold", flex: 1 }}>{title}</Text>
            <Image source={{ uri: icon }} style={{ width: 16, height: 16 }} />
          </View>
          <View style={{ height: 1, backgroundColor: "#000", marginBottom: 14 }} />
        </View>

        {/* 편집 버튼 */}
        <View style={{ alignItems: "flex-end", marginBottom: 18 }}>
          <TouchableOpacity style={{ backgroundColor: "#EEEEEE", paddingVertical: 3, paddingHorizontal: 8 }}>
            <Text style={{ fontSize: 13 }}>편집</Text>
          </TouchableOpacity>
        </View>

        {/* 책 리스트 그리드 */}
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <View style={{ 
            flexDirection: "row", 
            flexWrap: "wrap", 
            justifyContent: "flex-start",
            paddingHorizontal: 10 
          }}>
            {books.length > 0 ? (
              books.map((book) => (
                <View key={book.bookId} style={{ width: '33.3%', marginBottom: 20 }}>
                  <LibraryBookItem 
                    title={book.title} 
                    coverImage={book.coverImage} 
                  />
                </View>
              ))
            ) : (
              <Text style={{ textAlign: 'center', width: '100%', marginTop: 20, color: '#888' }}>
                등록된 책이 없습니다.
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </MainLayout>
  );
}