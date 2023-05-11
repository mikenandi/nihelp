import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { contactUsVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { ContactUsScreen } from "./ContactUsScreen";

function ContactUsBtn(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.helpModal.contactUsVisible;
    });

    const handleContactUs = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(contactUsVisibleReducer());

        return;
    };

    return (
        <>
            <HelpType label="Contact us" onPress={handleContactUs}>
                <AntDesign
                    name="customerservice"
                    size={32}
                    color={Color.primary}
                />
            </HelpType>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <ContactUsScreen />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { ContactUsBtn };
