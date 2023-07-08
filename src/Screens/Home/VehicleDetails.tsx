import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import Color from "../../Components/Color";
import { HeadingS } from "../../Components/Typography";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import {
  editVehicleVisibleReducer,
  vehicleDetailsVisibleReducer,
} from "../../Redux/Features/Vehicle/VehicleModalSlice";
import {
  VehicleState,
  clearVehicleReducer,
} from "../../Redux/Features/Vehicle/VehicleSlice";
import { RootState } from "../../Redux";
import { deleteVehicle } from "../../Api/Services/Backend/Vehicle";
import { infoMsg } from "../../Redux/Components/ErrorMsgSlice";
import { EditVehicle } from "./EditVehicle";
import { Button } from "react-native-paper";

const VehicleDetails: React.FC = () => {
  const dispatch = useDispatch();

  const visible: boolean = useSelector((state: RootState) => {
    return state.vehicleModal.editVehicleVisible;
  });

  const {
    id,
    make,
    model,
    modelYear,
    bodyType,
    fuelType,
    chassisNumber,
    plateNumber,
    engineType,
    createdAt,
    updatedAt,
  }: VehicleState = useSelector((state: RootState) => {
    return state.vehicle;
  });

  const authToken: string = useSelector((state: RootState) => {
    return state.auth.authToken;
  });

  const isOwner: boolean = useSelector((state: RootState) => {
    return state.auth.isOwner;
  });

  const handleEdit = (): void => {
    dispatch(editVehicleVisibleReducer());
  };

  const handleBack = (): void => {
    dispatch(clearVehicleReducer());

    dispatch(vehicleDetailsVisibleReducer());
  };

  const handleDelete = async (): Promise<void> => {
    let response = await deleteVehicle(authToken, id);

    handleBack();

    dispatch(infoMsg("successfully deleted"));
  };

  return (
    <>
      <ModalNavBack title="Vehicle Details" handleBack={handleBack} />

      <ScrollView contentContainerStyle={styles.wrapperContainer}>
        <View style={styles.container}>
          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <Fontisto name="truck" size={30} color={Color.primary} />
            </View>
            <HeadingS style={styles.title}>
              Plate no: {plateNumber}
            </HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="robot-industrial"
                size={30}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>Make: {make}</HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="merge-type"
                size={35}
                color={Color.primary}
              />
            </View>

            <HeadingS style={styles.title}>Model: {model}</HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="business-time"
                size={24}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>
              Model Year: {modelYear}
            </HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="truck-loading"
                size={24}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>
              Chasis: {chassisNumber}
            </HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="fuel"
                size={35}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>Fuel: {fuelType}</HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="engine"
                size={30}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>
              Engine Type: {engineType}
            </HeadingS>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="truck"
                size={30}
                color={Color.primary}
              />
            </View>
            <HeadingS style={styles.title}>Body Type: {bodyType}</HeadingS>
          </View>

          {/* <View style={styles.routeContainer}>
						<FontAwesome5 name="route" size={28} color={Color.primary} />
						<HeadingS style={styles.routeText}>From Dar To iringa</HeadingS>
					</View> */}
        </View>
      </ScrollView>

      {isOwner && (
        <View style={styles.bottomContainer}>
          <Button
            mode="elevated"
            icon="pen"
            textColor={Color.primary}
            onPress={handleEdit}
          >
            Edit
          </Button>

          <Button
            mode="elevated"
            icon="delete"
            textColor={Color.error}
            onPress={handleDelete}
          >
            Delete
          </Button>
        </View>
      )}

      <Modal visible={visible} animationType="fade">
        <EditVehicle />
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
    // elevation: 5,
    width: "96%",
    // flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 15,
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
    marginTop: 25,
    padding: 15,
    backgroundColor: Color.lightgray,
    borderRadius: 25,
    borderTopLeftRadius: 2,
    // borderTopRightRadius: 2,
  },
  routeText: {
    marginLeft: 10,
    color: Color.dimblack,
    fontWeight: "bold",
  },
  iconContainer: {
    backgroundColor: Color.lightgray,
    width: 60,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  wrapperContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginBottom: 25,
    width: "90%",
    justifyContent: "space-between",
  },
  editContainer: {
    backgroundColor: Color.lightblue,
    padding: 10,
    borderRadius: 10,
    marginRight: 25,
  },
  deleteContainer: {
    backgroundColor: Color.lightred,
    padding: 10,
    borderRadius: 10,
  },
});

export { VehicleDetails };
