import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthInput from "../components/auth/AuthInput";

export default function SignupScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} // 로그인 화면으로 복귀
            style={{ padding: 10, width: 50 }} // 터치 영역 확대
          >
            <Text style={{ fontSize: 24, color: "#000" }}>{"←"}</Text>
          </TouchableOpacity>
        </View>
        
      <KeyboardAwareScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          paddingHorizontal: 40, 
          paddingTop: 20, 
          paddingBottom: 60 
        }}
        enableOnAndroid={true} // 안드로이드 대응
        extraScrollHeight={30} // 키보드와 입력창 사이 여유 공간
      >
        <Text style={{ fontSize: 36, fontWeight: "bold", marginBottom: 40, textAlign: "center" }}>
          회원가입
        </Text>

        {/* 공통 입력 컴포넌트 사용 */}
        <AuthInput label="이름" placeholder="이름을 입력해주세요." />
        <AuthInput label="이메일 주소" placeholder="이메일 주소를 입력해주세요." />
        <AuthInput label="비밀번호" placeholder="비밀번호를 입력해주세요." secureTextEntry={true}/>
        <AuthInput label="비밀번호 확인" placeholder="비밀번호를 다시 한번 입력해주세요." secureTextEntry={true}/>

        {/* 가입 버튼 */}
        <TouchableOpacity 
          style={{ 
            backgroundColor: "#486240", 
            padding: 15, 
            borderRadius: 4, 
            alignItems: 'center', 
            marginTop: 20 
          }} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "600" }}>
            가입하기
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}