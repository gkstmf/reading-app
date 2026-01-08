import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, } from "react-native";
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
					paddingRight: 45,
				}}>
				<View 
					style={{
						alignSelf: "flex-start",
						flexDirection: "row",
						marginBottom: 47,
						marginLeft: 22,
					}}>
					<View 
						style={{
							marginRight: 26,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								paddingHorizontal: 10,
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
								width: 154,
								height: 196,
								backgroundColor: "#D9D9D9",
							}}>
						</View>
					</View>
					<View 
						style={{
							marginTop: 66,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								paddingRight: 100,
								marginBottom: 20,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 24,
									marginBottom: 14,
								}}>
								{"제목"}
							</Text>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginBottom: 14,
								}}>
								{"저자"}
							</Text>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
								}}>
								{"출판사"}
							</Text>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 1,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/cldb5df6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 27,
										height: 24,
										marginRight: 14,
									}}
								/>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
									}}>
									{"위시리스트에 담기"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 2,
									marginBottom: 2,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/n5khzjh6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 25,
										height: 20,
										marginRight: 15,
									}}
								/>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
										marginRight: 15,
									}}>
									{"\n읽고 있어요"}
								</Text>
								<View 
									style={{
										width: 25,
										height: 20,
									}}>
								</View>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 3,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/0lpkzjvm_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 28,
										height: 23,
										marginRight: 14,
									}}
								/>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
										marginRight: 27,
									}}>
									{"\n이미 읽었어요"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginBottom: 47,
						marginLeft: 22,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 15,
							marginBottom: 12,
						}}>
						{"책 내용"}
					</Text>
					<View 
						style={{
							height: 94,
							backgroundColor: "#EDEDED",
						}}>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						marginBottom: 48,
						marginLeft: 22,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 15,
							marginBottom: 19,
						}}>
						{"이 책을 담은 그룹"}
					</Text>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							marginLeft: 11,
						}}>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/gxxncsng_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingVertical: 17,
								paddingHorizontal: 4,
								marginRight: 21,
							}}
							>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"그룹명"}
							</Text>
						</ImageBackground>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/4ihiyrsd_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingVertical: 17,
								paddingHorizontal: 4,
								marginRight: 21,
							}}
							>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"그룹명"}
							</Text>
						</ImageBackground>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/43a66w17_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								paddingVertical: 17,
								paddingHorizontal: 4,
							}}
							>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"그룹명"}
							</Text>
						</ImageBackground>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}