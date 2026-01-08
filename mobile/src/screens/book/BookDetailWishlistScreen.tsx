import React from "react";
import { SafeAreaView, View, ScrollView, Text, } from "react-native";
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
					paddingTop: 25,
					paddingHorizontal: 22,
				}}>
				<View 
					style={{
						flexDirection: "row",
						marginBottom: 33,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 24,
							marginRight: 23,
						}}>
						{"←"}
					</Text>
					<Text 
						style={{
							color: "#000000",
							fontSize: 24,
						}}>
						{"도서 정보"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 48,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							marginBottom: 30,
						}}>
						<View 
							style={{
								width: 149,
								height: 183,
								backgroundColor: "#D9D9D9",
								marginRight: 28,
							}}>
						</View>
						<View >
							<Text 
								style={{
									color: "#000000",
									fontSize: 24,
									marginBottom: 7,
								}}>
								{"제목"}
							</Text>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"저자"}
							</Text>
						</View>
					</View>
					<View >
						<Text 
							style={{
								color: "#000000",
								fontSize: 15,
								marginBottom: 220,
							}}>
							{"책 내용"}
						</Text>
						<View >
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#D9D9D9",
									paddingVertical: 14,
									marginBottom: 18,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"독서 시작"}
								</Text>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#D9D9D9",
									paddingVertical: 14,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"독서 완료"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}