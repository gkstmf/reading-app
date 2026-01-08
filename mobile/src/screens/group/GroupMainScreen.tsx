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
					paddingVertical: 28,
					paddingRight: 19,
				}}>
				<Text 
					style={{
						color: "#000000",
						fontSize: 24,
						marginBottom: 89,
					}}>
					{"복작복작"}
				</Text>
				<View >
					<View 
						style={{
							paddingRight: 10,
							marginBottom: 56,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginBottom: 27,
								marginLeft: 10,
							}}>
							{"참여중인 모임"}
						</Text>
						<View 
							style={{
								paddingBottom: 7,
								paddingLeft: 39,
								marginLeft: 10,
							}}>
							<View 
								style={{
									backgroundColor: "#D9D9D9",
									borderRadius: 10,
									paddingVertical: 14,
									marginBottom: 12,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
										marginBottom: 14,
										marginLeft: 18,
									}}>
									{"모임명"}
								</Text>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										marginLeft: 20,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
											marginRight: 17,
										}}>
										{"5인"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
										}}>
										{"김한슬 똥 김지민 권내원 김다연"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									height: 73,
									backgroundColor: "#D9D9D9",
									borderRadius: 10,
									marginBottom: 21,
								}}>
							</View>
							<View 
								style={{
									height: 73,
									backgroundColor: "#D9D9D9",
									borderRadius: 10,
								}}>
							</View>
						</View>
					</View>
					<View 
						style={{
							paddingHorizontal: 16,
						}}>
						<View 
							style={{
								marginBottom: 131,
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#D9D9D9",
									paddingVertical: 23,
									marginBottom: 19,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
										marginBottom: 19,
									}}>
									{"모임 참여하기"}
								</Text>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										paddingHorizontal: 3,
										marginHorizontal: 15,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 15,
											marginRight: 17,
										}}>
										{"그룹 코드 입력"}
									</Text>
									<View 
										style={{
											height: 22,
											flex: 1,
											backgroundColor: "#FFFFFF",
										}}>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									backgroundColor: "#D9D9D9",
									paddingVertical: 14,
									paddingHorizontal: 12,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
									}}>
									{"모임 생성하기"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
									}}>
									{"+"}
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
									marginHorizontal: 2,
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
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}