import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../Components/Inputs";
import { ButtonL } from "../../Components/Buttons";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { RootState } from "../../Redux";
import Loader from "../../Components/Loader";
import { HeadingS } from "../../Components/Typography";
import { FontAwesome5 } from "@expo/vector-icons";
import Color from "../../Components/Color";
import { createRouteVisibleReducer } from "../../Redux/Features/Route/RouteModal";
import { RadioButton } from "react-native-paper";
import { viaRoadShortNames } from "../../Helpers/RouteGenerator";
import {
  startReducer,
  viaRoadReducer,
} from "../../Redux/Features/Route/RouteSlice";
import { destinationReducer } from "../../Redux/Features/Location/locationSlice";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import {
  getRoutes,
  updateRoute,
} from "../../Api/Services/Backend/Route";

export const RegisterRoute: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const [selectedValue, setSelectedValue] =
    React.useState("");

  const [routes, setRoutes] = React.useState(
    viaRoadShortNames
  );

  const handleBack = (): void => {
    dispatch(createRouteVisibleReducer());
  };

  const { start, destination, viaRoad } = useSelector(
    (state: RootState) => {
      return state.route;
    }
  );

  const authToken: string = useSelector(
    (state: RootState) => {
      return state.auth.authToken;
    }
  );

  const handleStart = (start: string): void => {
    dispatch(startReducer(start));
  };

  const handleDestination = (destination: string): void => {
    dispatch(destinationReducer(destination));
  };

  const handleRegister = async (): Promise<void> => {
    if (!viaRoad) {
      dispatch(errorMsg("Select your route"));

      return;
    }
    setIsLoading(true);

    let routes = await getRoutes(authToken);

    let routeId = routes[0].id;

    await updateRoute({ viaRoad }, routeId, authToken);

    setIsLoading(false);

    handleBack();

    return;
  };

  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      <ModalNavBack
        title="What is your route?"
        handleBack={handleBack}
      />

      <ScrollView contentContainerStyle={styles.container}>
        {/* <InputText
          label="Start"
          value={start}
          onChangeText={handleStart}
        /> */}

        {/* <InputText
          label="Destination"
          value={destination}
          onChangeText={handleDestination}
        /> */}

        <View style={styles.routeContainer}>
          <FontAwesome5
            name="road"
            size={24}
            color={Color.primary}
          />
          <HeadingS style={styles.titleText}>
            via road
          </HeadingS>
        </View>

        {/* <Body style={styles.routeDesc}>Dar Moro Iringa Mby</Body> */}
        <View style={styles.inputContainer}>
          <RadioButton.Group
            onValueChange={(value: string) =>
              dispatch(viaRoadReducer(value))
            }
            value={viaRoad}
          >
            {routes.map((road: string, index: number) => (
              <RadioButton.Item
                label={road}
                value={road}
                color={Color.primary}
                key={index}
              />
            ))}
          </RadioButton.Group>
        </View>

        <ButtonL
          action="Register"
          onPress={handleRegister}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  registerText: {
    marginLeft: 10,
  },
  container: {
    alignItems: "center",
    paddingBottom: 40,
  },
  routeContainer: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: Color.lightgray,
    width: "80%",
    padding: 10,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  routeDesc: {
    fontWeight: "bold",
  },
  titleText: {
    marginLeft: 10,
  },
  inputContainer: {
    width: "80%",
  },
});
