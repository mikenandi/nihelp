import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../../Components/Color";
import { HeadingS } from "../../../Components/Typography";
import { OutlineButtonL, ButtonL } from "../../../Components/Buttons";
import { InputText } from "../../../Components/Inputs";

function Names(props: any) {
    return (
        <>
            <View>
                <HeadingS style={styles.nameText}>Names of tenant</HeadingS>

                <InputText label="First name" placeholder="first name" />
                <InputText label="Last name" placeholder="last name" />

                <ButtonL action="next" style={styles.button} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    nameText: {
        // marginLeft: 10,
        marginTop: 10,
        color: Color.primary,
        // alignText: "center",
        // textAlign: "center",
    },
    button: {
        marginTop: 25,
        // backgroundColor:
    },
});

export { Names };
