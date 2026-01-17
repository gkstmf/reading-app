// components/GroupSection.tsx
import { View, Text } from "react-native";

export default function GroupSection() {
  return (
    <View style={{ paddingRight: 39, marginTop: 32 }}>
      <Text style={{ fontSize: 20, marginBottom: 27, marginLeft: 39 }}>
        참여중인 그룹
      </Text>

      <View style={{ marginLeft: 39 }}>
        <View style={{ backgroundColor: "#D9D9D9", borderRadius: 10, paddingVertical: 14 }}>
          <Text style={{ fontSize: 20, marginBottom: 14, marginLeft: 96 }}>
            모임 명
          </Text>
        </View>
      </View>
    </View>
  );
}
