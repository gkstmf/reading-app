import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import { ActionButton } from "../../components/book/BookActionButton";
import { GroupTag } from "../../components/book/BookGroupTag";
import ReviewSection from "../../components/book/ReviewSection";

export default function MemberBookDetailScreen() {
  return (
    <MainLayout>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 22, paddingTop: 30, paddingBottom: 40 }}>
        
        {/* 헤더 */}
        <View style={{ flexDirection: "row", marginBottom: 33 }}>
          <TouchableOpacity><Text style={{ fontSize: 24, marginRight: 23 }}>{"←"}</Text></TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>도서 정보</Text>
        </View>

        {/* 책 정보 섹션 */}
        <View style={{ flexDirection: "row", marginBottom: 39 }}>
          <View style={{ width: 151, height: 196, backgroundColor: "#D9D9D9", marginRight: 26 }} />
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>제목</Text>
            <Text style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>저자</Text>
            <Text style={{ fontSize: 14, color: "#666", marginBottom: 60 }}>출판사</Text>
            
            {/* '나도 읽고 싶어요' 액션 버튼 */}
            <ActionButton icon="ixo7y9nh" label="나도 읽고 싶어요" />
          </View>
        </View>

        {/* 책 소개 */}
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>책 소개</Text>
          <View style={{ padding: 15, backgroundColor: "#F9F9F9", borderRadius: 5 }}>
            <Text style={{ color: "#333", lineHeight: 20 }}>책에 대한 간략한 소개글이 들어갑니다.</Text>
          </View>
        </View>

        {/* 멤버의 서평 섹션 */}
        <ReviewSection 
          name="김한슬" 
          content="책 내용이 너무 유익했습니다. 추천합니다!" 
        />

        {/* 이 책을 담은 그룹 섹션 */}
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 19 }}>
            이 책을 위시리스트에 담은 그룹
          </Text>
          <View style={{ flexDirection: "row" }}>
            <GroupTag name="그룹명" bg="wf4bz4b0" />
            <GroupTag name="그룹명" bg="fnuingyk" />
            <GroupTag name="그룹명" bg="q2ui8ti4" />
          </View>
        </View>

      </ScrollView>
    </MainLayout>
  );
}