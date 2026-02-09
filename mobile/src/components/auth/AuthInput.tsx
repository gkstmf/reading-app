import React from "react";
import { View, Text, TextInput } from "react-native";

export default function AuthInput({ label, placeholder, secureTextEntry }: any) {
  return (
    <View style={{ marginBottom: 20, alignSelf: "stretch" }}>
      <Text style={{ color: "#000000", fontSize: 13, marginBottom: 8 }}>
        {label}
      </Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#B8B8B8", paddingVertical: 5 }}>
        {/* 나중에 TextInput으로 바꿀 수 있게 구조화 */}
        <TextInput 
          placeholder={placeholder} // 안내 문구
          placeholderTextColor="#B8B8B8" // placeholder 색상 지정
          style={{ color: "#000", fontSize: 14, padding: 0 }} // 입력되는 글자 스타일
          secureTextEntry={secureTextEntry} // 비밀번호 숨김 기능 (선택 사항)
          autoCapitalize="none" // 첫 글자 자동 대문자 방지
        />
      </View>
    </View>
  );
}