import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { HeadingS, Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { useDispatch } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../Redux/Features/Insights/... Remove this comment to see the full error message
import { insightsVisibleReducer } from "../../Redux/Features/Insights/InsightsModalSlice";
// @ts-expect-error TS(2307): Cannot find module '../../Components/HomeSummary' ... Remove this comment to see the full error message
import { HomeSummary } from "../../Components/HomeSummary";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Insight } from "./Insight";
import { PieChart } from "./PieChart";
import { Graph } from "./Graph";

function Insights(props: any) {
    const dispatch = useDispatch();
    const iconSize = 28;

    const handleBack = () => {
        dispatch(insightsVisibleReducer());

        return;
    };

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite handleBack={handleBack} title="Insights" />

                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        {/* <PieChart /> */}
                        <Graph />

                        <Insight />
                    </View>
                </ScrollView>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
        alignItems: "center",
        width: "95%",
    },
    container: {
        // alignItems: "center",
        width: "100%",
        // backgroundColor: Color.lightblue,
        marginTop: 10,
    },
    scrollContainer: {
        paddingBottom: 30,
    },
});

export { Insights };
