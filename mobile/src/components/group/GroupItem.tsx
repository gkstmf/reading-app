import React from "react";
import { View, Text } from "react-native";

export default function GroupItem() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#ECECEC",
          borderRadius: 10,
          paddingVertical: 8,
          marginRight: 12,
        }}
      >
        <Text style={{ fontSize: 14, marginBottom: 7, marginLeft: 11 }}>
          그룹 명
        </Text>
        <Text style={{ fontSize: 10, marginLeft: 16 }}>
          김한슬, 똥, 기김ㄷ다연
        </Text>
      </View>

      <Text style={{ fontSize: 10 }}>나가기</Text>
    </View>
  );
}
