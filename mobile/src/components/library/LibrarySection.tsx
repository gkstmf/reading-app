// LibrarySection.tsx
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
  return (
    <View style={{ marginBottom: 40 }}>
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

      <View style={{ flexDirection: "row" }}>
        {books.slice(0, 3).map((book, index) => (
          <LibraryBookItem
            key={book.bookId ?? index}
            title={book.title}
            coverImage={book.coverImage}
          />
        ))}
      </View>
    </View>
  );
}
