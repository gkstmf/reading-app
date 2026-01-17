// src/screens/mylibrary/MemberLibrary

import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";

interface MemberLibraryProps {
  memberName: string;
}

export default function MemberLibraryScreen({ memberName }: MemberLibraryProps) {
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
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/j0zsgmgl_expires_30_days.png" 
          />
          <LibrarySection 
            title="독서 중" 
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/jfjbuiw7_expires_30_days.png" 
          />
          <LibrarySection 
            title="독서 완료" 
            iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/33u8jzz8_expires_30_days.png" 
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
}