import React from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import MainLayout from "../../layouts/MainLayout";
import GroupCard from "../../components/group/GroupCard";
import GroupSection from "../../components/group/GroupSection";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

export default function GroupMainScreen() {
  const navigation = useNavigation<any>();
  return (
    <MainLayout>
      <KeyboardAwareScrollView 
      contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
      <View style={{ marginBottom: 40 }}>
        <GroupSection />
      </View>

        {/* 모임 참여하기 섹션 */}
        <View style={{ 
          backgroundColor: "#D9D9D9", 
          padding: 20, 
          borderRadius: 3, 
          marginBottom: 20, 
          alignItems: "center", 
          marginHorizontal: 10
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
          onPress={() => navigation.navigate('CreateGroupScreen')}
          style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            backgroundColor: "#D9D9D9", 
            padding: 15, 
            borderRadius: 3,
            alignItems: "center",
            marginHorizontal: 10
          }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>모임 생성하기</Text>
          <Text style={{ fontSize: 24 }}>+</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </MainLayout>
  );
}