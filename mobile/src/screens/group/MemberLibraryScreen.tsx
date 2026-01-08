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
					paddingHorizontal: 14,
				}}>
				<View 
					style={{
						marginBottom: 48,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							paddingBottom: 1,
							marginBottom: 28,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 24,
							}}>
							{"김한슬의 서재"}
						</Text>
					</View>
					<View 
						style={{
							alignItems: "flex-end",
							backgroundColor: "#F2F2F2",
							paddingVertical: 13,
							paddingRight: 19,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/zmqbm869_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 16,
							}}
						/>
					</View>
				</View>
				<View 
					style={{
						paddingHorizontal: 13,
					}}>
					<View 
						style={{
							paddingHorizontal: 12,
							marginBottom: 147,
						}}>
						<View 
							style={{
								marginBottom: 47,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 7,
									marginHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"독서 위시리스트"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/j0zsgmgl_expires_30_days.png"}} 
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
									marginHorizontal: 7,
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/hm15kkan_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 48,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 6,
									marginHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"독서 중"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/jfjbuiw7_expires_30_days.png"}} 
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
									marginHorizontal: 7,
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/kdue6yju_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
							</View>
						</View>
						<View >
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginBottom: 7,
									marginHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 16,
									}}>
									{"독서 완료"}
								</Text>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/33u8jzz8_expires_30_days.png"}} 
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
									marginHorizontal: 7,
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/djstbty8_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
									}}
								/>
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