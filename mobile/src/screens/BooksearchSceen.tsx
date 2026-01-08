import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
					paddingVertical: 33,
					paddingHorizontal: 14,
				}}>
				<View 
					style={{
						marginBottom: 576,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 24,
							marginBottom: 28,
						}}>
						{"복작복작"}
					</Text>
					<View 
						style={{
							paddingBottom: 18,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#F2F2F2",
								paddingVertical: 13,
								paddingHorizontal: 27,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"종의 기원"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/apdqbphv_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 16,
									height: 16,
								}}
							/>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginBottom: 18,
								marginLeft: 27,
								width: 79,
							}}>
							{"종의 기원 상\n\n종의 기원 하\n"}
						</Text>
					</View>
				</View>
				<View >
					<View 
						style={{
							height: 1,
							backgroundColor: "#000000",
							marginBottom: 22,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							marginLeft: 26,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
							}}>
							{"홈   "}
						</Text>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
							}}>
							{"내 서재"}
						</Text>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<Text 
							style={{
								color: "#486240",
								fontSize: 16,
								marginRight: 48,
							}}>
							{"독서 모임"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
							}}>
							{"마이"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}