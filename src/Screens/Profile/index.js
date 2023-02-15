import React from "react";
import {StyleSheet, ScrollView} from "react-native";
import Screen from "../../Layouts/Screen";
import {useDispatch, useSelector} from "react-redux";
import {Body} from "../../Components/Typography";

function Profile(props) {
	const dispatch = useDispatch();

	return (
		<>
			<Screen>
				<Body>this is profile screen</Body>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		paddingBottom: 40,
	},
});

export default Profile;
