import React from "react";
import { StyleSheet, View, Image, Modal } from "react-native";
import Color from "../../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import {
    avatarVisibleReducer,
    cropVisibleReducer,
} from "../../../Redux/Features/Account/AccountModalSlice";
import {
    clearPhotos,
    clearSelectedImages,
} from "../../../Redux/Features/ImageLibrary/ImageSlice";
import { ModalNavDone } from "../../../Components/ModalNav";
import { firebase } from "../../../Helpers/FirebaseConfig";
import randomstring from "randomstring";
import { updateProfileImg } from "../../../Api/Services/RentalFeed/UserProfile";
import Loader from "../../../Components/Loader";

function CropImg(props) {
    const dispatch = useDispatch();

    const [isLoading, setisLoading] = React.useState(false);

    const image = useSelector((state) => {
        return state.imageLibrary.selectedImages;
    });

    const handleBack = () => {
        dispatch(clearSelectedImages());

        dispatch(cropVisibleReducer());

        return;
    };

    const { userId, authToken } = useSelector((state) => {
        return state.auth;
    });

    React.useEffect(() => {
        return () => {
            setisLoading(false);
        };
    }, []);

    const handleSave = async () => {
        try {
            setisLoading(true);

            let response = await fetch(image[0].uri);

            let blob = await response.blob();

            let filename = `avatar_${randomstring
                .generate(32)
                .toLocaleLowerCase()}`;

            await firebase.storage().ref().child(filename).put(blob);

            let url = await firebase.storage().ref(filename).getDownloadURL();

            let propertyImgData = {
                authToken,
                userId,
                imageUrl: url,
            };

            let res = await updateProfileImg(propertyImgData);

            if (res.success) {
                setisLoading(false);

                dispatch(cropVisibleReducer());
                dispatch(avatarVisibleReducer());
                dispatch(clearPhotos());

                return;
            }

            setisLoading(false);

            return;
        } catch (error) {
            setisLoading(false);
            console.log(error);

            return;
        }
    };

    return (
        <>
            {/* <ModalNavBackWhite handleBack={handleBack} /> */}
            <ModalNavDone handleBack={handleBack} handleSave={handleSave} />
            <View style={styles.container}>
                <Image source={{ uri: image[0].uri }} style={styles.avatar} />
            </View>

            <Modal visible={isLoading} animationType="fade">
                <Loader />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: "90%",
        height: undefined,
        aspectRatio: 10 / 10,
        borderRadius: 0,
    },
    cameraIcon: {
        backgroundColor: Color.lightgray,
        width: 45,
        aspectRatio: 10 / 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        position: "absolute",
        right: 0,
        bottom: 15,
        // borderWidth: 2,
        // borderColor: Color.white,
    },
    container: {
        // backgroundColor: Color.lightblue,
        alignItems: "center",
        width: "100%",
        aspectRatio: 10 / 10,
        marginTop: 20,
    },
});

export { CropImg };
