import React from "react";
import { StyleSheet } from "react-native";
import { Body, BodyS, Caption } from "./Typography";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorMsg } from "../Redux/Components/ErrorMsgSlice";

function ErrorMsg(props: any) {
    const dispatch = useDispatch();

    const errorMsg = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.errorMsg.error;
    });

    React.useEffect(() => {
        setTimeout(() => {
            // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
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
