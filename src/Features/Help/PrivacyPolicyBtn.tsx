import React from "react";
import { Modal, StyleSheet } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { PrivacPolicyScreen } from "./PrivacyPolicyScreen";
import { privacyPolicyVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";

function PrivacyPolicyBtn(props: any) {
    const dispatch = useDispatch();

    const handleShowPrivacyPolicy = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(privacyPolicyVisibleReducer());

        return;
    };

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
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
