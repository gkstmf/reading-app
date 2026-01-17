import React from "react";
import { View, Text, TextInput } from "react-native";

interface GroupInputProps {
  label: string;
  placeholder?: string;
  multiline?: boolean;
  height?: number;
}

export default function GroupInput({ label, placeholder, multiline, height = 35 }: GroupInputProps) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 25, alignItems: multiline ? "flex-start" : "center" }}>
      <Text style={{ fontSize: 16, width: 80, color: "#000" }}>{label}</Text>
      <View style={{ flex: 1, backgroundColor: "#D9D9D9", height: height, justifyContent: "center", paddingHorizontal: 10 }}>
        <TextInput 
          placeholder={placeholder} 
          multiline={multiline}
          style={{ fontSize: 14, color: "#000" }}
        />
      </View>
    </View>
  );
}