// components/GroupSection.tsx
import { View, Text } from "react-native";
import GroupCard from "./GroupCard";

export default function GroupSection() {
  return (
    <View style={{ paddingRight: 39, marginTop: 32 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 27, textAlign: "center" }}>
        참여중인 그룹
      </Text>


      {/* 임시. 나중에 백에서 데이터 불러오는 식으로 수정*/}
      <GroupCard 
        name="모임 명" 
        description="교환독서 조지기! 규칙 : 어쩌고 저쩌고 못 읽으면 빙수사기 화이팅 ~"
        members="김한슬, 똥, 김지민, 권내원, 김다연" 
      />

      <View style={{ 
        backgroundColor: "#D9D9D9", 
        borderRadius: 10, 
        height: 60, 
        marginBottom: 15 
      }} />
      
      <View style={{ 
        backgroundColor: "#D9D9D9", 
        borderRadius: 10, 
        height: 60, 
        marginBottom: 15 
      }} />
    </View>
  );
}
