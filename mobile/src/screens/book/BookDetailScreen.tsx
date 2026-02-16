import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import { ActionButton, BigButton } from "../../components/book/BookActionButton";
import { useNavigation, useRoute } from "@react-navigation/native";

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
        const response = await fetch(`http://172.20.10.2:3000/book/${bookId}`);
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
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 20, paddingBottom: 40 }}>
        
        {/* 헤더 영역 */}
        <View style={{ flexDirection: "row", marginBottom: 33 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 24, marginRight: 23 }}>{"←"}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{"도서 정보"}</Text>
        </View>

        

        {/* 도서 기본 정보 */}
        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <View style={{ width: 150, height: 183, backgroundColor: "#D9D9D9", marginRight: 28 }} />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, marginBottom: 7 }}>{"제목"}</Text>
            <Text style={{ fontSize: 15, color: "#000" }}>{"저자"}</Text>
            {status === "search" && (
               <Image 
                 source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/br10bpn0_expires_30_days.png" }} 
                 style={{ width: 159, height: 27, marginTop: 24 }}
                 resizeMode="stretch"
               />
            )}
          </View>
        </View>

        {/* 상태별 버튼 영역 */}
        <View style={{ marginBottom: 40 }}>
          {status === "search" && (
            <View>
              <ActionButton icon="cldb5df6" label="위시리스트에 담기" />
              <ActionButton icon="n5khzjh6" label="읽고 있어요" />
              <ActionButton icon="0lpkzjvm" label="이미 읽었어요" />
            </View>
          )}

          {status === "reading" && (
            <View>
              <BigButton label="독서 시작" />
              <BigButton label="독서 완료" />
            </View>
          )}
        </View>

        {/* 책 내용 섹션 */}
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 15, marginBottom: 12 }}>{"책 내용"}</Text>
          <View style={{ minHeight: 94, backgroundColor: "#EDEDED", padding: 15 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{"책 상세 내용이 들어갑니다."}</Text>
          </View>
        </View>

        {/* 서평 섹션 (완료 상태일 때만) */}
        {status === "finished" && (
          <View>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>{"내 서평"}</Text>
            <View style={{ height: 235, backgroundColor: "#F2F2F2", padding: 15 }}>
              <Text>{"작성한 서평 내용..."}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </MainLayout>
  );
}