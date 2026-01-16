import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibraryBookItem from "../../components/library/LibraryBookItem";

interface LibraryDetailProps {
  type: "wish" | "reading" | "finished";
}

// 타입에 따른 텍스트와 아이콘 설정
const CONFIG = {
  wish: {
    title: "독서 위시리스트",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/m6sfpnu2_expires_30_days.png",
  },
  reading: {
    title: "독서 중",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/hnoaf56r_expires_30_days.png",
  },
  finished: {
    title: "독서 완료",
    icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/3jx43qvj_expires_30_days.png",
  },
};

export default function LibraryDetailScreen({ type = "wish" }: LibraryDetailProps) {
  const { title, icon } = CONFIG[type];

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

        {/* 책 리스트 그리드 (3열 구조) */}
        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <LibraryBookItem title="책 제목어쩌고" />
            <LibraryBookItem title="책 제목어쩌고" />
            <LibraryBookItem title="책 제목어쩌고" />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <LibraryBookItem title="책 제목어쩌고" />
            <LibraryBookItem title="책 제목어쩌고" />
            <LibraryBookItem title="책 제목어쩌고" />
          </View>
          {/* 추가적인 리스트는 여기에... */}
        </View>
      </ScrollView>
    </MainLayout>
  );
}