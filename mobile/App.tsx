import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import BooksearchScreen from './src/screens/BooksearchSceen';
import LoginScreen from './src/screens/LoginScreen';
import SignUPScreen from './src/screens/SignUpScreen';

//Library Screens
import MylibraryScreen from './src/screens/mylibrary/MylibraryScreen';
import LibraryDetailScreen from './src/screens/mylibrary/LibraryDetailScreen';

//Book Screens
import BookDetailScreen from './src/screens/book/BookDetailScreen';

//Group Screens
import GroupMainScreen from './src/screens/group/GroupMainScreen';
import CreateGroupScreen from './src/screens/group/CreateGroupScreen';
import GroupDetailScreen from './src/screens/group/GroupDetailScreen';
import GroupWishlistScreen from './src/screens/group/GroupWishlistScreen';
import MemberLibraryScreen from './src/screens/group/MemberLibraryScreen';
import OtherBookDetailScreen from './src/screens/group/OtherBookDetailScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 탭 화면 구성 (홈, 내 서재, 독서 모임, 마이)
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: 'none'} }}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="내 서재" component={MylibraryScreen} />
      <Tab.Screen name="독서 모임" component={GroupMainScreen} />
      <Tab.Screen name="마이" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* 로그인 화면 */}
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          
          {/* 메인 앱 화면 (로그인 성공 시 이동) */}
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
          
          {/* 기타 상세 화면들 (탭 바 위로 덮여야 하는 화면) */}
          <Stack.Screen name="BookDetail" component={BookDetailScreen} />
          <Stack.Screen name="OtherBookDetail" component={OtherBookDetailScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// export default function App() {
  
//   return (
//     <SafeAreaProvider>
//       <MylibraryScreen />

//       {/*라이브러리 상태별 화면전환 테스트 코드 - wish, reading, finished*/}
//       {/*<LibraryDetailScreen type="reading"/>*/}

//       {/* 책 디테일화면 조회용 테스트 코드 - search, reading, finished*/}
//       {/*<BookDetailScreen status="finished" />*/}

//       {/* memberName의 서재 */}
//       {/*<MemberLibraryScreen memberName="김한슬" />*/}
//     </SafeAreaProvider>
//   );

// }