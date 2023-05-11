import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../../Components/Color";
import { HeadingM, HeadingS } from "../../../Components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { OutlineButtonL, ButtonL } from "../../../Components/Buttons";
import { Names } from "./Names";
import { Gender } from "./Gender";
import { InputDOB } from "./InputDOB";

function RegisterTenantForm(props: any) {
    return (
        <>
            <View style={styles.container}>
                {/* <Names /> */}

                {/* <Gender /> */}
                <InputDOB />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "center",
    },
});

export { RegisterTenantForm };
