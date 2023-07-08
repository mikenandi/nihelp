import { axios } from "./Axios";

interface IPost {
  engineFailure: boolean;
  flatTyre: boolean;
  deadBattery: boolean;
  overHeating: boolean;
  fuelSystemIssue: boolean;
  brakingSystemMalfunction: boolean;
  electricalSystemFailure: boolean;
  latitude: number | undefined;
  longitude: number | undefined;
}

export const postBreakdown = async (
  inputs: IPost,
  routeId: number,
  authToken: string
) => {
  try {
    let response = await axios({
      method: "POST",
      url: `/breakdown/${routeId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        ...inputs,
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getBreakdowns = async (
  routeId: number,
  authToken: string
) => {
  try {
    let response = await axios({
      method: "GET",
      url: `/breakdown/breakdowns/${routeId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getRouteBreakdowns = async (
  viaRoad: string,
  authToken: string
) => {
  try {
    let response = await axios({
      method: "GET",
      url: `/breakdown/query`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        viaRoad,
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getOwnerBreakdowns = async (authToken: string) => {
  try {
    let response = await axios({
      method: "GET",
      url: `/breakdown/owner_breakdowns`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const patchBreakdown = async (
  authToken: string,
  breakdownId: string,
  isRepaired: boolean
) => {
  try {
    let response = await axios({
      method: "PATCH",
      url: `/breakdown/${breakdownId}`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      data: {
        isRepaired,
      },
    });

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
