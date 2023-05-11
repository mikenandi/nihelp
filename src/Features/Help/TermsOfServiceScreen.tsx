import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
import { termsOfServiceVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { Faq } from "./Faq";
import { TermOfService, Use } from "./TermOfService";
import { HeadingS, BodyS, Body } from "../../Components/Typography";

function TermsOfServiceScreen(props) {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(termsOfServiceVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite
                    handleBack={handleBack}
                    title="Terms of service"
                />

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <TermOfService
                            title="Updated   "
                            date="November 10, 2022"
                            description="These Terms of Service (“Terms”) are a binding legal
                            agreement between you and Rentify that govern your
                            right to use the websites, applications, and other
                            offerings from Rentify (collectively, the “Rentify
                            Platform”). When used in these Terms, “Rentify,”
                            “we,” “us,” or “our” refers to a Rentify entity."
                        />
                        <TermOfService
                            title="1. Introduction"
                            description="The Rentify Platform offers an online venue that
                            enables users (“Members”) to publish, offer, search
                            for, and rent properties. Members who publish
                            and offer rental properties are “Landlords” and Members who
                            search for, rent, or use services are “Tenants”."
                        />
                        <TermOfService
                            title="2. Creating account"
                            description="You must register an account to access
                            and use many features of the Rentify Platform, and
                            must keep your account information accurate."
                            note="You must be atleast 18 years old to use platform."
                        />
                        <TermOfService
                            title="3. Listing property"
                            description="As a Landlord, Rentify offers you the right to use
                            the Rentify Platform to share your rental property
                            details and photos with our vibrant community of
                            Tenants so as they rent property through the
                            platform. It’s easy to create a Listing
                            and you are in control of how you host - set your
                            price, availability, and rules for each Listing."
                        />
                        <TermOfService
                            title="4. Contracting with tenants"
                            description="When you accept a rental request, or receive a
                            payment confirmation through the Rentify Platform,
                            you are entering into a contract directly with the
                            Tenant, and are responsible for delivering your
                            rental property under the terms and at the price
                            specified in your Listing. You are also agreeing to
                            pay applicable fees like Rentify’s service fee (and
                            applicable taxes) for each successfull contract
                            completed for first time tenants. Rentify Payments
                            will deduct amounts you owe from your payment unless
                            we and you agree to a different method. Any terms,
                            policies or conditions that you include in any
                            supplemental contract with Tenant must: (i) be
                            consistent with these Terms, our Additional Legal
                            Terms, Policies, and the information provided in
                            your Listing, and (ii) be prominently disclosed in
                            your Listing description."
                        />
                        <TermOfService
                            title="5. Independence of Landlords"
                            description="Your relationship with Rentify is that of an
                            independent individual or entity and not an
                            employee, agent, joint venturer, or partner of
                            Rentify, except that Rentify Payments acts as a
                            payment collection agent as described in the
                            Payments Terms. Rentify does not direct or control
                            your Rental property, and you agree that you have
                            complete discretion whether and when to provide
                            rental property Services, and at what price and on
                            what terms to offer them."
                        />
                        <TermOfService
                            title="6. Managing property"
                            description="Rentify Platform provides tools that make it easy
                            for you to set up and manage a Listing. Your Listing
                            must include complete and accurate information about
                            your property, your price, other charges like
                            cleaning fees, water fees and electricty fees, and any
                            rules or requirements that apply to your Tenants or
                            Listing. You are responsible for keeping your
                            Listing information and content (like photos)
                            up-to-date and accurate at all times. Once property
                            is rented price updates are not applicable to tenant
                            whose rent is no still running and property with
                            tenant can not be deleted unless the contract is terminated."
                        />
                        <TermOfService
                            title="7. Rentify Platform rules"
                            description="You must follow these rules and must not
                                       help or induce others to break or circumvent these rules."
                        />
                        <Use description="Do not discriminate against or harass others." />
                        <Use description="Do not lie, misrepresent something or someone, or pretend to be someone else" />
                        <Use description="Be polite and respectful when you communicate or interact with others." />
                        <Use
                            description="Do not take any action that could 
                            damage or adversely affect the performance or
                             proper functioning of Rentify Platform"
                        />
                        <Use
                            description="Understand and follow the laws that apply to you, 
                        including privacy, data protection, and export laws."
                        />
                        <TermOfService
                            title="8. Term of agreement"
                            description="The agreement between you and Rentify reflected by
                            these Terms is effective when you access the Rentify
                            Platform (for example to create an account) and
                            remains in effect until either you or we terminate
                            the agreement in accordance with these Terms."
                        />
                        <TermOfService
                            title="9. Termination of agreement"
                            description="You may terminate this agreement at any time by
                            sending us an email or by deleting your account.
                            Rentify may terminate this agreement and your
                            account for any reason by giving you 30 days’ notice
                            via email or using any other contact information you
                            have provided for your account. Rentify may also
                            terminate this agreement immediately and without
                            notice and stop providing access to the Rentify
                            Platform if you breach these Terms, you violate our
                            Additional Legal Terms, or Policies, you violate
                            applicable laws, or we reasonably believe
                            termination is necessary to protect Rentify, its
                            Members, or third parties. If your account has been
                            inactive for more than two years, we may terminate
                            your account without prior notice."
                        />
                        <TermOfService
                            title="10. Member vialations"
                            description="If (i) you breach these Terms, our Additional Legal
                            Terms, Policies, or our Standards, (ii) you violate
                            applicable laws, regulations, or third-party rights,
                            or (iii) Rentify believes it is reasonably necessary
                            to protect Rentify, its Members, or third parties;
                            Rentify may, with or without prior notice:"
                        />
                        <Use
                            description="suspend or limit your access to or
                         use of the Rentify Platform and/or your account;"
                        />
                        <Use description="suspend or remove Listings, Reviews, or other Content;" />
                        <Use description="suspend or revoke any special status associated with your account." />
                        <TermOfService
                            title="11. Modifications"
                            description="Rentify may modify these Terms at any time. When we
                            make material changes to these Terms, we will post
                            the revised Terms on the Rentify Platform and update
                            the “Last Updated” date at the top of these Terms.
                            We will also provide you with notice of any material
                            changes by email at least 30 days before the date
                            they become effective. If you disagree with the
                            revised Terms, you may terminate this agreement
                            immediately as provided in these Terms. If you do
                            not terminate your agreement before the date the
                            revised Terms become effective, your continued
                            access to or use of the Rentify Platform will
                            constitute acceptance of the revised Terms."
                        />
                        <TermOfService
                            title="12. Disclaimer of warranty"
                            description="We provide the Rentify Platform and all Content “as
                            is” without warranty of any kind and we disclaim all
                            warranties, whether express or implied. For example:
                            (i) we do not endorse or warrant the existence,
                            conduct, performance, safety, quality, legality or
                            suitability of any Tenant, Landlord, Landlord Service,
                            Listing or third party; (ii) we do not warrant the
                            performance or non-interruption of the Rentify
                            Platform; and (iii) we do not warrant that
                            verification, identity or background checks
                            conducted on Listings or Members (if any) will
                            identify past misconduct or prevent future
                            misconduct. Any references to a Member or Listing
                            being verified (or similar language) indicate only
                            that the Member or Listing or Rentify has completed a
                            relevant verification or identification process and
                            nothing else. The disclaimers in these Terms apply
                            to the maximum extent permitted by law. If you have
                            statutory rights or warranties we cannot disclaim,
                            the duration of any such statutorily required rights
                            or warranties, will be limited to the maximum extent
                            permitted by law."
                        />
                        <TermOfService
                            title="13. Limitation of Liability"
                            description="Neither Rentify (including its affiliates and
                            personnel) nor any other party involved in creating,
                            producing, or delivering the Rentify Platform or any
                            Content will be liable for any incidental, special,
                            exemplary or consequential damages, including lost
                            profits, loss of data or loss of goodwill, service
                            interruption, computer damage or system failure or
                            the cost of substitute products or services, or for
                            any damages for personal or bodily injury or
                            emotional distress arising out of or in connection
                            with (i) these Terms, (ii) the use of or inability
                            to use the Rentify Platform or any Content, (iii) any
                            communications, interactions or meetings you may
                            have with someone you interact or meet with through,
                            or as a result of, your use of the Rentify Platform,
                            or (iv) publishing or booking of a Listing,
                            including the provision or use of Host Services,
                            whether based on warranty, contract, tort (including
                            negligence), product liability or any other legal
                            theory, and whether or not Rentify has been informed
                            of the possibility of such damage, even if a limited
                            remedy set out in these Terms is found to have
                            failed of its essential purpose."
                        />

                        <TermOfService
                            title="Aknowledgement"
                            description="BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, 
                            YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF
                             SERVICE AND AGREE TO BE BOUND BY THEM."
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

export { TermsOfServiceScreen };
