import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// 작은 버튼용 부품
export const ActionButton = ({ icon, label }: any) => (
  <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
    <Image 
      source={{ uri: `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/${icon}_expires_30_days.png` }} 
      style={{ width: 24, height: 24, marginRight: 14 }} 
    />
    <Text style={{ fontSize: 14, color: "#000" }}>{label}</Text>
  </TouchableOpacity>
);

// 큰 버튼용 부품
export const BigButton = ({ label }: any) => (
  <TouchableOpacity 
    style={{ backgroundColor: "#D9D9D9", paddingVertical: 14, alignItems: "center", marginBottom: 18 }}>
    <Text style={{ fontSize: 15, color: "#000" }}>{label}</Text>
  </TouchableOpacity>
);