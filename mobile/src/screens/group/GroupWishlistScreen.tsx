import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibraryBookItem from "../../components/library/LibraryBookItem";

export default function GroupWishlistScreen() {
  return (
    <MainLayout>
      <ScrollView 
        style={{ flex: 1, backgroundColor: "#FFFFFF" }} 
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 28, paddingBottom: 40 }}
      >
        {/* 상단 타이틀 섹션 */}
        <View style={{ marginBottom: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
            <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold", flex: 1 }}>
              {"그룹 위시리스트"}
            </Text>
            <Image 
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/k6ofy8r9_expires_30_days.png" }} 
              style={{ width: 16, height: 16 }} 
            />
          </View>
          {/* 검은색 구분선 */}
          <View style={{ height: 1, backgroundColor: "#000", marginBottom: 14 }} />
          
          {/* 그룹 위시리스트만의 추가 아이콘 바 (회색 배경 섹션) */}
          <View 
            style={{ 
              alignItems: "flex-end", 
              backgroundColor: "#F2F2F2", 
              paddingVertical: 13, 
              paddingRight: 19,
              marginBottom: 15 
            }}
          >
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/p36nb2c6_expires_30_days.png" }} 
              style={{ width: 16, height: 16 }}
            />
          </View>
        </View>

        {/* 편집 버튼 영역 */}
        <View style={{ alignItems: "flex-end", marginBottom: 18 }}>
          <TouchableOpacity style={{ backgroundColor: "#EEEEEE", paddingVertical: 3, paddingHorizontal: 8, borderRadius: 2 }}>
            <Text style={{ color: "#000", fontSize: 13 }}>{"편집"}</Text>
          </TouchableOpacity>
        </View>

        {/* 책 리스트 그리드 (3열) */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }}>
          <LibraryBookItem title="그룹추천 도서 1" />
          <LibraryBookItem title="그룹추천 도서 2" />
          <LibraryBookItem title="그룹추천 도서 3" />
          <LibraryBookItem title="그룹추천 도서 4" />
        </View>

      </ScrollView>
    </MainLayout>
  );
}