import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { contactUsVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { ContactUsScreen } from "./ContactUsScreen";

function ContactUsBtn(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.helpModal.contactUsVisible;
    });

    const handleContactUs = () => {
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
