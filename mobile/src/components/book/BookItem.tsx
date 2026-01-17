//bookSearch에 사용
import React from "react";
import { View, Text, Image } from "react-native";

export default function BookItem() {
  return (
    <View style={{ marginBottom: 20 }}>
      <View 
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          paddingVertical: 13,
          paddingHorizontal: 27,
        }}>
        <Text style={{ color: "#000000", fontSize: 15 }}>{"종의 기원"}</Text>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/apdqbphv_expires_30_days.png" }} 
          resizeMode={"stretch"}
          style={{ width: 16, height: 16 }}
        />
      </View>
      <View style={{ paddingLeft: 27, paddingTop: 10 }}>
        <Text style={{ color: "#000000", fontSize: 16, lineHeight: 28 }}>
          {"종의 기원 상\n종의 기원 하"}
        </Text>
      </View>
    </View>
  );
}