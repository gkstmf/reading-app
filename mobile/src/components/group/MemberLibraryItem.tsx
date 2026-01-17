import React from "react";
import { View, Text } from "react-native";

interface MemberLibraryProps {
  memberName: string;
}

export default function MemberLibraryItem({ memberName }: MemberLibraryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F6F6", paddingVertical: 15, alignItems: "center", marginBottom: 14 }}>
      <View style={{ marginBottom: 13, borderBottomWidth: 1, borderColor: "#000" }}>
        <Text style={{ fontSize: 16, color: "#000", paddingBottom: 5 }}>
          {memberName}의 서재
        </Text>
      </View>
      <View style={{ width: 75, height: 95, backgroundColor: "#D9D9D9" }} />
    </View>
  );
}