import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, } from "react-native";
export default (props:any) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					paddingTop: 156,
				}}>
				<Text 
					style={{
						color: "#000000",
						fontSize: 36,
						marginBottom: 58,
					}}>
					{"회원가입"}
				</Text>
				<View 
					style={{
						marginBottom: 33,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 13,
							marginRight: 186,
						}}>
						{"이메일 주소"}
					</Text>
					<View 
						style={{
							alignSelf: "flex-start",
							paddingVertical: 11,
							paddingRight: 119,
							marginBottom: 42,
						}}>
						<Text 
							style={{
								color: "#B8B8B8",
								fontSize: 11,
							}}>
							{"이메일 주소를 입력해주세요."}
						</Text>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 13,
							marginRight: 201,
						}}>
						{"비밀번호"}
					</Text>
					<View 
						style={{
							alignSelf: "flex-start",
							paddingVertical: 11,
							paddingRight: 132,
							marginBottom: 42,
						}}>
						<Text 
							style={{
								color: "#B8B8B8",
								fontSize: 11,
							}}>
							{"비밀번호를 입력해주세요."}
						</Text>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 13,
							marginRight: 174,
						}}>
						{"비밀번호 확인"}
					</Text>
					<View 
						style={{
							alignSelf: "flex-start",
							paddingVertical: 11,
							paddingRight: 87,
						}}>
						<Text 
							style={{
								color: "#B8B8B8",
								fontSize: 11,
							}}>
							{"비밀번호를 다시 한번 입력해주세요."}
						</Text>
					</View>
				</View>
				<TouchableOpacity 
					style={{
						backgroundColor: "#486240",
						borderRadius: 4,
						paddingVertical: 11,
						paddingHorizontal: 89,
						marginBottom: 48,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FEF7EF",
							fontSize: 18,
						}}>
						{"가입하기"}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}