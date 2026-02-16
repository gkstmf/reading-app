import React, { useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchProps {
  placeholder?: string;
  onPress?: () => void;       // 일반 모드일 때 클릭 시 실행
  isFullMode?: boolean;       // 현재 전체 화면 모드인지 여부
  onBack?: () => void;        // 전체 화면 모드에서 뒤로가기 버튼 클릭 시
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
  editable?: boolean;         // 입력 가능 여부 (전체 모드에서는 false로 설정)  
}

export default function Search({ 
  placeholder, 
  onPress, 
  isFullMode = false, 
  onBack,
  value, 
  onChangeText,
  onSubmit,
  editable = true
}: SearchProps) {

  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (isFullMode) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100); // 렌더링 타이밍을 맞추기 위한 미세한 지연
      return () => clearTimeout(timer);
    }
  }, [isFullMode]);
  
  return (
    <View style={[styles.container, isFullMode && styles.fullModeContainer]}>
      {isFullMode && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backArrow}>{"←"}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity 
        activeOpacity={1} 
        onPress={onPress} 
        style={styles.inputWrapper}
        disabled={isFullMode} 
      >
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          placeholderTextColor="#B8B8B8"
          style={styles.input}
          editable={isFullMode} 
          value={value}
          onChangeText={onChangeText}

          onSubmitEditing={onSubmit} 
          returnKeyType="search"
          
          pointerEvents={isFullMode ? "auto" : "none"}
          onFocus={!isFullMode ? onPress : undefined}
        />
        <Icon name="search" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "93%",
    marginLeft: "3.5%",
  },
  fullModeContainer: {
    paddingHorizontal: 15,
    paddingTop: '17%', 
    backgroundColor: '#FFF',
  },
  backButton: {
    marginRight: 15,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    paddingHorizontal: 15,
    height: 45,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
});