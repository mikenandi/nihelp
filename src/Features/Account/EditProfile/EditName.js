import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../../Components/Inputs";
import { ModalNavDone } from "../../../Components/ModalNav";
import { editNameVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { editNameReducer } from "../../../Redux/Features/Account/ProfileDetailSlice";
import { updateProfileName } from "../../../Api/Services/RentalFeed/UserProfile";
import Loader, { Loading } from "../../../Components/Loader";

function EditName(props) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleBack = () => {
        dispatch(editNameVisibleReducer());
        return;
    };

    const { userId, authToken } = useSelector((state) => {
        return state.auth;
    });

    const name = useSelector((state) => {
        return state.profileDetail.name;
    });

    const handleEdit = (name) => {
        dispatch(editNameReducer(name));
        return;
    };

    const handleSave = async () => {
        try {
            setIsLoading(true);

            let nameArray = name.split(" ", 2);
            const data = {
                userId,
                authToken,
                firstname: nameArray[0],
                lastname: nameArray[1],
            };

            let response = await updateProfileName(data);

            if (response.success) {
                setIsLoading(false);

                dispatch(editNameVisibleReducer());

                return;
            }

            return;
        } catch (error) {
            console.log(error.response);
            return;
        }
    };

    return (
        <>
            <ModalNavDone
                title=""
                handleBack={handleBack}
                handleSave={handleSave}
            />
            <View style={styles.container}>
                <View>
                    <InputText
                        label="fullname"
                        placeholder="Firstname Lastname"
                        value={name}
                        onChangeText={handleEdit}
                    />
                </View>
            </View>

            <Modal visible={isLoading} transparent={false} animationType="fade">
                <Loader />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

export { EditName };
