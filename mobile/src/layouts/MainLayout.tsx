// src/layouts/MainLayout.tsx

import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomTabBar from "../components/common/BottomTabBar";

export default function MainLayout({ children }: any) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1 }}>{children}</View>
      <BottomTabBar /> 
    </SafeAreaView>
  );
}