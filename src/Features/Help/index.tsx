import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
import { helpVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { FaqBtn } from "./FaqBtn";
import { ContactUsBtn } from "./ContactUsBtn";
import { TermsOfServiceBtn } from "./TermsOfServiceBtn";
import { PrivacyPolicyBtn } from "./PrivacyPolicyBtn";

function Help(props) {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(helpVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite handleBack={handleBack} title="Help" />
                {/* <View style={styles.container}>
                    <View style={styles.topLine} />
                </View> */}
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <FaqBtn />

                        <ContactUsBtn />

                        <TermsOfServiceBtn />

                        <PrivacyPolicyBtn />
                    </View>
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
});

export { Help };
