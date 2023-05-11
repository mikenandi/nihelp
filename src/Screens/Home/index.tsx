import React from "react";
import {StyleSheet, Modal, FlatList, View, Image} from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../Components/Typography";
import MapView, {Marker, Polyline} from "react-native-maps";
import {Notification} from "../../Components/Notification";
import {FAB} from "../../Components/FAB";

function Home(props: any) {
	const dispatch = useDispatch();

	return (
		<>
			<Screen>
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
						title='T 123 ABZ needs car jack'
					/>
					<Marker
						coordinate={{latitude: -8.9, longitude: 33.45}}
						title='Mbeya'
					/>

					{/* <Polyline
						coordinates={[
							{latitude: -6.823, longitude: 39.26},
							{latitude: -6.823, longitude: 39.26},
							{latitude: -8.9, longitude: 33.45},
						]}
						strokeWidth={3}
						strokeColor={Color.warning}
					/> */}
				</MapView>
				<FAB style={styles.notifyContainer}>
					<Notification />
				</FAB>
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
	notifyContainer: {
		backgroundColor: Color.white,
		top: 20,
		borderRadius: 100,
	},
});

export default Home;
