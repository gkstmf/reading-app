import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LogoutSection() {
  const handleLogout = () => {
    Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      { text: "확인", onPress: () => console.log("로그아웃 로직 실행") }
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
        activeOpacity={0.7}
      >
        <Text style={styles.logoutText}>로그아웃</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.withdrawContainer}>
        <Text style={styles.withdrawText}>계정 탈퇴</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    alignItems: 'center',
    width: '100%',
  },
  logoutButton: {
    backgroundColor: '#D9D9D9', 
    width: 180, 
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, 
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  withdrawContainer: {
    padding: 10,
  },
  withdrawText: {
    fontSize: 15,
    color: '#828282', 
    textDecorationLine: 'underline', 
    marginBottom: 10,
  },
});