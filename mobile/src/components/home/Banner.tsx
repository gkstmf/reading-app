// components/home/Banner.tsx
import React from "react";
import { View, Text } from "react-native";

export default function Banner() {
  return (
    <View 
      style={{ 
        backgroundColor: "#D9D9D9", 
        paddingVertical: 22, 
        alignItems: "center" 
      }}
    >
      <Text>공지나 광고 배너</Text>
    </View>
  );
}
