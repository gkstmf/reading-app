// src/layouts/MainLayout.tsx

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabBar from "../components/common/BottomTabBar";

export default function MainLayout({ children }: any) {
  // 여기에 로그를 추가해서 확인해보세요!
  console.log("Check BottomTabBar inside MainLayout:", BottomTabBar);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1 }}>{children}</View>
      <BottomTabBar /> 
    </SafeAreaView>
  );
}