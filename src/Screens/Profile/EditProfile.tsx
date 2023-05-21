import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {ModalScreen} from "../../Layouts/ModalScreen";
import {ModalNavBack} from "../../Components/ModalNavBack";
import {useDispatch, useSelector} from "react-redux";
import {ButtonL} from "../../Components/Buttons";
import {RootState} from "../../Redux";
import {
	emailReducer,
	licenseNoReducer,
	nameReducer,
	passwordReducer,
	phoneNumberReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import {InputText} from "../../Components/Inputs";
import {updateProfile} from "../../Api/Services/Backend/Profile";
import {updateProfileVisibleReducer} from "../../Redux/Features/Profile/ProfileModal";
import Loader from "../../Components/Loader";

const EditProfile: React.FC = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {name, email, phoneNumber, isOwner, licenseNo, authToken} = useSelector(
		(state: RootState) => {
			return state.auth;
		}
	);

	const handleBack = (): void => {
		dispatch(updateProfileVisibleReducer());
	};

	const handleEdit = async (): Promise<void> => {
		setIsLoading(true);
		let response = await updateProfile(
			{
				name,
				email,
				phoneNumber,
				licenseNo,
			},
			authToken
		);

		setIsLoading(false);

		handleBack();
	};

	const handlePassword = (password: string): void => {
		dispatch(passwordReducer(password));
	};

	const handleName = (name: string): void => {
		dispatch(nameReducer(name));
	};

	const handleEmail = (email: string): void => {
		dispatch(emailReducer(email));
	};

	const handleLicenseNo = (licenseNo: string): void => {
		dispatch(licenseNoReducer(licenseNo));
	};

	const handlePhoneNumber = (phoneNumber: string): void => {
		dispatch(phoneNumberReducer(phoneNumber));
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
					<InputText label="name" value={name} onChangeText={handleName} />

					{!isOwner && (
						<InputText
							label="license"
							value={licenseNo}
							onChangeText={handleLicenseNo}
						/>
					)}

					<InputText
						label="phone"
						value={phoneNumber}
						onChangeText={handlePhoneNumber}
					/>

					<InputText label="email" value={email} onChangeText={handleEmail} />

					<ButtonL action="UPDATE" onPress={handleEdit} />
				</ScrollView>
			</ModalScreen>
		</>
	);
};

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",
	},
});

export {EditProfile};
