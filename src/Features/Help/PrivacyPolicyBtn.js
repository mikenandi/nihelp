import React from "react";
import { Modal, StyleSheet } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { PrivacPolicyScreen } from "./PrivacyPolicyScreen";
import { privacyPolicyVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";

function PrivacyPolicyBtn(props) {
    const dispatch = useDispatch();

    const handleShowPrivacyPolicy = () => {
        dispatch(privacyPolicyVisibleReducer());

        return;
    };

    const visible = useSelector((state) => {
        return state.helpModal.privacyPolicyVisible;
    });

    return (
        <>
            <HelpType label="Privacy policy" onPress={handleShowPrivacyPolicy}>
                <MaterialIcons
                    name="privacy-tip"
                    size={32}
                    color={Color.primary}
                />
            </HelpType>

            <Modal visible={visible} animationType="fade">
                <PrivacPolicyScreen />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { PrivacyPolicyBtn };
