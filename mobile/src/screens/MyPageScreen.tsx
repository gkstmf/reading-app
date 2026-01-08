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
					paddingVertical: 28,
					paddingHorizontal: 26,
				}}>
				<View 
					style={{
						paddingHorizontal: 10,
						marginBottom: 256,
					}}>
					<View 
						style={{
							paddingRight: 21,
							marginBottom: 43,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 24,
								marginBottom: 27,
								marginLeft: 18,
							}}>
							{"복작복작"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginLeft: 21,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/4ssedphh_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 105,
									height: 105,
								}}
							/>
							<View 
								style={{
									flex: 1,
								}}>
							</View>
							<Text 
								style={{
									color: "#000000",
									fontSize: 24,
									marginRight: 14,
								}}>
								{"(닉네임) "}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/q7bw3xc1_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
								}}
							/>
						</View>
					</View>
					<View >
						<View 
							style={{
								marginBottom: 11,
								marginHorizontal: 7,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 20,
									marginBottom: 6,
									marginLeft: 3,
								}}>
								{"그룹 관리"}
							</Text>
							<View 
								style={{
									height: 1,
									backgroundColor: "#000000",
								}}>
							</View>
						</View>
						<View 
							style={{
								marginHorizontal: 10,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 18,
								}}>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#ECECEC",
										borderRadius: 10,
										paddingVertical: 8,
										marginRight: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
											marginBottom: 7,
											marginLeft: 11,
										}}>
										{"그룹 명"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 10,
											marginLeft: 16,
										}}>
										{"김한슬, 똥, 기김ㄷ다연"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 10,
									}}>
									{"나가기"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 18,
								}}>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#ECECEC",
										borderRadius: 10,
										paddingVertical: 8,
										marginRight: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
											marginBottom: 7,
											marginLeft: 11,
										}}>
										{"그룹 명"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 10,
											marginLeft: 16,
										}}>
										{"김한슬, 똥, 기김ㄷ다연"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 10,
									}}>
									{"나가기"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View 
									style={{
										flex: 1,
										backgroundColor: "#ECECEC",
										borderRadius: 10,
										paddingVertical: 8,
										marginRight: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 14,
											marginBottom: 7,
											marginLeft: 11,
										}}>
										{"그룹 명"}
									</Text>
									<Text 
										style={{
											color: "#000000",
											fontSize: 10,
											marginLeft: 16,
										}}>
										{"김한슬, 똥, 기김ㄷ다연"}
									</Text>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 10,
									}}>
									{"나가기"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
					}}>
					<View 
						style={{
							marginBottom: 47,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								backgroundColor: "#D9D9D9",
								paddingVertical: 8,
								paddingHorizontal: 53,
								marginBottom: 21,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 16,
								}}>
								{"로그아웃"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#6C6C6C",
								fontSize: 10,
								marginLeft: 60,
							}}>
							{"계정 탈퇴"}
						</Text>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
							marginHorizontal: 3,
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