import React from "react";
import { View, Text, Image } from "react-native";

interface Props {
  title: string;
  profileImage?: string;
  rightIcon?: string;
  rightText?: string;
}

export default function AppHeader({
  title,
  profileImage,
  rightIcon,
  rightText,
}: Props) {
  return (
    <View style={{ paddingRight: 21, marginBottom: 43 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 27,
          marginLeft: 18,
        }}
      >
        {title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 21,
        }}
      >
        {profileImage && (
          <Image
            source={{ uri: profileImage }}
            style={{ width: 105, height: 105 }}
          />
        )}

        <View style={{ flex: 1 }} />

        {rightText && (
          <Text style={{ fontSize: 24, marginRight: 14 }}>
            {rightText}
          </Text>
        )}

        {rightIcon && (
          <Image
            source={{ uri: rightIcon }}
            style={{ width: 20, height: 20 }}
          />
        )}
      </View>
    </View>
  );
}
