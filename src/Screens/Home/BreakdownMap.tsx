import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import Topbar from "../../Layouts/Topbar";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { breakdownVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { RootState } from "../../Redux";

const BreakdownMap: React.FC = (props) => {
  const dispatch = useDispatch();

  const handleBack = (): void => {
    dispatch(breakdownVisibleReducer());
  };

  const locationData = useSelector((state: RootState) => {
    return state.reportBreakdown.location;
  });

  const plateNumber: string = useSelector((state: RootState) => {
    return state.reportBreakdown.plateNumber;
  });

  return (
    <>
      <Screen>
        <ModalNavBack
          title={`${plateNumber} Breakdown`}
          handleBack={handleBack}
        />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -6.823,
            longitude: 39.26,
            latitudeDelta: 2,
            longitudeDelta: 2,
          }}
        >
          <Marker
            coordinate={{
              latitude: Number(locationData.latitude),
              longitude: Number(locationData.longitude),
            }}
            title={plateNumber}
          />
        </MapView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  scrollContainer: {
    paddingBottom: 70,
  },
  fab: {
    backgroundColor: Color.lightblue,
  },
  startPostingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyImg: {
    width: 240,
    height: undefined,
    aspectRatio: 10 / 10,
  },
  notifyContainer: {
    backgroundColor: Color.white,
    top: 20,
    borderRadius: 100,
  },
});

export default BreakdownMap;
