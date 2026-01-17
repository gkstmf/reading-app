// components/MyLibraryPreview.tsx
import { View, Text, Image } from "react-native";

export default function MyLibraryPreview() {
  return (
    <View style={{ marginTop: 46, alignItems: "center" }}>
      <Text style={{ fontSize: 16, marginBottom: 7 }}>내 서재</Text>

      <View style={{ backgroundColor: "#F2F2F2", padding: 10 }}>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/q8rtaenk_expires_30_days.png" }}
          style={{ width: 12, height: 13 }}
        />
      </View>
    </View>
  );
}