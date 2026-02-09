// src/layouts/MainLayout.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabBar from "../components/common/BottomTabBar";
import AppHeader from "../components/common/AppHeader"; // 👈 기존 AppHeader 임포트

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  profileImage?: string;
  rightIcon?: string;
  rightText?: string;
}

export default function MainLayout({ 
  children, 
  title = "우리독서",
  profileImage,
  rightIcon,
  rightText 
}: MainLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader 
        title={title}
        profileImage={profileImage}
        rightIcon={rightIcon}
        rightText={rightText}
      />

      {/* 컨텐츠 영역 */}
      <View style={styles.content}>{children}</View>

      <BottomTabBar /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  content: { flex: 1 },
});