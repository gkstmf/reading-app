// src/screens/MyPageScreen.tsx

import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import MainLayout from "../layouts/MainLayout";
import MyProfile from "../components/my/MyProfile";
import GroupList from "../components/group/GroupList";
import MyAccount from "../components/my/MyAccount"; 
import client from "../api/client";

export default function MyPageScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await client.get("/user/me"); 
        setUser(response.data.user);
      } catch (error) {
        console.error("사용자 정보 로드 실패:", error);
      }
    };

    fetchUserData();
  }, []);

  
  return (
    <MainLayout>
      <KeyboardAwareScrollView
        style={{ flex: 1, paddingVertical: 28, paddingHorizontal: 26 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: 10, marginBottom: 256 }}>
          <MyProfile user={user} /> 
          <GroupList groups={user?.groups} />
        </View>

        <MyAccount />
      </KeyboardAwareScrollView>
    </MainLayout>
  );
}
