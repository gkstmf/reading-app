
import React from "react";
import { View, Text } from "react-native";

export default function MyAccount() {
  return (
    <View style={{ alignItems: "center", marginBottom: 47 }}>
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#D9D9D9",
          paddingVertical: 8,
          paddingHorizontal: 53,
          marginBottom: 21,
        }}
      >
        <Text style={{ fontSize: 16 }}>로그아웃</Text>
      </View>

      <Text style={{ fontSize: 10, color: "#6C6C6C", marginLeft: 60 }}>
        계정 탈퇴
      </Text>
    </View>
  );
}
