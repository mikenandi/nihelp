import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../Components/Color";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { getGpsLocation } from "../../Helpers/Location";
import { ModalScreen } from "../../Layouts/ModalScreen";
import {
  brakingSystemMalfunctionReducer,
  clearBreakdownReducer,
  deadBatteryReducer,
  electricalSystemFailureReducer,
  engineFailureReducer,
  flatTyreReducer,
  fuelSystemIssueReducer,
  overHeatingReducer,
} from "../../Redux/Features/ReportBreakdown/ReportBreakdownSlice";
import { HelpType } from "./HelpType";
import { breakdownReportVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { RootState } from "../../Redux";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { getRoutes } from "../../Api/Services/Backend/Route";
import { postBreakdown } from "../../Api/Services/Backend/Breakdown";
import { Button } from "react-native-paper";

interface ReportBreakdownProps {}

export const ReportBreakdown: React.FC<ReportBreakdownProps> = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleBack = (): void => {
    dispatch(breakdownReportVisibleReducer());
    dispatch(clearBreakdownReducer());
  };

  const {
    engineFailure,
    flatTyre,
    deadBattery,
    overHeating,
    fuelSystemIssue,
    brakingSystemMalfunction,
    electricalSystemFailure,
  } = useSelector((state: RootState) => {
    return state.reportBreakdown;
  });

  const { authToken } = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleEngineFailure = (): void => {
    dispatch(engineFailureReducer());
  };

  const handleFlatTyre = (): void => {
    dispatch(flatTyreReducer());
  };

  const handleDeadBattery = (): void => {
    dispatch(deadBatteryReducer());
  };

  const handleOverHeating = (): void => {
    dispatch(overHeatingReducer());
  };

  const handleFuelSystemIssue = (): void => {
    dispatch(fuelSystemIssueReducer());
  };

  const handleBrakingSystemMalfunction = (): void => {
    dispatch(brakingSystemMalfunctionReducer());
  };

  const handleElectricalSystemFailure = (): void => {
    dispatch(electricalSystemFailureReducer());
  };

  const handleSend = async () => {
    try {
      setIsLoading(true);

      let location = await getGpsLocation();

      let latitude, longitude;
      if (location !== undefined) {
        latitude = location.coords.latitude;
        longitude = location.coords.longitude;
      }

      let routes = await getRoutes(authToken);
      let routeId: number = routes[0].id;

      let inputs = {
        engineFailure,
        flatTyre,
        deadBattery,
        overHeating,
        fuelSystemIssue,
        brakingSystemMalfunction,
        electricalSystemFailure,
        latitude,
        longitude,
      };

      await postBreakdown(inputs, routeId, authToken);

      dispatch(clearBreakdownReducer());

      setIsLoading(false);

      handleBack();

      return;
    } catch (error) {
      console.log(error);

      return;
    }
  };

  return (
    <>
      <ModalScreen>
        <ModalNavBack handleBack={handleBack} title="Report breakdown?" />
        <ScrollView contentContainerStyle={styles.contentcontainer}>
          <View style={styles.container}>
            <HelpType
              name="Engine Failure"
              isSelected={engineFailure}
              onPress={handleEngineFailure}
            >
              <MaterialCommunityIcons
                name="engine-off"
                size={50}
                color="#964B00"
              />
            </HelpType>
            <HelpType
              name="Flat Tyre"
              isSelected={flatTyre}
              onPress={handleFlatTyre}
            >
              <Image
                source={require("../../../assets/img/tyre.png")}
                style={styles.img}
              />
            </HelpType>
            <HelpType
              name="Over Heating"
              isSelected={overHeating}
              onPress={handleOverHeating}
            >
              <MaterialCommunityIcons
                name="car-seat-heater"
                size={50}
                color="#e25822"
              />
            </HelpType>
            <HelpType
              name="Dead Battery"
              isSelected={deadBattery}
              onPress={handleDeadBattery}
            >
              <Image
                source={require("../../../assets/img/battery.png")}
                style={styles.img}
              />
            </HelpType>
            <HelpType
              name="Fuel Issue"
              isSelected={fuelSystemIssue}
              onPress={handleFuelSystemIssue}
            >
              <MaterialCommunityIcons
                name="fuel"
                size={60}
                color={Color.error}
              />
            </HelpType>

            <HelpType
              name="Braking Malfunction"
              isSelected={brakingSystemMalfunction}
              onPress={handleBrakingSystemMalfunction}
            >
              <Image
                source={require("../../../assets/img/mechanic.png")}
                style={styles.img}
              />
            </HelpType>

            <HelpType
              name="Electrical Failure"
              isSelected={electricalSystemFailure}
              onPress={handleElectricalSystemFailure}
            >
              <MaterialIcons
                name="electric-rickshaw"
                size={60}
                color={Color.warning}
              />
            </HelpType>
          </View>
        </ScrollView>

        <Button
          mode="contained"
          loading={isLoading}
          onPress={handleSend}
          buttonColor={Color.primary}
          style={styles.reportButton}
          contentStyle={styles.buttonContent}
          icon={() => (
            <Feather name="arrow-right" size={14} color="white" />
          )}
        >
          Report
        </Button>
      </ModalScreen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    flex: 1,
  },
  img: {
    width: 70,
    aspectRatio: 10 / 10,
    height: undefined,
  },
  contentcontainer: {
    paddingBottom: 40,
  },
  bottomContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  reportButton: {
    margin: 20,
  },
  buttonContent: {
    flexDirection: "row-reverse",
  },
});
