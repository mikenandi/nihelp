import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../Components/Color";
import { propertyFeaturesVisibleReducer } from "../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { TopComp } from "./TopComp";
import { RoomTypes } from "./RoomTypes";
import { Amenities } from "./Amenities";
import { Sheet } from "../../../Components/Sheet";
import { Location } from "./Location";

function Specifications(props) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(propertyFeaturesVisibleReducer());
        return;
    };

    const { propertyType } = useSelector((state) => {
        return state.properties.property;
    });

    return (
        <>
            <Sheet
                title="Specifcations"
                maxSnap="60%"
                handleClose={handleClose}
            >
                <TopComp />
                {propertyType !== "room" && <RoomTypes />}

                <Amenities />

                <Location />
            </Sheet>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.black,
        width: "100%",
        height: "100%",
        opacity: 0.4,
    },
});

export { Specifications };
