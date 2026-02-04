import React from 'react';


import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import BooksearchScreen from './src/screens/BooksearchSceen';
import LoginScreen from './src/screens/LoginScreen';
import SignUPScreen from './src/screens/SignUpScreen';
import MylibraryScreen from './src/screens/mylibrary/MylibraryScreen';
import LibraryDetailScreen from './src/screens/mylibrary/LibraryDetailScreen';
import BookDetailScreen from './src/screens/book/BookDetailScreen';
import GroupWishlistScreen from './src/screens/group/GroupWishlistScreen';
import MemberLibraryScreen from './src/screens/group/MemberLibraryScreen';
import OtherBookDetailScreen from './src/screens/group/OtherBookDetailScreen';

export default function App() {
  
  return (
    <SafeAreaProvider>
      <MylibraryScreen />

      {/*라이브러리 상태별 화면전환 테스트 코드 - wish, reading, finished*/}
      {/*<LibraryDetailScreen type="reading"/>*/}

      {/* 책 디테일화면 조회용 테스트 코드 - search, reading, finished*/}
      {/*<BookDetailScreen status="finished" />*/}

      {/* memberName의 서재 */}
      {/*<MemberLibraryScreen memberName="김한슬" />*/}
    </SafeAreaProvider>
  );

}