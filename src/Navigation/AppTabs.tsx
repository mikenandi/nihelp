import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Color from "../Components/Color";
import Maps from "../Screens/Maps";

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveTintColor: Color.grey,
          tabBarActiveTintColor: Color.primary,
          headerShown: false,
          tabBarActiveBackgroundColor: Color.white,
          tabBarInactiveBackgroundColor: Color.white,
          tabBarStyle: {
            paddingBottom: 4,
            paddingTop: 4,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            // color: Color.black,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            title: "",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <AntDesign name="appstore1" size={size} color={color} />
              ) : (
                <AntDesign name="appstore-o" size={size} color={color} />
              ),
          }}
        />

        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{
            tabBarLabel: "Maps",
            title: "",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <FontAwesome5
                  name="map-marked-alt"
                  size={size}
                  color={color}
                />
              ) : (
                <FontAwesome5 name="map" size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "",
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size, focused }) =>
              focused ? (
                <Ionicons name="person" size={size} color={color} />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={size}
                  color={color}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default React.memo(AppTabs);
