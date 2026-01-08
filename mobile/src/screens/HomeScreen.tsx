import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";

const HomeScreen = (props: any) => {
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
				}}>
				<View 
					style={{
						marginBottom: 46,
					}}>
					<View 
						style={{
							marginBottom: 32,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 24,
								marginBottom: 26,
							}}>
							{"복작복작"}
						</Text>
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#D9D9D9",
								paddingVertical: 22,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"공지나 광고 배너"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							paddingRight: 39,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
								marginBottom: 27,
								marginLeft: 39,
							}}>
							{"참여중인 그룹"}
						</Text>
						<View 
							style={{
								marginLeft: 39,
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
										marginLeft: 96,
									}}>
									{"모임 명"}
								</Text>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										marginLeft: 18,
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
									marginBottom: 12,
								}}>
							</View>
							<View 
								style={{
									height: 64,
									backgroundColor: "#D9D9D9",
									borderRadius: 10,
								}}>
							</View>
						</View>
					</View>
				</View>
				<View >
					<View 
						style={{
							alignItems: "center",
							marginBottom: 249,
							marginHorizontal: 27,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginBottom: 7,
							}}>
							{"내 서재"}
						</Text>
						<View 
							style={{
								alignItems: "flex-end",
								backgroundColor: "#F2F2F2",
								paddingVertical: 10,
								paddingRight: 15,
								marginHorizontal: 22,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/q8rtaenk_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 12,
									height: 13,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							marginHorizontal: 26,
						}}>
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
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen;