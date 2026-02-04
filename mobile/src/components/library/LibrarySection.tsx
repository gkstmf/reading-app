import React from "react";
import { View, Text, Image } from "react-native";
import LibraryBookItem from "./LibraryBookItem";

interface LibrarySectionProps {
  title: string;
  iconUri: string;
  books: any[];
}

export default function LibrarySection({
  title,
  iconUri,
  books,
}: LibrarySectionProps) {

  // 책 세 칸으로 고정
  const displayItems = [0, 1, 2]; 

  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <Text style={{ fontSize: 16, color: "#000" }}>{title}</Text>
        <Image source={{ uri: iconUri }} style={{ width: 16, height: 16 }} />
      </View>

      <View style={{ height: 1, backgroundColor: "#000", marginBottom: 13 }} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {displayItems.map((_, index) => {
          const book = books[index]; // 데이터가 있으면 해당 책, 없으면 undefined

          return (
            <LibraryBookItem
              key={book?.bookId ?? `empty-${index}`}
              title={book?.title}       // 데이터 없으면 undefined 전달
              coverImage={book?.coverImage} // 데이터 없으면 undefined 전달
            />
          );
        })}
      </View>
    </View>
  );
}