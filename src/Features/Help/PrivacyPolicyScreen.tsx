import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
import { privacyPolicyVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { TermOfService, Use } from "./TermOfService";

function PrivacPolicyScreen(props: any) {
    const dispatch = useDispatch();

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(privacyPolicyVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite
                    handleBack={handleBack}
                    title="Privacy Policy"
                />

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <TermOfService
                            title="Updated   "
                            date="January 21, 2023"
                            description="This Privacy Policy explains how we collect, use, and
                            disclose information about you when you use our mobile
                            application (the 'App') and the services, features,
                            content, and functionality offered on or through the App
                            (the 'Services'). By using the App or the Services, you
                            consent to the collection, use, and disclosure of your
                            information as described in this Privacy Policy. We take
                            the privacy of our users seriously, and we are committed
                            to protecting your personal information. This policy
                            explains what information we collect, how we use it, and
                            the choices you have regarding your personal
                            information. It is important that you read this policy
                            carefully and contact us if you have any questions or
                            concerns."
                        />
                        <TermOfService
                            title="1. Introduction"
                            description="This Privacy Policy explains how we collect, use, and
                            disclose information about you when you use our mobile
                            application (the 'App') and the services, features,
                            content, and functionality offered on or through the App
                            (the 'Services'). By using the App or the Services, you
                            consent to the collection, use, and disclosure of your
                            information as described in this Privacy Policy."
                        />
                        <TermOfService
                            title="2. Information we collect"
                            description="We may collect information about you in a variety of ways, including:"
                        />
                        <Use
                            description="Information you provide directly to us: We may collect
                                information that you provide to us directly when you
                                create an account, search for properties, contact
                                landlords or property managers, or otherwise use the
                                Services. This information may include your name, email
                                address, phone number, address, and other information
                                you choose to provide."
                        />
                        <Use
                            description="Information we collect automatically: We may
                            automatically collect information about your device,
                            such as your device type, operating system version,
                            browser type, and IP address. We may also collect
                            information about your use of the Services, such as the
                            pages you visit, the links you click, and the search
                            terms you use."
                        />
                        <Use
                            description="Information from third parties: We may receive
                            information about you from third parties, such as from
                            social media platforms if you sign in to the Services
                            using your social media account."
                        />
                        <TermOfService
                            title="3. Use of information"
                            description="We may use the information we collect about you to:"
                        />
                        <Use description="Provide, operate, maintain, and improve the Services;" />
                        <Use description="Respond to your comments, questions, and requests;" />
                        <Use description="Provide customer service" />
                        <Use
                            description="Send you technical notices, updates, security alerts, 
                        and support and administrative messages;"
                        />
                        <Use
                            description="Communicate with you about products, services, 
                        promotions, and events offered by us and others;"
                        />
                        <Use
                            description="Monitor and analyze trends, usage, and activities
                         in connection with the Services;"
                        />
                        <Use
                            description="Investigate and prevent fraudulent transactions, unauthorized 
                        access to the Services, and other illegal activities"
                        />
                        <Use
                            description="Personalize your experience and provide you with content, 
                        features, and advertisements that match your interests and preferences"
                        />
                        <Use
                            description="Facilitate communication and transactions between landlords, 
                        property managers and tenants."
                        />
                        <TermOfService
                            title="4. Disclosure of information"
                            description="We may disclose the information we collect about you as follows:"
                        />
                        <Use
                            description="To third-party service providers and partners who
                            perform services on our behalf, such as hosting and
                            maintenance, customer service, email delivery,
                            marketing, and analytics"
                        />
                        <Use
                            description="To landlords and property managers to facilitate communication 
                          and transactions between tenants and landlords;"
                        />
                        <Use
                            description="To comply with legal obligations, such as 
                         responding to a subpoena or court order;"
                        />
                        <Use
                            description="To protect the rights, property, or 
                        safety of our company, our users, or others;"
                        />
                        <Use
                            description="In connection with a merger, sale of company assets, 
                        financing or acquisition of all or a portion of our business to another company;"
                        />
                        <Use description="With your consent or at your direction." />
                        <TermOfService
                            title="5. Data rentention"
                            description=" We will retain your information for as long as your
                            account is active or as needed to provide you with the
                            Services. We may also retain and use your information as
                            necessary to comply with our legal obligations, resolve
                            disputes, and enforce our agreements."
                        />
                        <TermOfService
                            title="6. Security"
                            description="We take reasonable measures to protect the information 
                            we collect from or about you from unauthorized access, use, alteration, 
                            or destruction. However, no internet-based service can be 100% secure, 
                            and we cannot guarantee that unauthorized access, hacking, data loss, 
                            or other breaches will never occur."
                        />
                        <TermOfService
                            title="7. Changes to privacy policy"
                            description='We may change this Privacy Policy from time to time. If we make changes, 
                            we will provide notice of such changes, such as by sending an email, providing 
                            notice through the App, or updating the "Updated" date at the top of this Privacy Policy'
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

export { PrivacPolicyScreen };
