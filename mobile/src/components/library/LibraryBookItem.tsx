import React from "react";
import { View, Text } from "react-native";

interface LibraryBookItemProps {
  title: string;
}

export default function LibraryBookItem({ title }: LibraryBookItemProps) {
  return (
    <View style={{ flex: 1, marginRight: 20 }}>
      {/* 책 표지 이미지 영역 (회색 박스) */}
      <View style={{ height: 95, backgroundColor: "#D9D9D9", marginBottom: 15 }} />
      {/* 책 제목 */}
      <Text style={{ color: "#000000", fontSize: 14 }} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}