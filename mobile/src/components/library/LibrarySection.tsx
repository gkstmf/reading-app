import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import LibraryBookItem from "./LibraryBookItem";

interface LibrarySectionProps {
  title: string;
  books: any[];
}

export default function LibrarySection({title,books,}: LibrarySectionProps) {
  const navigation = useNavigation<any>();
  const displayItems = [0, 1, 2]; // 책 세 칸으로 고정

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.header} 
      onPress={() => navigation.navigate("LibraryDetailScreen", { title })}
      >
        <Text style={styles.title}>{title}</Text>
        <Icon name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.bookList}>
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
    color: "#000",
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginBottom: 13,
  },
  bookList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});