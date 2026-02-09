// components/MyLibraryPreview.tsx
import { View, Text, Image } from "react-native";
import SearchBar from "../common/SearchBar";

export default function MyLibraryPreview() {
  return (
    <View style={{ marginTop: 46, alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 15, fontWeight: "bold" }}>내 서재</Text>

      <View style={{ width: '100%', paddingHorizontal: 35 }}>
        <SearchBar />
      </View>
    </View>
  );
}