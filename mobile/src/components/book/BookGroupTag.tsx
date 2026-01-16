import React from "react";
import { ImageBackground, Text } from "react-native";

interface GroupTagProps {
  name: string;
  bg: string; // 이미지 ID (예: "wf4bz4b0")
}

export const GroupTag = ({ name, bg }: GroupTagProps) => (
  <ImageBackground 
    source={{ uri: `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/${bg}_expires_30_days.png` }} 
    resizeMode="stretch"
    style={{
      paddingVertical: 17,
      paddingHorizontal: 10,
      marginRight: 20,
      minWidth: 60,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{ color: "#000000", fontSize: 15 }}>{name}</Text>
  </ImageBackground>
);