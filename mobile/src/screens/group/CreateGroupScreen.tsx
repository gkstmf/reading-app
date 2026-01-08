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
					paddingVertical: 30,
					paddingRight: 27,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 10,
						paddingHorizontal: 9,
						marginBottom: 142,
					}}>
					<View 
						style={{
							flex: 1,
							alignItems: "center",
							paddingBottom: 182,
							marginRight: 11,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 24,
							}}>
							{"모임 만들기"}
						</Text>
						<View 
							style={{
								alignItems: "center",
								marginBottom: 182,
								marginHorizontal: 16,
							}}>
							<View >
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
										marginBottom: 24,
										marginRight: 22,
									}}>
									{"모임명 "}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
										marginBottom: 24,
									}}>
									{"모임 인원"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"모임설명"}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
						}}>
						<View 
							style={{
								marginBottom: 13,
							}}>
							<View 
								style={{
									height: 28,
									backgroundColor: "#D9D9D9",
									marginBottom: 10,
								}}>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#D9D9D9",
										paddingVertical: 6,
										paddingHorizontal: 8,
										marginRight: 8,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginRight: 10,
										}}>
										{"5"}
									</Text>
									<View 
										style={{
											width: 9,
											height: 18,
										}}>
									</View>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"명"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#D9D9D9",
								paddingTop: 15,
								paddingLeft: 11,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 14,
									marginBottom: 132,
									width: 117,
								}}>
								{"모임 소개와 규칙등 \n자유롭게 작성하세용"}
							</Text>
						</View>
					</View>
				</View>
				<View >
					<View 
						style={{
							alignItems: "center",
							backgroundColor: "#D9D9D9",
							paddingVertical: 11,
							marginBottom: 86,
							marginHorizontal: 37,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
							}}>
							{"모임 생성하기"}
						</Text>
					</View>
					<View 
						style={{
							marginHorizontal: 13,
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