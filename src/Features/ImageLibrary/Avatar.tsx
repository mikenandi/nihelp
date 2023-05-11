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
import { saveSelectedIds } from "../../Redux/Features/ImageLibrary/ImageSlice";
import { infoMsg } from "../../Redux/Components/ErrorMsgSlice";
import { Body } from "../../Components/Typography";
import { cropVisibleReducer } from "../../Redux/Features/Account/AccountModalSlice";

function Avatar(props: any) {
    // seting states
    const { width } = useWindowDimensions();

    const [selected, setSelected] = React.useState(false);

    const savedIds = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.imageLibrary.savedIds;
    });

    React.useEffect(() => {
        (() => {
            // if (savedIds.length > 0) console.log("this is modal here");
            // console.log(savedIds.length);
            return;
        })();
    }, [savedIds]);

    const dispatch = useDispatch();

    // handling selection of images
    const handleSaveId = () => {
        dispatch(saveSelectedIds(props.id));
        // dispatch(getSelectedImages());
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(cropVisibleReducer());

        // setSelected(true);
        return;
    };

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSaveId}
                style={{
                    ...styles.container,
                    // backgroundColor: selected ? Color.black : Color.white,
                    // opacity: selected ? 0.9 : 0.9,
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
                        {/* <Ionicons
                            name="checkmark-circle-sharp"
                            size={28}
                            color={Color.primary}
                            style={styles.checkmarkIcon}
                        /> */}
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

export default React.memo(Avatar);
