import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import GroupCard from "../../components/group/GroupCard";

export default function GroupMainScreen() {
  return (
    <MainLayout>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 28, paddingHorizontal: 20 }}>
        {/* 상단 로고 */}
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30 }}>복작복작</Text>

        {/* 참여중인 모임 섹션 */}
        <View style={{ marginBottom: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>참여중인 모임</Text>
          <GroupCard 
            name="모임명" 
            description="교환독서 조지기! 규칙 : 어쩌고 저쩌고 못 읽으면 빙수사기 화이팅~" 
            members="김한슬, 똥, 김지민, 권내원, 김다연" 
          />
          {/* 다른 모임이 있다면 여기에 추가 */}
        </View>

        {/* 모임 참여하기 섹션 */}
        <View style={{ 
          backgroundColor: "#D9D9D9", 
          padding: 20, 
          borderRadius: 10, 
          marginBottom: 20, 
          alignItems: "center" 
        }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>모임 참여하기</Text>
          <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
            <Text style={{ fontSize: 14, marginRight: 10 }}>그룹 코드 입력</Text>
            <TextInput 
              style={{ flex: 1, backgroundColor: "#FFF", height: 30, paddingHorizontal: 10 }}
              placeholder="코드를 입력하세요"
            />
          </View>
        </View>

        {/* 모임 생성하기 버튼 */}
        <TouchableOpacity 
          style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            backgroundColor: "#D9D9D9", 
            padding: 15, 
            borderRadius: 10,
            alignItems: "center"
          }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>모임 생성하기</Text>
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>

      </ScrollView>
    </MainLayout>
  );
}