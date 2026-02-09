import React from "react";
import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PencilLine } from 'lucide-react-native';

export default function MyProfile() {
  return (
    <View style={{ paddingRight: 0, marginBottom: 43 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: -5,
        }}
      >
        <Icon name="circle" size={140} color="#D9D9D9" alignContent='flex-start' />
      
        <View style={{ flex: 1 }} />

        <Text style={{ fontSize: 25, marginRight: 5 }}>
          (닉네임)
        </Text>
        <PencilLine size={20} />

        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/q7bw3xc1_expires_30_days.png",
          }}
          style={{ width: 20, height: 20 }}
        />
      </View>
    </View>
  );
}