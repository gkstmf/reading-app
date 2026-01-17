import React from "react";
import { ScrollView } from "react-native";

import MainLayout from "../layouts/MainLayout";
import AppHeader from "../components/common/AppHeader";
import Banner from "../components/home/Banner";
import MyLibraryPreview from "../components/home/MyLibraryPreview";
import GroupSection from "../components/group/GroupSection";

const HomeScreen = () => {
  return (
    <MainLayout>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader title="복작복작" />
        <Banner />
        <GroupSection />
        <MyLibraryPreview />
      </ScrollView>
    </MainLayout>
  );
};

export default HomeScreen;