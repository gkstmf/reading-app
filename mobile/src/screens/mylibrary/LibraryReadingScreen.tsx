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
						paddingBottom: 1,
						marginBottom: 339,
					}}>
					<View 
						style={{
							marginBottom: 18,
						}}>
						<View 
							style={{
								flexDirection: "row",
								marginBottom: 15,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 22,
									marginRight: 14,
								}}>
								{"독서 중"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/hnoaf56r_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 16,
									height: 16,
								}}
							/>
						</View>
						<View 
							style={{
								width: 313,
								height: 1,
								backgroundColor: "#000000",
								marginBottom: 14,
							}}>
						</View>
						<View 
							style={{
								alignItems: "flex-end",
								backgroundColor: "#F2F2F2",
								paddingVertical: 13,
								paddingRight: 19,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/omg9uizn_expires_30_days.png"}} 
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
							alignItems: "flex-end",
							marginBottom: 18,
						}}>
						<View 
							style={{
								backgroundColor: "#EEEEEE",
								paddingVertical: 3,
								paddingHorizontal: 5,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
								}}>
								{"편집"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							marginLeft: 45,
						}}>
						<View 
							style={{
								flexDirection: "row",
								marginBottom: 42,
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 45,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 39,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 45,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									marginRight: 39,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
								}}>
								<View 
									style={{
										height: 95,
										backgroundColor: "#D9D9D9",
										marginBottom: 15,
									}}>
								</View>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"책 제목어쩌고"}
								</Text>
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