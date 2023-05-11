import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { termsOfServiceVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { TermsOfServiceScreen } from "./TermsOfServiceScreen";

function TermsOfServiceBtn(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.helpModal.termsOfServiceVisible;
    });

    const handleTermsOfService = () => {
        dispatch(termsOfServiceVisibleReducer());

        return;
    };

    return (
        <>
            <HelpType
                label="Terms of service"
                onPress={handleTermsOfService}
            >
                <Ionicons
                    name="document-text-sharp"
                    size={32}
                    color={Color.primary}
                />
            </HelpType>

            <Modal visible={visible} transparent={false} animationType="fade">
                <TermsOfServiceScreen />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { TermsOfServiceBtn };
