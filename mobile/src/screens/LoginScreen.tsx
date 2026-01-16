import React from "react";

import { ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import AuthInput from "../components/auth/AuthInput";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView 
        contentContainerStyle={{ 
          alignItems: "center", 
          paddingTop: 100, 
          paddingHorizontal: 40 
        }}
      >
        {/* 로고 섹션 */}
        <Image 
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/cvdykkw8_expires_30_days.png" }}
          style={{ width: 80, height: 80, marginBottom: 10 }} 
        />
        <Text style={{ fontSize: 20, marginBottom: 40 }}>복작복작</Text>

        {/* 입력 섹션 */}
        <AuthInput label="이메일 주소" placeholder="이메일 주소를 입력해주세요." />
        <AuthInput label="비밀번호" placeholder="비밀번호를 입력해주세요." />

        {/* 버튼 섹션 */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#486240", 
            width: '100%', 
            padding: 15, 
            borderRadius: 4, 
            alignItems: 'center', 
            marginBottom: 10 
          }} 
          onPress={() => console.log('로그인 시도')}
        >
          <Text style={{ color: "#FFF", fontSize: 18 }}>로그인</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#EFEBE7", 
            width: '100%', 
            padding: 15, 
            borderRadius: 4, 
            alignItems: 'center' 
          }} 
          onPress={() => console.log('회원가입 이동')}
        >
          <Text style={{ color: "#486240", fontSize: 18 }}>회원가입</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}