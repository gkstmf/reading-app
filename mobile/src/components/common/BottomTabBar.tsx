// components/BottomTabBar.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomTabBar() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const getTextStyle = (routeName: string) => {
    return {
      fontSize: 18,
      color: route.name === routeName ? "#486240" : "#B8B8B8", 
      fontWeight: route.name === routeName ? "bold" as const : "normal" as const,
      letterSpacing: 1.3,
    };
  };
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: "#000000",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        paddingTop: 12, 
        paddingVertical: 12,
        paddingHorizontal: 0,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("홈")} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
        <Text style={getTextStyle("홈")}>홈</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("내 서재")} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
        <Text style={getTextStyle("내 서재")}>내 서재</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("독서 모임")} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
        <Text style={getTextStyle("독서 모임")}>독서 모임</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("마이")} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
        <Text style={getTextStyle("마이")}>마이</Text>
      </TouchableOpacity>
    </View>
  );
}
