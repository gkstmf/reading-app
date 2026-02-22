import React from "react";
import { View, Text } from "react-native";

interface GroupItemProps {
  group: {
    id: number;
    name: string;
    color: string;
    description: string;
  };
}

export default function GroupItem({ group }: GroupItemProps) {
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
          backgroundColor: group.color || "#ECECEC",
          borderRadius: 10,
          paddingVertical: 8,
          marginRight: 12,
        }}
      >
        <Text style={{ fontSize: 14, marginBottom: 7, marginLeft: 11 }}>
          {group.name}
        </Text>

        <Text style={{ fontSize: 10, marginLeft: 16 }}>
          {group.description}
        </Text>
      </View>

      <Text style={{ fontSize: 10 }}>나가기</Text>
    </View>
  );
}