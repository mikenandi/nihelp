import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../Components/Inputs";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editEmailVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { editEmailReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";

function EditEmail(props) {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(editEmailVisibleReducer());
        return;
    };

    const email = useSelector((state) => {
        return state.profileDetail.email;
    });

    const handleEdit = (email) => {
        dispatch(editEmailReducer(email));
    };

    return (
        <>
            <ModalNavDone handleBack={handleBack} />
            <View style={styles.container}>
                <InputText
                    label="email"
                    value={email}
                    onChangeText={handleEdit}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

export { EditEmail };
