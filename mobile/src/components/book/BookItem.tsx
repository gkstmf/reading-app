import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// 데이터를 받아오기 위한 타입 정의 (TypeScript)
interface BookProps {
  book: {
    title: string;
    author: string;
    publisher: string;
    image: string;
  };
  onPress: () => void;
}

export default function BookItem({ book, onPress }: BookProps) {
  return (
    <TouchableOpacity style={styles.bookItem} onPress={onPress}>
      <Image source={{ uri: book.image }} style={styles.bookImage} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookDetails}>{book.author} | {book.publisher}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bookImage: {
    width: 50,
    height: 70,
    borderRadius: 4,
    backgroundColor: '#EAEAEA',
  },
  bookInfo: {
    marginLeft: 15,
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  bookDetails: {
    fontSize: 13,
    color: '#888',
  },
});