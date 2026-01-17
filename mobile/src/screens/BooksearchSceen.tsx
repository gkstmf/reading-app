import React from "react";
import { ScrollView, View, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";
import BookItem from "../components/book/BookItem";

export default function BookSearchScreen() {
  return (
    <MainLayout>
      <ScrollView 
        style={{
          flex: 1,
          paddingVertical: 33,
          paddingHorizontal: 14,
        }}>
        
        {/* 헤더 섹션 */}
        <View style={{ marginBottom: 40 }}>
          <Text 
            style={{
              color: "#000000",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 28,
            }}>
            {"복작복작"}
          </Text>

          {/* 리스트 섹션 */}
          <View>
            <BookItem />
            {/* 데이터가 늘어나면 여기에 <BookItem />를 더 추가하거나 map을 돌리기 */}
          </View>
        </View>

      </ScrollView>
    </MainLayout>
  );
}