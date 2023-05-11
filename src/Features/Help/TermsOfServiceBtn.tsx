import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { termsOfServiceVisibleReducer } from "../../Redux/Features/Help/HelpModalSlice";
import { TermsOfServiceScreen } from "./TermsOfServiceScreen";

function TermsOfServiceBtn(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.helpModal.termsOfServiceVisible;
    });

    const handleTermsOfService = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
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
