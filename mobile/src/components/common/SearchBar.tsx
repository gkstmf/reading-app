// import React, { useState } from "react";
// import { StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function SearchBar({ placeholder }: any) {
//   const navigation = useNavigation<any>();

//   return (
//     <TouchableOpacity 
//       activeOpacity={1} 
//       onPress={() => navigation.navigate('BooksearchScreen')} 
//       style={styles.container}
//     >
//       <Icon name="search" size={24} color="#000000" style={styles.icon} />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#F5F5F5",
//     borderRadius: 1,
//     paddingHorizontal: 15,
//     height: 45,
//     width: "100%",
//   },
//   icon: {
//     alignItems: "flex-end",
//     marginLeft: '93%',
//   },
//   input: {
//     flex: 1,
//     fontSize: 20,
//     color: "#000",
//     paddingVertical: 0,
//   },
// });