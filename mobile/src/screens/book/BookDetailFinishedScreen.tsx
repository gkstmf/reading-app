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
					paddingTop: 25,
					paddingLeft: 22,
					paddingRight: 35,
				}}>
				<View 
					style={{
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
						}}>
						{"도서 정보"}
					</Text>
				</View>
				<View 
					style={{
						marginBottom: 48,
					}}>
					<View 
						style={{
							flexDirection: "row",
							marginBottom: 30,
						}}>
						<View 
							style={{
								height: 183,
								flex: 1,
								backgroundColor: "#D9D9D9",
								marginRight: 28,
							}}>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									marginBottom: 24,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										marginBottom: 7,
									}}>
									{"제목"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 15,
									}}>
									{"저자"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uudb80hvHm/br10bpn0_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 159,
									height: 27,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 15,
								marginBottom: 71,
							}}>
							{"책 내용"}
						</Text>
						<View 
							style={{
								marginHorizontal: 6,
							}}>
							<Text 
								style={{
									color: "#000000",
									fontSize: 15,
									marginBottom: 10,
								}}>
								{"내 서평"}
							</Text>
							<View 
								style={{
									height: 235,
									backgroundColor: "#F2F2F2",
								}}>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}