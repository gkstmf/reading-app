import React from "react";
import { View, Text, Image } from "react-native";

interface LibrarySectionProps {
  title: string;
  iconUri: string;
}

export default function LibrarySection({ title, iconUri }: LibrarySectionProps) {
  return (
    <View style={{ marginBottom: 40 }}>
      {/* 섹션 헤더: 제목과 아이콘 */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 7 }}>
        <Text style={{ fontSize: 16, color: "#000" }}>{title}</Text>
        <Image source={{ uri: iconUri }} style={{ width: 16, height: 16 }} />
      </View>

      {/* 구분선 */}
      <View style={{ height: 1, backgroundColor: "#000", marginBottom: 13 }} />

      {/* 도서 리스트 (회색 박스들) */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {[1, 2, 3].map((_, index) => (
          <View 
            key={index}
            style={{ 
              height: 95, 
              flex: 1, 
              backgroundColor: "#D9D9D9", 
              marginRight: index === 2 ? 0 : 20 
            }} 
          />
        ))}
        {/* 오른쪽 끝 화살표 아이콘 영역 (옵션) */}
        <View style={{ width: 16, marginLeft: 10 }} /> 
      </View>
    </View>
  );
}