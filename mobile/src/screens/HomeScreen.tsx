import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import MainLayout from "../layouts/MainLayout";
import Banner from "../components/home/Banner";
import MyLibraryPreview from "../components/home/MyLibraryPreview";
import GroupSection from "../components/group/GroupSection";

const HomeScreen = () => {
  return (
    <MainLayout>
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingTop: 28, paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: -30, marginBottom: 20 }}>
          <Banner />
        </View>
        <GroupSection />
        <MyLibraryPreview />
      </KeyboardAwareScrollView>
    </MainLayout>
  );
};

export default HomeScreen;