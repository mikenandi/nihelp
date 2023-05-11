import React from "react";
import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../Components/Color";

function Graph() {
    const dispatch = useDispatch();

    const { vacant, paidRent, overdueRent } = useSelector((state) => {
        return state.properties.counts;
    });

    const data = [
        {
            name: "Rented",
            population: paidRent,
            color: Color.primary_,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Overdue",
            population: overdueRent,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
        {
            name: "Vacant",
            population: vacant,
            color: Color.warning,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
        },
    ];

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                width={300}
                height={220}
                chartConfig={{
                    backgroundColor: "#1cc910",
                    backgroundGradientFrom: "#eff3ff",
                    backgroundGradientTo: "#efefef",
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726",
                    },
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
});

export { Graph };
