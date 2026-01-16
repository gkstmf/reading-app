// src/screens/MyPageScreen.tsx

import React from "react";
import { ScrollView, View } from "react-native";

import MainLayout from "../layouts/MainLayout";
import MyProfile from "../components/my/MyProfile";
import GroupList from "../components/group/GroupList";
import MyAccount from "../components/my/MyAccount"; 

export default function MyPageScreen() {
  console.log("Check MyAccount:", MyAccount);
  return (
    <MainLayout>
      <ScrollView
        style={{ flex: 1, paddingVertical: 28, paddingHorizontal: 26 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 10, marginBottom: 256 }}>
          <MyProfile />
          <GroupList />
        </View>

        <MyAccount />
      </ScrollView>
    </MainLayout>
  );
}
