import React, { useState } from "react";
import {
  ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Pressable, FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Users, FileText, UserPlus, ChevronDown } from "lucide-react-native";
import MainLayout from "../../layouts/MainLayout";

export default function CreateGroupScreen() {
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [maxMembers, setMaxMembers] = useState<number>(10);
  
  // 모달 상태 관리
  const [isModalVisible, setIsModalVisible] = useState(false);
  const memberOptions = [5, 10, 15, 20, 30, 50];

  const handleCreate = () => {
    if (!groupName.trim()) { alert("모임명을 입력해주세요"); return; }
    if (!description.trim()) { alert("모임 설명을 입력해주세요"); return; }
    alert(`모임이 생성되었습니다!\n모임명: ${groupName}\n인원: ${maxMembers}명`);
  };

  return (
    <MainLayout>
      {/* 서브 헤더 */}
      <View style={styles.subHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={22} color="#122506" />
        </TouchableOpacity>
        <Text style={styles.subHeaderTitle}>새 모임 만들기</Text>
      </View>

      <ScrollView
        style={{ flex: 1, backgroundColor: "#F8FAF8" }}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 모임명 */}
        <View style={styles.fieldWrap}>
          <View style={styles.labelRow}>
            <Users size={16} color="#7E8341" />
            <Text style={styles.label}>모임명</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="예: 고전문학 읽기 모임"
            placeholderTextColor="#A8B08A"
            value={groupName}
            onChangeText={setGroupName}
            maxLength={50}
          />
          <Text style={styles.counter}>{groupName.length}/50</Text>
        </View>

        {/* 최대 인원 - Picker 대신 TouchableOpacity 사용 */}
        <View style={styles.fieldWrap}>
          <View style={styles.labelRow}>
            <UserPlus size={16} color="#7E8341" />
            <Text style={styles.label}>최대 인원</Text>
          </View>
          <TouchableOpacity 
            style={styles.customPicker} 
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.pickerValueText}>{maxMembers}명</Text>
            <ChevronDown size={20} color="#7E8341" />
          </TouchableOpacity>
        </View>

        {/* 모임 설명 */}
        <View style={styles.fieldWrap}>
          <View style={styles.labelRow}>
            <FileText size={16} color="#7E8341" />
            <Text style={styles.label}>모임 설명</Text>
          </View>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder={"모임에 대해 자유롭게 소개해주세요\n예: 천천히, 깊이 있게 고전문학을 함께 읽어요."}
            placeholderTextColor="#A8B08A"
            value={description}
            onChangeText={setDescription}
            maxLength={200}
            multiline
            textAlignVertical="top"
          />
          <Text style={styles.counter}>{description.length}/200</Text>
        </View>

        {/* 안내 문구 */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 모임이 생성되면 초대코드가 발급됩니다. 초대코드를 공유하여 친구들을 모임에 초대할 수 있어요!
          </Text>
        </View>
      </ScrollView>

      {/* 인원 선택 모달 */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>최대 인원 선택</Text>
            </View>
            <FlatList
              data={memberOptions}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.modalItem}
                  onPress={() => {
                    setMaxMembers(item);
                    setIsModalVisible(false);
                  }}
                >
                  <Text style={[
                    styles.modalItemText, 
                    maxMembers === item && styles.selectedItemText
                  ]}>
                    {item}명
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>

      {/* 하단 버튼 */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.createBtn} onPress={handleCreate} activeOpacity={0.85}>
          <Text style={styles.createBtnText}>모임 생성하기</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  // ... 기존 스타일 유지 ...
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
  fieldWrap: { marginBottom: 24 },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  label: { fontSize: 14, fontWeight: "600", color: "#122506" },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#122506",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  textarea: { height: 130, paddingTop: 14 },
  counter: {
    fontSize: 12,
    color: "#122506",
    opacity: 0.45,
    textAlign: "right",
    marginTop: 6,
  },

  // 커스텀 피커 스타일
  customPicker: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  pickerValueText: {
    fontSize: 15,
    color: "#122506",
  },

  // 모달 스타일
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: '50%',
  },
  modalHeader: {
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#122506',
  },
  modalItem: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
    color: '#666',
  },
  selectedItemText: {
    color: '#3D401A',
    fontWeight: '700',
  },

  infoBox: {
    backgroundColor: "#EDE5CB",
    borderRadius: 14,
    padding: 16,
    marginTop: 4,
  },
  infoText: { fontSize: 13, color: "#3D401A", lineHeight: 20 },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F8FAF8",
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 28,
  },
  createBtn: {
    backgroundColor: "#3D401A",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#3D401A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  createBtnText: {
    color: "#F8FAF8",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
});