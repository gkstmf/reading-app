import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Users, Copy, BookOpen, Check } from "lucide-react-native";
import MainLayout from "../../layouts/MainLayout";

const GROUPS_DATA: Record<string, any> = {
  "1": {
    id: 1,
    name: "고전문학 읽기 모임",
    description: "천천히, 깊이 있게 고전문학을 함께 읽어요. 매주 일요일 오후 8시에 온라인으로 모여 토론합니다.",
    currentBook: {
      title: "데미안",
      author: "헤르만 헤세",
      progress: 65,
      totalPages: 248,
      currentPage: 161,
      coverColor: "#8B7355",
    },
    members: [
      { id: 1, name: "김민준", avatar: "🧑" },
      { id: 2, name: "이서연", avatar: "🧑" },
      { id: 3, name: "박지호", avatar: "🧑" },
      { id: 4, name: "최유진", avatar: "🧑" },
      { id: 5, name: "정도윤", avatar: "🧑" },
      { id: 6, name: "강서아", avatar: "🧑" },
      { id: 7, name: "조민서", avatar: "🧑" },
      { id: 8, name: "윤재현", avatar: "🧑" },
    ],
    inviteCode: "CLASSIC2024",
    wishlist: [
      { id: 1, title: "변신", author: "프란츠 카프카", coverColor: "#6B8E23" },
      { id: 2, title: "이방인", author: "알베르 카뮈", coverColor: "#8B4513" },
      { id: 3, title: "1984", author: "조지 오웰", coverColor: "#2F4F4F" },
    ],
  },
};

export default function GroupDetailScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [copied, setCopied] = useState(false);

  const groupId = route.params?.groupId ?? "1";
  const group = GROUPS_DATA[groupId] ?? GROUPS_DATA["1"];

  const handleCopyInviteCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MainLayout>
      {/* 서브 헤더 */}
      <View style={styles.subHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={22} color="#122506" />
        </TouchableOpacity>
        <Text style={styles.subHeaderTitle}>그룹 정보</Text>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: "#F8FAF8" }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 함께 읽는 중인 책 */}
        <View style={styles.sectionTitleRow}>
          <BookOpen size={18} color="#7E8341" />
          <Text style={styles.sectionTitle}>함께 읽는 중</Text>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: "row", gap: 16, marginBottom: 16 }}>
            <View style={[styles.bookCover, { backgroundColor: group.currentBook.coverColor }]}>
              <BookOpen size={28} color="#F8FAF8" />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.bookTitle}>{group.currentBook.title}</Text>
              <Text style={styles.bookAuthor}>{group.currentBook.author}</Text>
              <View style={styles.pageTag}>
                <Text style={styles.pageTagText}>
                  {group.currentBook.currentPage} / {group.currentBook.totalPages} 페이지
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
            <Text style={styles.progressLabel}>그룹 진행률</Text>
            <Text style={styles.progressValue}>{group.currentBook.progress}%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${group.currentBook.progress}%` }]} />
          </View>
        </View>

        {/* 그룹 기본 정보 */}
        <View style={[styles.card, { marginTop: 16 }]}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text style={styles.groupDesc}>{group.description}</Text>

          {/* 멤버 */}
          <View style={styles.sectionTitleRow}>
            <Users size={15} color="#7E8341" />
            <Text style={styles.subLabel}>멤버 ({group.members.length})</Text>
          </View>
          <View style={styles.memberRow}>
            {group.members.map((m: any) => (
              <View key={m.id} style={styles.memberChip}>
                <Text style={styles.memberAvatar}>{m.avatar}</Text>
                <Text style={styles.memberChipText}>{m.name}</Text>
              </View>
            ))}
          </View>

          {/* 초대코드 */}
          <Text style={[styles.subLabel, { marginTop: 16, marginBottom: 8 }]}>초대코드</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <View style={styles.inviteCodeBox}>
              <Text style={styles.inviteCodeText}>{group.inviteCode}</Text>
            </View>
            <TouchableOpacity
              style={[styles.copyBtn, { backgroundColor: copied ? "#7E8341" : "#3D401A" }]}
              onPress={handleCopyInviteCode}
              activeOpacity={0.85}
            >
              {copied ? <Check size={16} color="#F8FAF8" /> : <Copy size={16} color="#F8FAF8" />}
              <Text style={styles.copyBtnText}>{copied ? "복사됨" : "복사"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 읽고 싶은 책 */}
        <View style={{ marginTop: 24 }}>
          <View style={styles.sectionTitleRow}>
            <BookOpen size={18} color="#7E8341" />
            <Text style={styles.sectionTitle}>읽고 싶은 책</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 12 }}>
            {group.wishlist.map((book: any) => (
              <View key={book.id} style={[styles.wishCard, { flex: 1 }]}>
                <View style={[styles.wishCover, { backgroundColor: book.coverColor }]}>
                  <BookOpen size={20} color="#F8FAF8" />
                </View>
                <Text style={styles.wishTitle} numberOfLines={2}>{book.title}</Text>
                <Text style={styles.wishAuthor} numberOfLines={1}>{book.author}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#F8FAF8",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EBD8",
    gap: 10,
  },
  backBtn: { padding: 2 },
  subHeaderTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#122506",
    letterSpacing: -0.3,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#122506",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  bookCover: {
    width: 80,
    height: 110,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#122506",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 13,
    color: "#122506",
    opacity: 0.6,
    marginBottom: 10,
  },
  pageTag: {
    backgroundColor: "#EDE5CB",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  pageTagText: {
    fontSize: 12,
    color: "#3D401A",
    fontWeight: "500",
  },
  progressLabel: {
    fontSize: 13,
    color: "#122506",
    opacity: 0.7,
  },
  progressValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#7E8341",
  },
  progressTrack: {
    height: 10,
    backgroundColor: "#EDE5CB",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#7E8341",
    borderRadius: 5,
  },
  groupName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#122506",
    marginBottom: 8,
  },
  groupDesc: {
    fontSize: 13,
    color: "#122506",
    opacity: 0.7,
    lineHeight: 20,
    marginBottom: 16,
  },
  subLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#122506",
  },
  memberRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  memberChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#F8FAF8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
  },
  memberAvatar: {
    fontSize: 14,
  },
  memberChipText: {
    fontSize: 13,
    color: "#122506",
  },
  inviteCodeBox: {
    flex: 1,
    backgroundColor: "#F8FAF8",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: "center",
  },
  inviteCodeText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#3D401A",
  },
  copyBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  copyBtnText: {
    fontSize: 13,
    color: "#F8FAF8",
    fontWeight: "600",
  },
  wishCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  wishCover: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  wishTitle: {
    fontSize: 11,
    fontWeight: "600",
    color: "#122506",
    marginBottom: 2,
    lineHeight: 15,
  },
  wishAuthor: {
    fontSize: 10,
    color: "#122506",
    opacity: 0.6,
  },
});