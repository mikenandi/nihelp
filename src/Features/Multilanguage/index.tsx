import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Color from "../../Components/Color";
import { Body, HeadingS } from "../../Components/Typography";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreen, ModalScreenWhite } from "../../Layouts/ModalScreen";
import { Language } from "./Language";
import { useDispatch, useSelector } from "react-redux";
import { multilanguageVisibleReducer } from "../../Redux/Features/MultiLanguage/MultilanguageModalSlice";
import { i18n } from "../../../assets/i18n/i18n";
import { useTranslation } from "react-i18next";
import { currentLanguageReducer } from "../../Redux/Features/MultiLanguage/MultilanguageSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Languages(props: any) {
    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const handleBack = () => {
        // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
        dispatch(multilanguageVisibleReducer());
        return;
    };

    const language = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.multilanguage.currentLanguage;
    });

    const handleSwahili = async () => {
        await i18n.changeLanguage("sw");
        await AsyncStorage.setItem("language", "sw");

        dispatch(currentLanguageReducer("sw"));

        return;
    };
    const handleEnglish = async () => {
        await i18n.changeLanguage("en");

        await AsyncStorage.setItem("language", "en");

        dispatch(currentLanguageReducer("en"));

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite
                    handleBack={handleBack}
                    title="Choose language"
                />
                <View>
                    <Language
                        language="Swahili"
                        selected={language === "sw"}
                        onPress={handleSwahili}
                    />

                    <Language
                        language="English"
                        selected={language === "en"}
                        onPress={handleEnglish}
                    />
                </View>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({});

export { Languages };
