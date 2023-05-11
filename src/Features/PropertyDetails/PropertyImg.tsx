import React from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import Color from "../../Components/Color";
import { BodyS } from "../../Components/Typography";
import { useSelector, useDispatch } from "react-redux";
import {
    Ionicons,
    FontAwesome5,
    AntDesign,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
// @ts-expect-error TS(2307): Cannot find module '../../Redux/Features/PropertyD... Remove this comment to see the full error message
import { showPropertyDetailsReducer } from "../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";

function PropertyImg(props: any) {
    const dispatch = useDispatch();

    const [imgActive, setImgActive] = React.useState(0);

    const { width, height } = useWindowDimensions();
    let WIDTH = width;
    let HEIGHT = height;

    const handleBack = () => {
        dispatch(showPropertyDetailsReducer());
        return;
    };

    const { status, propertyImages, propertyType } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.properties.property;
    });

    const handleOnScroll = (e: any) => {
        if (e.nativeEvent) {
            const slide = Math.ceil(
                e.nativeEvent.contentOffset.x /
                    e.nativeEvent.layoutMeasurement.width
            );

            if (slide !== imgActive) {
                setImgActive(slide);
            }
        }
    };

    return <>
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            style={{ width: WIDTH, height: HEIGHT * 0.4 }}
        >
            {propertyImages.map((item: any) => {
                return (
                    <View
                        style={{ ...styles.container, width: WIDTH }}
                        key={item.id}
                    >
                        <Image
                            source={{ uri: item.img_url }}
                            style={{ ...styles.propertyImg, width: WIDTH }}
                            resizeMode="cover"
                        />
                        {true && (
                            <View style={styles.backIcon}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={handleBack}
                                >
                                    <Ionicons
                                        name="arrow-back"
                                        size={22}
                                        color={Color.black}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}

                        {imgActive === 0 && (
                            <View style={styles.propertyTypeContainer}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={handleBack}
                                >
                                    <BodyS style={styles.propertyTypeText}>
                                        {propertyType}
                                    </BodyS>
                                </TouchableOpacity>
                            </View>
                        )}

                        {status === "vacant" && imgActive === 0 && (
                            <View
                                style={{
                                    ...styles.statusContainer,
                                    // backgroundColor: Color.warning,
                                }}
                            >
                                <AntDesign
                                    name="infocirlceo"
                                    size={20}
                                    color={Color.warning}
                                    // @ts-expect-error TS(2339): Property 'icon' does not exist on type '{ containe... Remove this comment to see the full error message
                                    style={styles.icon}
                                />
                            </View>
                        )}

                        {status === "paid-rent" && imgActive === 0 && (
                            <View
                                style={{
                                    ...styles.statusContainer,
                                    // backgroundColor: Color.primary,
                                }}
                            >
                                <FontAwesome5
                                    name="check-circle"
                                    size={20}
                                    color={Color.primary}
                                    // @ts-expect-error TS(2339): Property 'icon' does not exist on type '{ containe... Remove this comment to see the full error message
                                    style={styles.icon}
                                />
                            </View>
                        )}

                        {status === "overdue-rent" && imgActive === 0 && (
                            <View
                                style={{
                                    ...styles.statusContainer,
                                    // backgroundColor: Color.error,
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="cancel"
                                    size={20}
                                    color={Color.error}
                                    // @ts-expect-error TS(2339): Property 'icon' does not exist on type '{ containe... Remove this comment to see the full error message
                                    style={styles.icon}
                                />
                            </View>
                        )}

                        <View style={styles.imgCountContainer}>
                            <BodyS style={styles.imgCountText}>
                                {imgActive + 1} / {propertyImages.length}
                            </BodyS>
                        </View>
                    </View>
                );
            })}
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    container: {
        width: 320,
    },
    propertyImg: {
        height: undefined,
        width: 320,
        aspectRatio: 10 / 6.8,
        backgroundColor: Color.lightgray,
    },
    backIcon: {
        position: "absolute",
        top: 20,
        left: 14,
        backgroundColor: Color.lightgray,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1 / 1,
        borderRadius: 20,
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 5,
    },
    statusContainer: {
        position: "absolute",
        top: 20,
        right: 16,
        backgroundColor: Color.lightgray,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1 / 1,
        borderRadius: 50,
        flexDirection: "row",
        // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
        alignItems: "center",
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.9,
        elevation: 5,
    },
    imgCountContainer: {
        backgroundColor: Color.black,
        padding: 5,
        position: "absolute",
        right: 10,
        bottom: 20,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.75,
    },
    imgCountText: {
        fontWeight: "bold",
        color: Color.white,
    },
    propertyTypeContainer: {
        position: "absolute",
        top: 20,
        left: 70,
        backgroundColor: Color.lightgray,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
        // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
        alignItems: "center",
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.9,
        elevation: 2,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderTopLeftRadius: 2,
    },
    propertyTypeText: {
        textTransform: "capitalize",
        fontWeight: "bold",
        color: Color.primary,
    },
});

export { PropertyImg };
