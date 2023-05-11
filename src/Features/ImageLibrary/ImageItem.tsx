import React from "react";
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import Color from "../../Components/Color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
    removeSelectedId,
    saveSelectedIds,
} from "../../Redux/Features/ImageLibrary/ImageSlice";
import { infoMsg } from "../../Redux/Components/ErrorMsgSlice";
import { Body } from "../../Components/Typography";

function ImageItem(props: any) {
    const { width } = useWindowDimensions();

    const [selected, setSelected] = React.useState(false);

    const savedIds = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.imageLibrary.savedIds;
    });

    const dispatch = useDispatch();

    // handling selection of images
    const handleSaveId = async () => {
        try {
            // let storageSize = await ImageSize.getSize(props.source)["fileSize"];

            // console.log(storageSize);

            if (!selected && savedIds.length < 25) {
                dispatch(saveSelectedIds(props.id));
                setSelected(true);
            } else if (selected) {
                dispatch(removeSelectedId(props.id));
                setSelected(false);
            } else {
                dispatch(infoMsg("Upload limit is 25 images"));
            }
        } catch (error) {}
    };

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSaveId}
                style={{
                    ...styles.container,
                }}
            >
                <Image
                    resizeMode="cover"
                    source={{ uri: props.source }}
                    style={{ ...styles.imageItem, width: width / 3 - 5 }}
                />

                {/* icon to be shown when image is selected */}
                {selected && (
                    <View style={styles.checkContainer}>
                        <Body style={styles.selectedText}>
                            {savedIds.indexOf(props.id) + 1}
                        </Body>
                    </View>
                )}
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
    },
    imageItem: {
        aspectRatio: 10 / 10,
        // backgroundColor: Color.lightgray,
    },
    checkmarkIcon: {
        // position: "absolute",
        // top: 0,
        // left: 0,
    },
    checkContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: Color.primary,
        borderRadius: 30,
        // borderWidth: 1,
        // borderColor: Color.lightgray,
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
    },
    selectedText: {
        color: Color.white,
        fontWeight: "bold",
    },
});

export default React.memo(ImageItem);
