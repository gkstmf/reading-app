import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import GroupInput from "../../components/group/GroupInput";

export default function CreateGroupScreen() {
  return (
    <MainLayout>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 25, paddingTop: 30, paddingBottom: 40 }}>
        
        {/* 타이틀 */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 40, textAlign: "center" }}>
          모임 만들기
        </Text>

        {/* 입력 영역 */}
        <View style={{ marginBottom: 30 }}>
          <GroupInput label="모임명" placeholder="모임 이름을 입력하세요" />
          
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 25 }}>
             <Text style={{ fontSize: 16, width: 80, color: "#000" }}>모임 인원</Text>
             <View style={{ backgroundColor: "#D9D9D9", paddingHorizontal: 15, paddingVertical: 5, marginRight: 10 }}>
                <Text style={{ fontSize: 16 }}>5</Text>
             </View>
             <Text style={{ fontSize: 16 }}>명</Text>
          </View>

          <GroupInput 
            label="모임 설명" 
            placeholder="모임 소개와 규칙 등 자유롭게 작성하세요" 
            multiline 
            height={150} 
          />
        </View>

        {/* 생성 버튼 */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#D9D9D9", 
            paddingVertical: 15, 
            alignItems: "center", 
            marginHorizontal: 30,
            marginTop: 20
          }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>모임 생성하기</Text>
        </TouchableOpacity>

      </ScrollView>
    </MainLayout>
  );
}