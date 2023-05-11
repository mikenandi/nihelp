import React from "react";
import { StyleSheet } from "react-native";
import { Body, BodyS, Caption } from "./Typography";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorMsg } from "../Redux/Components/ErrorMsgSlice";

function ErrorMsg(props) {
    const dispatch = useDispatch();

    const errorMsg = useSelector((state) => {
        return state.errorMsg.error;
    });

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(deleteErrorMsg());

            return;
        }, 6000);
    }, [errorMsg]);

    return <>{!!errorMsg && <Body style={styles.errorMsg}>{errorMsg}</Body>}</>;
}

const styles = StyleSheet.create({
    errorMsg: {
        color: Color.error,
        // fontWeight: "bold",
        width: "80%",
        // backgroundColor: Color.lightred,
        // textAlign: "center",
        // padding: 8,
        // borderRadius: 6,
        // width: "80%",
    },
});

export { ErrorMsg };
