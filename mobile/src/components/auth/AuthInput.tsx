import React from "react";
import { View, Text, TextInput } from "react-native";

export default function AuthInput({ label, placeholder }: any) {
  return (
    <View style={{ marginBottom: 20, alignSelf: "stretch" }}>
      <Text style={{ color: "#000000", fontSize: 13, marginBottom: 8 }}>
        {label}
      </Text>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#B8B8B8", paddingVertical: 5 }}>
        {/* 나중에 TextInput으로 바꿀 수 있게 구조화 */}
        <Text style={{ color: "#B8B8B8", fontSize: 11 }}>{placeholder}</Text>
      </View>
    </View>
  );
}