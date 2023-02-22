import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo, FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Color from "../Components/Color";

const Tab = createBottomTabNavigator();

function AppTabs() {
	return (
		<>
			<Tab.Navigator
				initialRouteName='Home'
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
				}}>
				<Tab.Screen
					name='Home'
					component={Home}
					options={{
						tabBarLabel: "",
						title: "",
						tabBarIcon: ({color, size}) => (
							<FontAwesome5 name='map-marked-alt' size={size} color={color} />
						),
					}}
				/>

				<Tab.Screen
					name='Profile'
					component={Profile}
					options={{
						title: "",
						tabBarLabel: "",
						tabBarIcon: ({color, size}) => (
							<FontAwesome5 name='car' size={size} color={color} />
						),
					}}
				/>
			</Tab.Navigator>
		</>
	);
}

export default React.memo(AppTabs);
