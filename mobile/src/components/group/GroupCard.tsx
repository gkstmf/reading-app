import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface GroupCardProps {
  name: string;
  description: string;
  members: string;
}

export default function GroupCard({ name, description, members }: GroupCardProps) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('GroupDetailScreen')}
      activeOpacity={0.8} 
      style={{ 
        backgroundColor: "#D9D9D9", 
        borderRadius: 10, 
        padding: 18, 
        marginBottom: 15,
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>{name}</Text>
      <Text style={{ fontSize: 14, color: "#333", marginBottom: 15 }}>{description}</Text>
      <Text style={{ fontSize: 12, color: "#666" }}>멤버: {members}</Text>
    </TouchableOpacity>
  );
}