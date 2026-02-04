import React from "react";
import { View, Text, Image } from "react-native";

interface LibraryBookItemProps {
  title: string;
  coverImage?: string; // 👈 1. 타입을 추가해서 에러 해결 (있을수도 없을수도 있으니 ?)
}

export default function LibraryBookItem({ title, coverImage }: LibraryBookItemProps) {
  return (
    <View style={{ flex: 1, marginRight: 20 }}>
      {/* 2. 조건부 렌더링: 이미지가 있으면 Image, 없으면 회색 View */}
      {coverImage ? (
        <Image 
          source={{ uri: coverImage }} 
          style={{ height: 95, borderRadius: 4, marginBottom: 15 }} 
          resizeMode="cover"
        />
      ) : (
        <View style={{ height: 95, backgroundColor: "#D9D9D9", marginBottom: 15 }} />
      )}

      {/* 책 제목 */}
      <Text style={{ color: "#000000", fontSize: 14 }} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}