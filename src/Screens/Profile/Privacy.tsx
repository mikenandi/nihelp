import React from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {ModalScreen} from "../../Layouts/ModalScreen";
import {ModalNavBack} from "../../Components/ModalNavBack";
import {useDispatch, useSelector} from "react-redux";
import {ButtonL} from "../../Components/Buttons";
import {RootState} from "../../Redux";
import {
	cleanSignupDataReducer,
	logOutReducer,
	passwordReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import {InputPassword} from "../../Components/Inputs";
import {deleteUser, updateProfile} from "../../Api/Services/Backend/Profile";
import {privacyProfileVisibleReducer} from "../../Redux/Features/Profile/ProfileModal";
import Loader from "../../Components/Loader";
import {errorMsg} from "../../Redux/Components/ErrorMsgSlice";
import {Body} from "../../Components/Typography";
import Color from "../../Components/Color";
import * as SecureStorage from "expo-secure-store";

const Privacy: React.FC = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {password, authToken} = useSelector((state: RootState) => {
		return state.auth;
	});

	const handleBack = (): void => {
		dispatch(passwordReducer(""));
		dispatch(privacyProfileVisibleReducer());
	};

	const handleEdit = async (): Promise<void> => {
		if (password.length < 6) {
			dispatch(errorMsg("password length should have greater than 6 chars"));
			return;
		}

		setIsLoading(true);

		let response = await updateProfile(
			{
				password,
			},
			authToken
		);

		setIsLoading(false);

		handleBack();
	};

	const handlePassword = (password: string): void => {
		dispatch(passwordReducer(password));
	};

	const handleDelete = async (): Promise<void> => {
		let response = await deleteUser(authToken);

		await SecureStorage.deleteItemAsync("authToken");

		dispatch(cleanSignupDataReducer());

		dispatch(logOutReducer());
	};

	if (isLoading) {
		return (
			<>
				<Loader />
			</>
		);
	}

	return (
		<>
			<ModalScreen>
				<ModalNavBack title="Edit profile" handleBack={handleBack} />

				<ScrollView contentContainerStyle={styles.contentContainer}>
					<InputPassword
						label="Change Password"
						value={password}
						onChangeText={handlePassword}
					/>

					<ButtonL action="UPDATE" onPress={handleEdit} />

					<TouchableOpacity
						activeOpacity={0.85}
						onPress={handleDelete}
						style={styles.deleteBtn}>
						<Body style={styles.deleteText}>Delete Account</Body>
					</TouchableOpacity>
				</ScrollView>
			</ModalScreen>
		</>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",
	},
	deleteBtn: {
		width: "80%",
		backgroundColor: Color.lightred,
		marginTop: 30,
		padding: 20,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	deleteText: {
		color: Color.error,
		fontWeight: "bold",
	},
});

export {Privacy};
