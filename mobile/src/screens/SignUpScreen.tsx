import React from "react";

import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import AuthInput from "../components/auth/AuthInput";

export default function SignupScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView 
        contentContainerStyle={{ 
          paddingHorizontal: 40, 
          paddingVertical: 60 
        }}
      >
        <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 40 }}>
          회원가입
        </Text>

        {/* 공통 입력 컴포넌트 사용 */}
        <AuthInput label="이름" placeholder="이름을 입력해주세요." />
        <AuthInput label="이메일 주소" placeholder="이메일 주소를 입력해주세요." />
        <AuthInput label="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <AuthInput label="비밀번호 확인" placeholder="비밀번호를 다시 한번 입력해주세요." />

        {/* 가입 버튼 */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#486240", 
            padding: 15, 
            borderRadius: 4, 
            alignItems: 'center', 
            marginTop: 20 
          }} 
          onPress={() => console.log('가입하기 버튼 클릭')}
        >
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>
            가입하기
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}