// components/BottomTabBar.tsx
import { View, Text } from "react-native";

export default function BottomTabBar() {
  return (
    <View
      style={{
        borderTopWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 26,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>홈</Text>
      <Text>내 서재</Text>
      <Text style={{ color: "#486240" }}>독서 모임</Text>
      <Text>마이</Text>
    </View>
  );
}
