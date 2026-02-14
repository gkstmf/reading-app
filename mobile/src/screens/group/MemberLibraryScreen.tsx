// src/screens/mylibrary/MemberLibrary

import React, { useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";

interface MemberLibraryProps {
  memberName: string;
}

export default function MemberLibraryScreen({ memberName }: MemberLibraryProps) {
    const [books, setBooks] = useState<any[]>([]);
  return (
    <MainLayout>
      <ScrollView 
        style={{ flex: 1, backgroundColor: "#FFFFFF" }} 
        contentContainerStyle={{ paddingHorizontal: 14, paddingTop: 28, paddingBottom: 40 }}
      >
        <View style={{ marginBottom: 48 }}>
          <View style={{ alignSelf: "flex-start", marginBottom: 28 }}>
            <Text style={{ color: "#000", fontSize: 24, fontWeight: "bold" }}>
              {/* 3. 여기서 이름을 사용*/}
              {memberName}의 서재
            </Text>
          </View>

          <View style={{ 
            alignItems: "flex-end", 
            backgroundColor: "#F2F2F2", 
            paddingVertical: 13, 
            paddingRight: 19 
          }}>
            <Image 
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/zmqbm869_expires_30_days.png" }} 
              style={{ width: 16, height: 16 }} 
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: 13 }}>
          <LibrarySection
                        title="독서 위시리스트"
                        books={books.filter(b => b.status === "WISH")}
                        type="wish"
                      />
          
                      <LibrarySection
                        title="독서 중"
                        books={books.filter(b => b.status === "READING")}
                        type="reading"
                      />
          
                      <LibrarySection
                        title="독서 완료"
                        books={books.filter(b => b.status === "FINISHED")}
                        type="finished"
                      />
        </View>
      </ScrollView>
    </MainLayout>
  );
}