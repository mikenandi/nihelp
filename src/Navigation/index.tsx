import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../Layouts/Screen";
import AppTabs from "./AppTabs";
import SignIn from "../Features/Auth/SignIn";
import SignUp from "../Features/Auth/SignUp";
import RecoverPassword from "../Features/Auth/RecoverPassword";
import Welcome from "../Features/Auth/Welcome";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import {
  isConnectedReducer,
  logInReducer,
} from "../Redux/Features/Auth/AuthSlice";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import SignInDriver from "../Features/Auth/SignInDriver";
import { updateProfile } from "../Api/Services/Backend/Profile";
import { RootState } from "../Redux";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../Components/Color";
import NetInfo from "@react-native-community/netinfo";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    poppins: require("../../assets/fonts/barlow-condensed/BarlowCondensed-Medium.ttf"),
  });

  const { isLogedOut, authToken, isConnected } = useSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  // Call the function to register for push notifications
  // React.useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  // Check auth
  React.useEffect(() => {
    (async () => {
      try {
        let savedToken = await SecureStore.getItemAsync("authToken");

        let connectionState = await NetInfo.fetch();

        if (connectionState.isConnected) {
          dispatch(isConnectedReducer());
        }

        if (!!savedToken) {
          dispatch(
            logInReducer({
              authToken: savedToken,
            })
          );

          setIsLoading(false);

          return;
        }

        setIsLoading(false);

        return;
      } catch (error) {
        return;
      }
    })();

    return () => {
      // setIsLoading(false);
    };
  }, []);

  if (isLoading || !fontsLoaded) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Welcome">
      {isLogedOut ? (
        <>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignInDriver"
            component={SignInDriver}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="VeficationCode"
            component={Screen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RecoverPassword"
            component={RecoverPassword}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Auth;
