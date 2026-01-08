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
					paddingVertical: 27,
					paddingRight: 26,
				}}>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 44,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 24,
							marginBottom: 26,
						}}>
						{"참여중인 독서모임"}
					</Text>
					<View >
						<View 
							style={{
								alignItems: "flex-end",
								paddingBottom: 33,
								marginBottom: 6,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderColor: "#5D5D5D",
									borderRadius: 10,
									borderWidth: 1,
									paddingVertical: 18,
									paddingLeft: 22,
									paddingRight: 38,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
										marginBottom: 20,
									}}>
									{"모임명"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
										marginBottom: 27,
										width: 191,
									}}>
									{"교환독서 조지기\n\n규칙 : 어쩌고 저쩌고\n           못 읽으면 빙수사기 화이팅~"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										marginBottom: 27,
									}}>
									{"멤버\n김한슬 똥 김지민 권내원 김다연"}
								</Text>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginRight: 26,
										}}>
										{"초대코드"}
									</Text>
									<View 
										style={{
											width: 164,
											height: 22,
											backgroundColor: "#D9D9D9",
										}}>
									</View>
								</View>
							</View>
						</View>
						<View 
							style={{
								paddingRight: 31,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingBottom: 1,
									marginBottom: 11,
									marginLeft: 31,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"그룹명의 서재"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 7,
									marginLeft: 31,
								}}>
								<View 
									style={{
										paddingBottom: 1,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
										}}>
										{"그룹 위시리스트"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/738nvoam_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
							</View>
							<View 
								style={{
									marginBottom: 13,
									marginLeft: 31,
								}}>
								<View 
									style={{
										height: 1,
										backgroundColor: "#000000",
									}}>
								</View>
								<View 
									style={{
										height: 1,
										backgroundColor: "#000000",
									}}>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginLeft: 31,
								}}>
								<View 
									style={{
										height: 95,
										flex: 1,
										backgroundColor: "#D9D9D9",
										marginRight: 21,
									}}>
								</View>
								<View 
									style={{
										height: 95,
										flex: 1,
										backgroundColor: "#D9D9D9",
										marginRight: 22,
									}}>
								</View>
								<View 
									style={{
										height: 95,
										flex: 1,
										backgroundColor: "#D9D9D9",
										marginRight: 21,
									}}>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/0i5nbs72_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 16,
									}}
								/>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						paddingHorizontal: 13,
					}}>
					<View 
						style={{
							flexDirection: "row",
							paddingHorizontal: 26,
							marginBottom: 37,
						}}>
						<View 
							style={{
								flex: 1,
								marginRight: 31,
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#F6F6F6",
									paddingVertical: 15,
									marginBottom: 14,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										alignItems: "center",
										marginBottom: 13,
										marginHorizontal: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginBottom: 8,
										}}>
										{"김한슬의 서재"}
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
										width: 75,
										height: 95,
										backgroundColor: "#D9D9D9",
									}}>
								</View>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#F6F6F6",
									paddingVertical: 15,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										alignItems: "center",
										marginBottom: 13,
										marginHorizontal: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginBottom: 8,
										}}>
										{"김한슬의 서재"}
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
										width: 75,
										height: 95,
										backgroundColor: "#D9D9D9",
									}}>
								</View>
							</View>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#F6F6F6",
									paddingVertical: 15,
									marginBottom: 14,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										alignItems: "center",
										marginBottom: 13,
										marginHorizontal: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginBottom: 8,
										}}>
										{"김한슬의 서재"}
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
										width: 75,
										height: 95,
										backgroundColor: "#D9D9D9",
									}}>
								</View>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#F6F6F6",
									paddingVertical: 15,
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										alignItems: "center",
										marginBottom: 13,
										marginHorizontal: 12,
									}}>
									<Text 
										style={{
											color: "#000000",
											fontSize: 16,
											marginBottom: 8,
										}}>
										{"김한슬의 서재"}
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
										width: 75,
										height: 95,
										backgroundColor: "#D9D9D9",
									}}>
								</View>
							</View>
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