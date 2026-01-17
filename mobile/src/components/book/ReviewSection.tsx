import React from "react";
import { View, Text, Image } from "react-native";

interface ReviewSectionProps {
  name: string;
  content: string;
}

export default function ReviewSection({ name, content }: ReviewSectionProps) {
  return (
    <View style={{ marginBottom: 40 }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#000", flex: 1 }}>{name}의 서평</Text>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Image 
              key={i}
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/coebh9av_expires_30_days.png" }} 
              style={{ width: 20, height: 20, marginLeft: 2 }} 
            />
          ))}
        </View>
      </View>
      <View style={{ minHeight: 150, backgroundColor: "#EDEDED", padding: 15 }}>
        <Text style={{ fontSize: 14, color: "#333", lineHeight: 20 }}>{content}</Text>
      </View>
    </View>
  );
}