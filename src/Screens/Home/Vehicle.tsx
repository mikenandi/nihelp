import React from "react";
import {
  Feather,
  FontAwesome5,
  Fontisto,
  Octicons,
} from "@expo/vector-icons";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Color from "../../Components/Color";
import { Card } from "../../Components/Card";
import { Body, HeadingS } from "../../Components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { vehicleDetailsVisibleReducer } from "../../Redux/Features/Vehicle/VehicleModalSlice";
import { RootState } from "../../Redux";
import { VehicleDetails } from "./VehicleDetails";
import { getVehicle } from "../../Api/Services/Backend/Vehicle";
import {
  VehicleState,
  saveVehicleReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";
import { createRouteVisibleReducer } from "../../Redux/Features/Route/RouteModal";
import { IBreakdown } from ".";
import { getReadableIssues } from "../../Helpers/BreakdownMsg";

interface VehicleProps {
  plateNumber: string;
  model: string;
  make: string;
  route?: string;
  id: number;
  breakdown?: IBreakdown[];
}

interface IAuth {
  authToken: string;
  isOwner: boolean;
}

export const Vehicle: React.FC<VehicleProps> = (props) => {
  const dispatch = useDispatch();

  const visible: boolean = useSelector((state: RootState) => {
    return state.vehicleModal.vehicleDetailsVisible;
  });

  const [issues, setIssues] = React.useState("");

  const { authToken, isOwner }: IAuth = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleRegisterRoute = (): void => {
    dispatch(createRouteVisibleReducer());
  };

  const handleVehicleDetails = async (): Promise<void> => {
    let response: VehicleState = await getVehicle(authToken, props.id);

    dispatch(saveVehicleReducer({ ...response }));

    dispatch(vehicleDetailsVisibleReducer());
  };

  return (
    <>
      <TouchableOpacity onPress={handleVehicleDetails} activeOpacity={0.9}>
        <Card style={styles.container}>
          <View style={styles.detailsWrapper}>
            <View style={styles.iconContainer}>
              <Fontisto name="truck" size={35} color={Color.dimblack} />
            </View>

            <View style={styles.detailsContainer}>
              <HeadingS style={styles.title}>{props.plateNumber}</HeadingS>
              <Body style={styles.text}>
                {props.make} {props.model}
              </Body>

              {props.route && (
                <View style={styles.routeContainer}>
                  <FontAwesome5
                    name="route"
                    size={20}
                    color={Color.primary}
                  />
                  <Body style={styles.routeText}>{props.route}</Body>
                </View>
              )}

              {!props.route && isOwner && (
                <View style={styles.routeContainer}>
                  <FontAwesome5
                    name="route"
                    size={20}
                    color={Color.primary}
                  />
                  <Body style={styles.routeText}>Not on road</Body>
                </View>
              )}

              {!props.route && !isOwner && (
                <TouchableOpacity
                  onPress={handleRegisterRoute}
                  activeOpacity={0.95}
                  style={styles.createRouteBtn}
                >
                  <Body style={styles.routeTextBtn}>start route</Body>
                </TouchableOpacity>
              )}

              {props.breakdown && props.breakdown.length !== 0 && (
                <View style={styles.breakdownContainer}>
                  <Feather
                    name="alert-triangle"
                    size={24}
                    color={Color.warning}
                  />

                  <Body style={styles.reportText}>
                    Breakdown:{" "}
                    {getReadableIssues({
                      engineFailure:
                        props.breakdown[0]?.engineFailure ?? false,
                      flatTyre: props.breakdown[0]?.flatTyre ?? false,
                      deadBattery:
                        props.breakdown[0]?.deadBattery ?? false,
                      overHeating:
                        props.breakdown[0]?.overHeating ?? false,
                      fuelSystemIssue:
                        props.breakdown[0]?.fuelSystemIssue ?? false,
                      brakingSystemMalfunction:
                        props.breakdown[0]?.brakingSystemMalfunction ??
                        false,
                      electricalSystemFailure:
                        props.breakdown[0]?.electricalSystemFailure ??
                        false,
                    })}
                  </Body>
                </View>
              )}
            </View>
          </View>

          {props.breakdown && props.breakdown.length === 0 && (
            <Octicons name="dot-fill" size={16} color={Color.primary} />
          )}
        </Card>
      </TouchableOpacity>

      <Modal visible={visible} animationType="fade">
        <VehicleDetails />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 50,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    // fontSize: 16,
    marginBottom: 5,
  },
  detailsContainer: {
    marginLeft: 15,
  },
  routeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  routeText: {
    marginLeft: 10,
    color: Color.dimblack,
    fontWeight: "bold",
    width: "75%",
  },
  iconContainer: {
    backgroundColor: Color.lightgray,
    width: 60,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsWrapper: {
    flexDirection: "row",
  },
  createRouteBtn: {
    backgroundColor: Color.lightgray,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 8,
  },
  routeTextBtn: {
    marginLeft: 10,
    color: Color.primary,
    fontWeight: "bold",
  },
  reportText: {
    color: Color.dimblack,
    fontWeight: "bold",
    width: "80%",
    marginLeft: 10,
  },
  breakdownContainer: {
    flexDirection: "row",
    marginTop: 10,
    // justifyContent: "space-between",
  },
});
