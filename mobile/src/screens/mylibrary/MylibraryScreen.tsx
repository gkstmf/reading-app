import React from "react";
import { ScrollView, View, Text } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import LibrarySection from "../../components/library/LibrarySection";

export default function LibraryScreen() {
  return (
    <MainLayout>
      <ScrollView style={{ flex: 1, paddingVertical: 28, paddingHorizontal: 26 }}>
        {/* 상단 로고/타이틀 영역 */}
        <View style={{ marginBottom: 28 }}>
          <Text style={{ fontSize: 24, color: "#000", fontWeight: "bold" }}>복작복작</Text>
        </View>

        {/* 각 섹션 호출 */}
        <LibrarySection 
          title="독서 위시리스트" 
          iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/u0tctwi0_expires_30_days.png" 
        />
        
        <LibrarySection 
          title="독서 중" 
          iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/39hw5iz2_expires_30_days.png" 
        />

        <LibrarySection 
          title="독서 완료" 
          iconUri="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/dmxohdva_expires_30_days.png" 
        />
      </ScrollView>
    </MainLayout>
  );
}