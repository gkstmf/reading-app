/*import React from "react";
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
    <View style={{ paddingRight: 21, marginBottom: 15 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 25,
          marginBottom: 0,
          marginLeft: 20,
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
  */

// src/components/common/AppHeader.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface AppHeaderProps {
  title?: string;
}

export default function AppHeader({ title = "우리독서" }: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: "#3D401A",
    justifyContent: "center",
    alignItems: "center",
    // ✅ 그림자 전부 제거 - 경계선 원인
  },
  title: {
    color: "#F8FAF8",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
});