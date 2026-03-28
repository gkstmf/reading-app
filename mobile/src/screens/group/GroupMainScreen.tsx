import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Users, BookOpen, Plus, Lock } from "lucide-react-native";
import MainLayout from "../../layouts/MainLayout";

const MY_GROUPS = [
  { id: 1, name: "고전문학 읽기 모임", currentBook: "데미안", members: 8, progress: 65, color: "#7E8341" },
  { id: 2, name: "자기계발서 함께 읽기", currentBook: "아침 루틴의 힘", members: 12, progress: 40, color: "#3D401A" },
  { id: 3, name: "추리소설 애호가", currentBook: "용의자 X의 헌신", members: 6, progress: 85, color: "#5A5D2E" },
  { id: 4, name: "SF 소설 탐험대", currentBook: "멋진 신세계", members: 10, progress: 30, color: "#7E8341" },
  { id: 5, name: "한국 현대문학 스터디", currentBook: "채식주의자", members: 15, progress: 55, color: "#3D401A" },
];

export default function GroupMainScreen() {
  const navigation = useNavigation<any>();
  const [inviteCode, setInviteCode] = useState("");

  const handleJoinGroup = () => {
    if (inviteCode.trim()) {
      alert(`초대코드 ${inviteCode}로 모임 가입 시도`);
      setInviteCode("");
    }
  };

  return (
    <MainLayout>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#F8FAF8" }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 참여중인 그룹 섹션 */}
        <View style={styles.sectionTitleRow}>
          <Users size={20} color="#7E8341" />
          <Text style={styles.sectionTitle}>참여중인 그룹</Text>
        </View>

        <View style={{ gap: 12, marginBottom: 24 }}>
          {MY_GROUPS.map((group) => (
            <TouchableOpacity
              key={group.id}
              style={styles.groupCard}
              onPress={() => navigation.navigate("GroupDetailScreen", { groupId: String(group.id) })}
              activeOpacity={0.85}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 4, marginTop: 4 }}>
                    <BookOpen size={13} color="#7E8341" />
                    <Text style={styles.groupBook}>{group.currentBook}</Text>
                  </View>
                </View>
                <View style={styles.memberBadge}>
                  <Text style={styles.memberBadgeText}>{group.members}명</Text>
                </View>
              </View>

              {/* 진행률 */}
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={styles.progressLabel}>함께 읽는 중</Text>
                <Text style={[styles.progressValue, { color: group.color }]}>{group.progress}%</Text>
              </View>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${group.progress}%`, backgroundColor: group.color }]} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* 모임 참여하기 섹션 */}
        <View style={styles.card}>
          <View style={styles.sectionTitleRow}>
            <Lock size={17} color="#7E8341" />
            <Text style={styles.cardTitle}>모임 참여하기</Text>
          </View>
          <Text style={styles.cardDesc}>초대코드를 입력하여 모임에 참여하세요</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TextInput
              style={styles.codeInput}
              placeholder="초대코드 입력"
              placeholderTextColor="#A8B08A"
              value={inviteCode}
              onChangeText={setInviteCode}
              onSubmitEditing={handleJoinGroup}
            />
            <TouchableOpacity style={styles.joinBtn} onPress={handleJoinGroup} activeOpacity={0.85}>
              <Text style={styles.joinBtnText}>참여</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 모임 생성하기 버튼 */}
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigation.navigate("CreateGroupScreen")}
          activeOpacity={0.85}
        >
          <Plus size={20} color="#F8FAF8" />
          <Text style={styles.createBtnText}>새 모임 만들기</Text>
        </TouchableOpacity>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#122506",
  },
  groupCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  groupName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#122506",
  },
  groupBook: {
    fontSize: 13,
    color: "#7E8341",
  },
  memberBadge: {
    backgroundColor: "#EDE5CB",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
  },
  memberBadgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3D401A",
  },
  progressLabel: {
    fontSize: 12,
    color: "#122506",
    opacity: 0.6,
  },
  progressValue: {
    fontSize: 12,
    fontWeight: "700",
  },
  progressTrack: {
    height: 8,
    backgroundColor: "#EDE5CB",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#122506",
  },
  cardDesc: {
    fontSize: 13,
    color: "#122506",
    opacity: 0.6,
    marginBottom: 12,
  },
  codeInput: {
    flex: 1,
    backgroundColor: "#F8FAF8",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#122506",
  },
  joinBtn: {
    backgroundColor: "#7E8341",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: "center",
  },
  joinBtnText: {
    color: "#F8FAF8",
    fontWeight: "600",
    fontSize: 14,
  },
  createBtn: {
    backgroundColor: "#3D401A",
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#3D401A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  createBtnText: {
    color: "#F8FAF8",
    fontSize: 16,
    fontWeight: "700",
  },
});