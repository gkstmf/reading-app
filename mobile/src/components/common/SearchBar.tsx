import React, { useState } from "react";
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar({ placeholder }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity 
      activeOpacity={1} // 클릭 시 깜빡임 방지
      onPress={() => navigation.navigate('BooksearchScreen')} 
      style={styles.container}
    >
      {/* <TextInput
        placeholder={placeholder}
        placeholderTextColor="#B8B8B8"
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      /> */}
      <Icon name="search" size={24} color="#000000" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 1,
    paddingHorizontal: 15,
    height: 45,
    width: "100%",
    //marginBottom: 20,
  },
  icon: {
    alignItems: "flex-end",
    marginLeft: '93%',
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    paddingVertical: 0,
  },
});