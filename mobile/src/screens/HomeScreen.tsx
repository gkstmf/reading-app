import React from "react";
import { ScrollView, View } from "react-native";

import MainLayout from "../layouts/MainLayout";
import AppHeader from "../components/common/AppHeader";
import Banner from "../components/home/Banner";
import MyLibraryPreview from "../components/home/MyLibraryPreview";
import GroupSection from "../components/group/GroupSection";

const HomeScreen = () => {
  return (
    <MainLayout>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 28, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader title="우리독서" />
        <View style={{ marginTop: 10, marginBottom: 20 }}>
          <Banner />
        </View>
          <GroupSection />
        <MyLibraryPreview />
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;