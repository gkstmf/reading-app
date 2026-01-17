import React from "react";
import { View, Text, Image } from "react-native";

export default function MyProfile() {
  return (
    <View style={{ paddingRight: 21, marginBottom: 43 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 27,
          marginLeft: 18,
        }}
      >
        복작복작
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 21,
        }}
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/4ssedphh_expires_30_days.png",
          }}
          style={{ width: 105, height: 105 }}
        />

        <View style={{ flex: 1 }} />

        <Text style={{ fontSize: 24, marginRight: 14 }}>
          (닉네임)
        </Text>

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
