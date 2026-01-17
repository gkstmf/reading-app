// src/components/group/GroupList.tsx

import React from "react";
import { View, Text } from "react-native";
import GroupItem from "./GroupItem"; 

export default function GroupList() {
  console.log("Check GroupItem:", GroupItem); // 여기서 {} 가 나오면 안 됩니다.

  return (
    <View>
      <View style={{ marginBottom: 11, marginHorizontal: 7 }}>
        <Text style={{ fontSize: 20, marginBottom: 6, marginLeft: 3 }}>그룹 관리</Text>
        <View style={{ height: 1, backgroundColor: "#000" }} />
      </View>

      <View style={{ marginHorizontal: 10 }}>
         {GroupItem && typeof GroupItem === 'function' ? <GroupItem /> : <Text>로딩 실패</Text>}
      </View>
    </View>
  );
}