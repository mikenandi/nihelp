import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../../Layouts/Screen";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import Topbar from "../../Layouts/Topbar";
import { RootState } from "../../Redux";
import {
  getOwnerBreakdowns,
  getRouteBreakdowns,
} from "../../Api/Services/Backend/Breakdown";
import { getRoutes } from "../../Api/Services/Backend/Route";

const Maps: React.FC = (props) => {
  const dispatch = useDispatch();

  const { authToken, isOwner } = useSelector((state: RootState) => {
    return state.auth;
  });

  const routeFetch = async () => {
    let response = await getRoutes(authToken);

    return response;
  };

  const [breakdowns, setBreakdowns] = React.useState([]);

  const breakdownsFetch = async (): Promise<void> => {
    try {
      if (isOwner) {
        let breakdowns = await getOwnerBreakdowns(authToken);

        setBreakdowns(breakdowns);
        return;
      }

      let routes = await routeFetch();

      if (routes[0].viaRoad === null) return;

      let routeId: number = routes[0].id;

      let breakdowns = await getRouteBreakdowns(
        routes[0].viaRoad,
        authToken
      );

      setBreakdowns(breakdowns);

      return;
    } catch (error) {
      console.log(error);

      return;
    }
  };

  React.useEffect(() => {
    breakdownsFetch();
  }, []);

  return (
    <>
      <Screen>
        <Topbar title="Maps" />

        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -6.823,
            longitude: 39.26,
            latitudeDelta: 2,
            longitudeDelta: 2,
          }}
        >
          {breakdowns.map((item: any) => (
            <Marker
              key={item.breakdown.id}
              coordinate={{
                latitude: Number(item.breakdown.latitude),
                longitude: Number(item.breakdown.longitude),
              }}
              title={item.vehicle.plateNumber}
            />
          ))}
        </MapView>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
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

export default Maps;
