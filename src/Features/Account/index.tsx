import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { HeadingS, Body, BodyS } from "../../Components/Typography";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch, useSelector } from "react-redux";
import { accounntVisibleReducer } from "../../Redux/Features/Account/AccountModalSlice";
import { Ionicons } from "@expo/vector-icons";
import { EditImg } from "./EditProfile/EditImg";
import { Profile } from "./Profile";
import { userProfile } from "../../Api/Services/RentalFeed/UserProfile";
import { saveProfileDataReducer } from "../../Redux/Features/Account/ProfileDetailSlice";

function Account(props) {
    const dispatch = useDispatch();

    const { userId, authToken } = useSelector((state) => {
        return state.auth;
    });

    let data = { userId, authToken };

    const accountModal = useSelector((state) => {
        return state.accountModal;
    });

    const editProfileModal = useSelector((state) => {
        return state.editProfileModal;
    });

    React.useEffect(() => {
        (async () => {
            let response = await userProfile(data);
            let profileData = response.data;

            dispatch(saveProfileDataReducer({ ...profileData }));

            return;
        })();
    }, [accountModal, editProfileModal]);

    const handleBack = () => {
        dispatch(accounntVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite handleBack={handleBack} title="Account" />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.avatarContainer}>
                        <EditImg />
                    </View>
                    <View>
                        <Profile />
                    </View>
                </ScrollView>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: "center",
    },
    scrollContainer: {
        paddingBottom: 40,
    },
});

export { Account };
