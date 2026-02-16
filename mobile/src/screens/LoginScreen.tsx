import React from "react";

import { ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthInput from "../components/auth/AuthInput";

export default function LoginScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          alignItems: "center", 
          paddingTop: 100, 
          paddingHorizontal: 40 
        }}
        enableOnAndroid={true} // 안드로이드 대응
        extraScrollHeight={20} // 키보드와 입력창 사이 간격
      >
        {/* 로고 섹션 */}
        <Image 
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/cvdykkw8_expires_30_days.png" }}
          style={{ width: 80, height: 80, marginBottom: 10 }} 
        />
        <Text style={{ fontSize: 20, marginBottom: 40 }}>우리독서</Text>

        {/* 입력 섹션 */}
        <AuthInput label="이메일 주소" placeholder="이메일 주소를 입력해주세요." />
        <AuthInput label="비밀번호" placeholder="비밀번호를 입력해주세요." secureTextEntry={true}/>

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
          onPress={() => navigation.navigate('Main')}
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
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{ color: "#486240", fontSize: 18 }}>회원가입</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}