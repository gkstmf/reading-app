import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import MainLayout from "../../layouts/MainLayout";
import MemberLibraryItem from "../../components/group/MemberLibraryItem";

export default function GroupDetailScreen() {
  const route = useRoute<any>();
  //const { groupName } = route.params;

  return (
    <MainLayout>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 30, paddingHorizontal: 20 }}>
        
        {/* 타이틀 영역 */}
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}>참여중인 독서모임</Text>
        </View>

        {/* 모임 상세 카드 */}
        <View style={{ 
          backgroundColor: "#FFFFFF", 
          borderColor: "#5D5D5D", 
          borderWidth: 1, 
          borderRadius: 10, 
          padding: 20, 
          marginBottom: 40 
        }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 15 }}>{"그룹명"}</Text>
          <Text style={{ fontSize: 14, color: "#333", marginBottom: 20, lineHeight: 22 }}>
            {"교환독서 조지기\n\n규칙 : 어쩌고 저쩌고\n못 읽으면 빙수사기 화이팅~"}
          </Text>
          <Text style={{ fontSize: 14, color: "#000", marginBottom: 20 }}>
            {"멤버\n김한슬, 똥, 김지민, 권내원, 김다연"}
          </Text>
          
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 16, marginRight: 15 }}>초대코드</Text>
            <View style={{ flex: 1, height: 25, backgroundColor: "#D9D9D9" }} />
          </View>
        </View>

        {/* 그룹 서재 섹션 */}
        <View style={{ marginBottom: 30 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>그룹명의 서재</Text>
            <Image 
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/738nvoam_expires_30_days.png" }} 
              style={{ width: 16, height: 16 }} 
            />
          </View>
          <View style={{ height: 2, backgroundColor: "#000", marginBottom: 15 }} />
          
          <View style={{ flexDirection: "row", gap: 15 }}>
            <View style={{ flex: 1, height: 95, backgroundColor: "#D9D9D9" }} />
            <View style={{ flex: 1, height: 95, backgroundColor: "#D9D9D9" }} />
            <View style={{ flex: 1, height: 95, backgroundColor: "#D9D9D9" }} />
          </View>
        </View>

        {/* 멤버별 서재 리스트 */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
             <MemberLibraryItem memberName="김한슬" />
          </View>
          <View style={{ width: "48%" }}>
             <MemberLibraryItem memberName="기김다연" />
          </View>
          <View style={{ width: "48%" }}>
             <MemberLibraryItem memberName="김지민" />
          </View>
          <View style={{ width: "48%" }}>
             <MemberLibraryItem memberName="권내원" />
          </View>
        </View>

      </ScrollView>
    </MainLayout>
  );
}