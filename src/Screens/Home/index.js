import React from "react";
import {StyleSheet, Modal, FlatList, View, Image} from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../Components/Typography";
import MapView, {Marker, Polyline} from "react-native-maps";

function Home(props) {
	const dispatch = useDispatch();

	return (
		<>
			<Screen>
				{/* <Body>This is home screen here</Body> */}
				<MapView
					style={{flex: 1}}
					initialRegion={{
						latitude: -6.823,
						longitude: 39.26,
						latitudeDelta: 2,
						longitudeDelta: 2,
					}}>
					<Marker
						coordinate={{latitude: -6.823, longitude: 39.26}}
						title='Dar es Salaam'
					/>
					<Marker
						coordinate={{latitude: -8.9, longitude: 33.45}}
						title='Mbeya'
					/>

					<Polyline
						coordinates={[
							{latitude: -6.823, longitude: 39.26},
							{latitude: -6.823, longitude: 39.26},
							{latitude: -8.9, longitude: 33.45},
						]}
						strokeWidth={3}
						strokeColor={Color.warning}
					/>
				</MapView>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
	},
	scrollContainer: {
		paddingBottom: 70,
	},
	fab: {
		backgroundColor: Color.lightblue,
	},
	startPostingContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	emptyImg: {
		width: 240,
		height: undefined,
		aspectRatio: 10 / 10,
	},
});

export default Home;
