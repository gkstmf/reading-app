import React from "react";
import { View, Text, Image } from "react-native";
import { PencilLine } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <View style={{ alignContent: 'flex-start' }}>
          <Icon name="search" size={140} color="#D9D9D9" />
        </View>
      
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