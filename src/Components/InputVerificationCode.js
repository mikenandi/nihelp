import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Caption } from "./Typography";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import {
    saveFifthCode,
    saveFirstCode,
    saveFourthCode,
    saveSecondCode,
    saveThirdCode,
} from "../Redux/Components/InputCode";

/* Input Verifcation Code */
function InputVerificationCode(props) {
    const dispatch = useDispatch();

    const value = useSelector((state) => {
        return state.inputCode.value;
    });

    const editable = useSelector((state) => {
        return state.inputCode.editable;
    });

    // handling inputs
    const handleFirstCode = (firstCode) => {
        dispatch(saveFirstCode(firstCode));

        return;
    };

    const handleSecondCode = (secondCode) => {
        dispatch(saveSecondCode(secondCode));

        return;
    };

    const handleThirdCode = (thirdCode) => {
        dispatch(saveThirdCode(thirdCode));

        return;
    };

    const handleFourthCode = (fourthCode) => {
        dispatch(saveFourthCode(fourthCode));

        return;
    };

    const handleFifthCode = (fifthCode) => {
        dispatch(saveFifthCode(fifthCode));

        return;
    };

    return (
        <>
            <View style={styles.container}>
                <Caption style={styles.inputTextLabel}>{props.label}</Caption>

                <View style={{ ...styles.inputCodeContainer, ...props.style }}>
                    <TextInput
                        style={
                            value.firstCode
                                ? styles.inputCode
                                : styles.inputCodeEmpty
                        }
                        maxLength={1}
                        value={value.firstCode}
                        onChangeText={handleFirstCode}
                        keyboardType="number-pad"
                        editable={editable.firstCode}
                        autoFocus={false}
                    />
                    <TextInput
                        style={
                            value.secondCode
                                ? styles.inputCode
                                : styles.inputCodeEmpty
                        }
                        maxLength={1}
                        value={value.secondCode}
                        onChangeText={handleSecondCode}
                        keyboardType="number-pad"
                        editable={editable.secondCode}
                        autoFocus={false}
                    />
                    <TextInput
                        style={
                            value.thirdCode
                                ? styles.inputCode
                                : styles.inputCodeEmpty
                        }
                        maxLength={1}
                        value={value.thirdCode}
                        onChangeText={handleThirdCode}
                        keyboardType="number-pad"
                        editable={editable.thirdCode}
                        autoFocus={false}
                    />
                    <TextInput
                        style={
                            value.fourthCode
                                ? styles.inputCode
                                : styles.inputCodeEmpty
                        }
                        maxLength={1}
                        value={value.fourthCode}
                        onChangeText={handleFourthCode}
                        keyboardType="number-pad"
                        editable={editable.fourthCode}
                        autoFocus={false}
                    />
                    <TextInput
                        style={
                            value.fifthCode
                                ? styles.inputCode
                                : styles.inputCodeEmpty
                        }
                        maxLength={1}
                        value={value.fifthCode}
                        onChangeText={handleFifthCode}
                        keyboardType="number-pad"
                        editable={editable.fifthCode}
                        autoFocus={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    inputTextLabel: {
        color: Color.dimblack,
        marginBottom: 2,
        fontWeight: "bold",
        marginLeft: 5,
        textTransform: "capitalize",
    },
    inputCode: {
        fontSize: 24,
        letterSpacing: 15,
        backgroundColor: Color.lightgray,
        width: 40,
        height: 45,
        borderRadius: 5,
        paddingLeft: 8,
    },
    inputCodeContainer: {
        backgroundColor: Color.white,
        width: 260,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    inputCodeEmpty: {
        fontSize: 24,
        letterSpacing: 15,
        backgroundColor: Color.lightgray,
        width: 40,
        height: 45,
        borderRadius: 5,
        paddingLeft: 8,
        borderWidth: 1,
        borderColor: Color.primary,
    },
});

export { InputVerificationCode };
