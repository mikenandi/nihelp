import React, { useEffect } from "react";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import Color from "../../Components/Color";
import { Card } from "../../Components/Card";
import {
  Body,
  HeadingS,
} from "../../Components/Typography";
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
import { Text, Button, Switch } from "react-native-paper";
import { patchBreakdown } from "../../Api/Services/Backend/Breakdown";

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

  const visible: boolean = useSelector(
    (state: RootState) => {
      return state.vehicleModal.vehicleDetailsVisible;
    }
  );

  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const [issues, setIssues] = React.useState("");

  const { authToken, isOwner }: IAuth = useSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  useEffect(() => {
    if (
      props.breakdown &&
      props.breakdown &&
      props.breakdown[0] !== undefined
    ) {
      setIsSwitchOn(!props.breakdown[0].isRepaired);
    }
  }, []);

  const onToggleSwitch = async () => {
    if (
      props.breakdown &&
      props.breakdown[0] &&
      props.breakdown[0].id !== undefined
    ) {
      let response = await patchBreakdown(
        authToken,
        props.breakdown[0].id,
        isSwitchOn
      );

      console.log(response);

      setIsSwitchOn(!response.isRepaired);
    }
  };

  const handleRegisterRoute = (): void => {
    dispatch(createRouteVisibleReducer());
  };

  const handleVehicleDetails = async (): Promise<void> => {
    let response: VehicleState = await getVehicle(
      authToken,
      props.id
    );

    dispatch(saveVehicleReducer({ ...response }));

    dispatch(vehicleDetailsVisibleReducer());
  };

  return (
    <>
      <Card style={styles.container}>
        <View style={styles.vehicleDetailsContainer}>
          <View style={styles.vehicleRow}>
            <TouchableOpacity
              onPress={handleVehicleDetails}
              activeOpacity={0.9}
            >
              <Card style={styles.iconContainer}>
                <Fontisto
                  name="truck"
                  size={24}
                  color={Color.primary}
                />
              </Card>
            </TouchableOpacity>

            <View>
              <Text
                variant="titleLarge"
                style={styles.title}
              >
                {props.plateNumber}
              </Text>
              <Text variant="bodySmall" style={styles.text}>
                {props.make} {props.model}
              </Text>
            </View>
          </View>

          <View>
            {props.route && (
              <View style={styles.routeContainer}>
                <MaterialCommunityIcons
                  name="earth-arrow-right"
                  size={18}
                  color="white"
                />
                <Text
                  variant="bodyMedium"
                  numberOfLines={1}
                >
                  {props.route.substring(0, 12) + "..."}
                </Text>
              </View>
            )}
          </View>
        </View>

        {!props.route && !isOwner && (
          <Button
            icon={() => (
              <Fontisto
                name="arrow-right"
                size={14}
                color={Color.warning}
              />
            )}
            mode="elevated"
            onPress={handleRegisterRoute}
            textColor={Color.primary}
            contentStyle={styles.paperButton}
          >
            Start route
          </Button>
        )}

        <View style={styles.detailsWrapper}>
          <View style={styles.detailsContainer}>
            {!props.route && isOwner && (
              <View style={styles.routeContainer}>
                <FontAwesome5
                  name="route"
                  size={14}
                  color={Color.primary}
                />
                <Text
                  variant="bodyMedium"
                  style={styles.routeText}
                >
                  Not on road
                </Text>
              </View>
            )}
          </View>
        </View>

        {props.breakdown &&
          props.breakdown.length !== 0 && (
            <View style={styles.breakdownContainer}>
              <View style={styles.breakdownTextContainer}>
                <Text
                  variant="bodyMedium"
                  style={styles.reportText}
                >
                  Breakdown
                </Text>
                <Text
                  variant="bodyLarge"
                  style={styles.breakdownDescriptionText}
                >
                  {getReadableIssues({
                    engineFailure:
                      props.breakdown[0]?.engineFailure ??
                      false,
                    flatTyre:
                      props.breakdown[0]?.flatTyre ?? false,
                    deadBattery:
                      props.breakdown[0]?.deadBattery ??
                      false,
                    overHeating:
                      props.breakdown[0]?.overHeating ??
                      false,
                    fuelSystemIssue:
                      props.breakdown[0]?.fuelSystemIssue ??
                      false,
                    brakingSystemMalfunction:
                      props.breakdown[0]
                        ?.brakingSystemMalfunction ?? false,
                    electricalSystemFailure:
                      props.breakdown[0]
                        ?.electricalSystemFailure ?? false,
                  })}
                </Text>
              </View>

              {!isOwner && (
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color={Color.warning}
                />
              )}
            </View>
          )}
      </Card>

      <Modal visible={visible} animationType="fade">
        <VehicleDetails />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    // flexDirection: "row",
    justifyContent: "space-between",
    // paddingRight: 50,
    backgroundColor: "#C2DEDC",
  },
  title: {
    fontWeight: "bold",
    // marginBottom: 10,
  },
  text: {
    // fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  detailsContainer: {
    marginLeft: 10,
  },
  routeContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  routeText: {
    marginLeft: 10,
    color: Color.dimblack,
    fontWeight: "bold",
    width: "75%",
  },
  iconContainer: {
    backgroundColor: Color.white,
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
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
    fontWeight: "500",
    // width: "80%",
    marginLeft: 10,
  },
  breakdownContainer: {
    flexDirection: "row",
    marginTop: 6,
    justifyContent: "space-between",
  },
  paperButton: {
    flexDirection: "row-reverse",
  },
  vehicleDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.liteprimary,
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },
  vehicleRow: {
    flexDirection: "row",
  },
  breakdownDescriptionText: {
    color: Color.black,
    fontWeight: "500",
    marginLeft: 10,
  },
  breakdownTextContainer: {
    width: "80%",
  },
});
