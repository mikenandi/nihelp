import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Linking,
    TouchableOpacity,
} from "react-native";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
import { contactUsVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Body, BodyS } from "../../Components/Typography";

function ContactUsScreen(props: any) {
    const dispatch = useDispatch();

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(contactUsVisibleReducer());

        return;
    };

    const handleChatWithUs = () => {
        Linking.openURL("http://api.whatsapp.com/send?phone=255620574280");

        return;
    };

    const handleCallUs = () => {
        Linking.openURL("tel:+255682487932");

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite handleBack={handleBack} title="Contact us" />

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleChatWithUs}
                    >
                        <View style={styles.container}>
                            <View style={styles.rowContainer}>
                                <View style={styles.buttonContainer}>
                                    <Ionicons
                                        name="logo-whatsapp"
                                        size={28}
                                        color={Color.primary}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Body style={styles.titleText}>
                                        Chat with us
                                    </Body>
                                    // @ts-expect-error TS(2339): Property 'labelText' does not exist on type '{ faq... Remove this comment to see the full error message
                                    <BodyS style={styles.labelText}>
                                        Send us WhatsApp message
                                    </BodyS>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleCallUs}
                    >
                        <View style={styles.container}>
                            <View style={styles.rowContainer}>
                                <View style={styles.buttonContainer}>
                                    <Ionicons
                                        name="call-outline"
                                        size={28}
                                        color={Color.primary}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Body style={styles.titleText}>
                                        Call us
                                    </Body>
                                    // @ts-expect-error TS(2339): Property 'labelText' does not exist on type '{ faq... Remove this comment to see the full error message
                                    <BodyS style={styles.labelText}>
                                        Talk to our customer support
                                    </BodyS>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    faqText: {
        textAlign: "center",
        // fontWeight: "bold",
    },
    container: {
        // alignItems: "center",
        marginLeft: 20,
    },
    topLine: {
        width: 40,
        height: 4,
        backgroundColor: Color.primary,
        borderRadius: 10,
    },
    scrollContainer: {
        paddingBottom: 24,
    },
    rowContainer: {
        flexDirection: "row",
        width: "95%",
        marginTop: 20,
        alignItems: "center",
        marginBottom: 10,
    },
    textContainer: {
        marginLeft: 20,
        width: "80%",
    },
    titleText: {
        fontWeight: "bold",
    },
    buttonContainer: {
        backgroundColor: Color.lightgray,
        width: 50,
        aspectRatio: 1 / 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
});

export { ContactUsScreen };
