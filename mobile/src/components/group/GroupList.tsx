import React from "react";
import { View, Text } from "react-native";
import GroupItem from "./GroupItem"; 

interface GroupListProps {
  groups?: any[];
}

export default function GroupList({ groups }: GroupListProps) {
  console.log("Received groups:", groups);

  return (
    <View>
      <View style={{ marginBottom: 11, marginHorizontal: 7 }}>
        <Text style={{ fontSize: 20, marginBottom: 6, marginLeft: 3 }}>
          그룹 관리
        </Text>
        <View style={{ height: 1, backgroundColor: "#000" }} />
      </View>

      <View style={{ marginHorizontal: 10 }}>
        {groups && groups.length > 0 ? (
          groups.map((group) => (
            <GroupItem key={group.id} group={group} />
          ))
        ) : (
          <Text>가입된 그룹이 없습니다.</Text>
        )}
      </View>
    </View>
  );
}