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
					paddingVertical: 30,
					paddingLeft: 22,
				}}>
				<View 
					style={{
						alignSelf: "flex-start",
						marginBottom: 136,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							marginBottom: 39,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
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
									marginRight: 180,
								}}>
								{"도서 정보"}
							</Text>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									width: 151,
									height: 196,
									backgroundColor: "#D9D9D9",
									marginRight: 26,
								}}>
							</View>
							<View >
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 14,
										marginRight: 86,
									}}>
									{"제목"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
										marginBottom: 6,
										marginLeft: 1,
										marginRight: 103,
									}}>
									{"저자"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 13,
										marginBottom: 85,
										marginLeft: 2,
										marginRight: 91,
									}}>
									{"출판사"}
								</Text>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/ixo7y9nh_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 27,
											height: 24,
											marginRight: 13,
										}}
									/>
									<Text 
										style={{
											color: "#000000",
											fontSize: 13,
										}}>
										{"나도 읽고 싶어요"}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 15,
							marginRight: 268,
						}}>
						{"책 소개"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
					}}>
					<View 
						style={{
							alignSelf: "stretch",
							marginBottom: 77,
							marginHorizontal: 6,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 15,
								marginRight: 11,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
								}}>
								{"김한슬의 서평"}
							</Text>
							<View 
								style={{
									flex: 1,
								}}>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/coebh9av_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 21,
									marginRight: 4,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/pyfjp4uz_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 21,
									marginRight: 4,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/d36qqr9v_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 21,
									marginRight: 3,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/be9al5bb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 21,
									marginRight: 4,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/yz66rtdm_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 22,
									height: 21,
								}}
							/>
						</View>
						<View 
							style={{
								height: 152,
								backgroundColor: "#EDEDED",
							}}>
						</View>
					</View>
					<View >
						<Text 
							style={{
								color: "#000000",
								fontSize: 15,
								marginBottom: 19,
							}}>
							{"이 책을 위시리스트에 담은 그룹"}
						</Text>
						<View 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								marginLeft: 11,
							}}>
							<ImageBackground 
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/wf4bz4b0_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								style={{
									paddingVertical: 17,
									paddingHorizontal: 4,
									marginRight: 20,
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
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/fnuingyk_expires_30_days.png"}} 
								resizeMode = {'stretch'}
								style={{
									paddingVertical: 17,
									paddingHorizontal: 4,
									marginRight: 20,
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
								source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/q2ui8ti4_expires_30_days.png"}} 
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
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}