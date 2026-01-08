import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
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
					paddingTop: 134,
				}}>
				<View 
					style={{
						marginBottom: 21,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							paddingBottom: 2,
							marginBottom: 39,
							marginLeft: 83,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/cvdykkw8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 80,
								height: 80,
								marginBottom: 6,
							}}
						/>
						<Text 
							style={{
								color: "#000000",
								fontSize: 20,
							}}>
							{"복작복작"}
						</Text>
					</View>
					<View 
						style={{
							alignSelf: "flex-start",
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								marginBottom: 33,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginRight: 186,
								}}>
								{"이메일 주소"}
							</Text>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingVertical: 11,
									paddingRight: 119,
									marginBottom: 42,
								}}>
								<Text 
									style={{
										color: "#B8B8B8",
										fontSize: 11,
									}}>
									{"이메일 주소를 입력해주세요."}
								</Text>
							</View>
							<Text 
								style={{
									color: "#000000",
									fontSize: 13,
									marginRight: 201,
								}}>
								{"비밀번호"}
							</Text>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingVertical: 11,
									paddingRight: 132,
								}}>
								<Text 
									style={{
										color: "#B8B8B8",
										fontSize: 11,
									}}>
									{"비밀번호를 입력해주세요."}
								</Text>
							</View>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
							}}>
							<TouchableOpacity 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#486240",
									borderRadius: 4,
									paddingVertical: 11,
									paddingHorizontal: 100,
									marginBottom: 14,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FEF7EF",
										fontSize: 18,
									}}>
									{"로그인"}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#EFEBE7",
									borderRadius: 4,
									paddingVertical: 11,
									paddingHorizontal: 89,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#486240",
										fontSize: 18,
									}}>
									{"회원가입"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "stretch",
						alignItems: "center",
						marginBottom: 48,
						marginHorizontal: 47,
					}}>
					<View 
						style={{
							height: 1,
							alignSelf: "stretch",
							backgroundColor: "#C6C6C6",
							marginBottom: 13,
						}}>
					</View>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#F5F5F5",
							borderRadius: 4,
							paddingVertical: 11,
							paddingHorizontal: 24,
						}} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/85cyqivi_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 16,
								marginRight: 8,
							}}
						/>
						<Text 
							style={{
								color: "#486240",
								fontSize: 18,
							}}>
							{"google 계정으로 로그인"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}