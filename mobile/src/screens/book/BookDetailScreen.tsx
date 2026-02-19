import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import { ActionButton, BigButton } from "../../components/book/BookActionButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

interface BookDetailProps {
  status: "search" | "reading" | "finished";
}

export default function BookDetailScreen({ status = "search" }: BookDetailProps) {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { bookId } = route.params;

  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        setLoading(true);
        // 👈 주의: 현재 핫스팟으로 연결된 노트북의 새로운 IP 주소를 넣어주세요!
        const response = await fetch(`http://192.168.219.112:3000/book/${bookId}`);
        const data = await response.json();
        
        // 서버 응답 구조가 image_532344.png처럼 { books: [...] }가 아니라 단일 객체인지 확인 필요
        setBook(data); 
      } catch (err) {
        console.error("상세 데이터 로딩 실패:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetail();
  }, [bookId]);

  if (loading) {
    return (
      <MainLayout showHeader={false} showTabBar={false}>
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      </MainLayout>
    );
  }

  return (
    <MainLayout showHeader={false} showTabBar={false}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        {/* 뒤로가기 및 타이틀 */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>{"←"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{"도서 정보"}</Text>
        </View>

        {/* 도서 메인 정보 영역 (시안 반영) */}
        <View style={styles.bookMainInfo}>
          {/* 책 표지 이미지 */}
          <View style={styles.coverWrapper}>
            {book?.coverImage ? (
              <Image source={{ uri: book.coverImage }} style={styles.coverImage} resizeMode="cover" />
            ) : (
              <View style={styles.placeholderCover} />
            )}
          </View>

          {/* 텍스트 정보 (제목, 저자, 출판사) */}
          <View style={styles.textInfoWrapper}>
            {/* 제목 가로 스크롤 */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <View style={{ width: 300 }}>
                <Text style={styles.bookTitle} numberOfLines={2}>{book?.title || "제목"}</Text>
              </View>
            </ScrollView>

            {/* 저자 가로 스크롤 */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <Text style={styles.bookSubText}>{book?.author || "저자"}</Text>
            </ScrollView>

            {/* 출판사 가로 스크롤 */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <Text style={styles.bookSubText}>{book?.publisher || "출판사"}</Text>
            </ScrollView>

            {/* 상태 버튼들 */}
            <View style={styles.actionButtons}>
              {status === "search" && (
                <>
                  <TouchableOpacity style={styles.directButton} onPress={() => console.log("위시리스트 클릭")}>
                    <Feather name="shopping-bag" size={20} color="black" />
                    <Text style={styles.directButtonLabel}>위시리스트에 담기</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.directButton} onPress={() => console.log("읽고 있어요 클릭")}>
                    <Feather name="book-open" size={20} color="black" />
                    <Text style={styles.directButtonLabel}>읽고 있어요</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.directButton} onPress={() => console.log("이미 읽었어요 클릭")}>
                    <Feather name="bookmark" size={20} color="black" />
                    <Text style={styles.directButtonLabel}>이미 읽었어요</Text>
                  </TouchableOpacity>
                </>
              )}
          </View>
        </View>
        </View>


        {/* 책 내용 섹션 */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>{"책 내용"}</Text>
  
          <View style={styles.descriptionBox}> 
            <ScrollView 
              style={{ flex: 1 }} 
              nestedScrollEnabled={true} // 부모 ScrollView와 충돌을 방지합니다.
              showsVerticalScrollIndicator={true} // 스크롤 바를 보이게 해서 내려볼 수 있음을 알립니다.
            >
              <Text style={styles.descriptionText}>
                {book?.description ? `${book.description}...` : "책 상세 내용이 없습니다."}
              </Text>
            </ScrollView>
          </View>
        </View>

      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  contentContainer: { paddingHorizontal: 24, paddingTop: 30, paddingBottom: 50 },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 35 },
  backArrow: { fontSize: 26, marginRight: 20, color: "#000" },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#000" },
  bookMainInfo: { flexDirection: "row", marginBottom: 20 },
  coverWrapper: { width: 140, height: 190, marginRight: 25 },
  coverImage: { width: "100%", height: "100%", borderRadius: 4 },
  placeholderCover: { width: "100%", height: "100%", backgroundColor: "#D9D9D9", borderRadius: 4 },
  textInfoWrapper: { flex: 1 },
  horizontalScroll: { marginBottom: 4 },
  bookTitle: { fontSize: 27, fontWeight: "bold", lineHeight: 34, marginBottom: 7, minWidth: 170 },
  bookSubText: { fontSize: 17, color: "#666", marginBottom: 7 },
  actionButtons: { marginTop: 15, gap: 12 },
  directButton: { flexDirection: "row", alignItems: "center", marginBottom: 9 },
  directButtonLabel: { fontSize: 18, marginLeft: 12, color: "#000" },
  descriptionSection: { marginTop: 10 },
  sectionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 12 },
  descriptionBox: { backgroundColor: "#F2F2F2", padding: 18, borderRadius: 8, minHeight: 200 },
  descriptionText: { fontSize: 17, lineHeight: 22, color: "#444" },
});