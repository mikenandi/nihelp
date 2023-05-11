import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import {
    faqVisibleReducer,
    helpVisibleReducer,
} from "../../Redux/Features/Help/HelpModalSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HelpType } from "./HelpType";
import { FaqScreen } from "./FaqScreen";

function FaqBtn(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.helpModal.faqVisible;
    });

    const handleShowFaq = () => {
        dispatch(faqVisibleReducer());
        return;
    };

    return (
        <>
            <HelpType label="Lentify FAQ" onPress={handleShowFaq}>
                <MaterialCommunityIcons
                    name="frequently-asked-questions"
                    size={32}
                    color={Color.primary}
                />
            </HelpType>

            <Modal transparent={false} visible={visible} animationType="fade">
                <FaqScreen />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { FaqBtn };
