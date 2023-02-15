import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
import { faqVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { Faq } from "./Faq";
import { Body } from "../../Components/Typography";

function FaqScreen(props) {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(faqVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite
                    handleBack={handleBack}
                    title="Lentify FAQ"
                />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <Faq
                            Q="What is Lentify?"
                            A="Lentify is a rental property management app for
                            landlords. It provides a one-stop-shop for all your
                            rental property needs, from listing your properties
                            online to tracking tenant lease expiration, rent
                            payments, and even virtual tours."
                        />
                        <Faq
                            Q="How does Lentify work?"
                            A="Lentify allows landlords to list their properties
                            online, track tenant lease expiration and rent payments,
                            and even conduct virtual tours. Landlords can also
                            communicate with tenants in real-time through an in-app
                            chatting feature."
                        />
                        <Faq
                            Q="Is Lentify only for landlords?"
                            A="Nope, Lentify is designed to accomodate both landlords
                            and tenants, so there is app for landlords and tenants"
                        />
                        <Faq
                            Q="Can I create a profile on Lentify as a tenant?"
                            A="Yes, Lentify tenant app to create your profile as tenant."
                        />
                        <Faq
                            Q="How do I list my property on Lentify?"
                            A="To list your property on Lentify, simply sign up for an
                            account and follow the prompts to add your property's
                            information, photos, and details."
                        />
                        <Faq
                            Q="Can I conduct virtual tours on Lentify?"
                            A="Yes, Lentify allows landlords to conduct virtual tours of their properties for potential tenants."
                        />
                        <Faq
                            Q="Is there a cost to use Lentify?"
                            A="There is no cost to download and use app."
                        />
                        <Faq
                            Q="Is my personal information on Lentify secure?"
                            A="Lentify takes the security of user's personal
                            information very seriously. They use industry-standard
                            security measures to protect user's information"
                        />
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
        alignItems: "center",
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

export { FaqScreen };
