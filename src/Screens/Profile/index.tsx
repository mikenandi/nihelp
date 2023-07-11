import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import Screen from "../../Layouts/Screen";
import { useDispatch, useSelector } from "react-redux";
import { Body, HeadingS } from "../../Components/Typography";
import {
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  FontAwesome,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import Color from "../../Components/Color";
import { ProfileDetail } from "./ProfileDetail";
import Topbar from "../../Layouts/Topbar";
import { RootState } from "../../Redux";
import { LogoutModal } from "../../Features/Logout";
import { logoutVisibleReducer } from "../../Redux/Features/Logout/LogoutModalSlice";
import { EditProfile } from "./EditProfile";
import {
  privacyProfileVisibleReducer,
  updateProfileVisibleReducer,
} from "../../Redux/Features/Profile/ProfileModal";
import { Privacy } from "./Privacy";
import * as Linking from "expo-linking";
import { Text } from "react-native-paper";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = (props) => {
  const dispatch = useDispatch();

  const updateVisible: boolean = useSelector((state: RootState) => {
    return state.profileModal.updateProfileVisible;
  });

  const privacyVisible: boolean = useSelector((state: RootState) => {
    return state.profileModal.privacyProfileVisible;
  });

  const {
    name,
    email,
    plateNumber,
    phoneNumber,
    isOwner,
    licenseNo,
    vehicles,
  } = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleEdit = (): void => {
    dispatch(updateProfileVisibleReducer());
  };

  const handlePrivacy = (): void => {
    dispatch(privacyProfileVisibleReducer());
  };

  const visible: boolean = useSelector((state: RootState) => {
    return state.logout.logoutVisible;
  });

  const handlePrivacyPolicy = () => {
    Linking.openURL("https://nihelp.onrender.com");
  };

  const handleTermsOfService = () => {
    Linking.openURL("https://nihelp.onrender.com/terms.html");
  };

  const handleLogout = async () => {
    dispatch(logoutVisibleReducer());

    return;
  };

  return (
    <>
      <Screen>
        <Topbar title="Profile" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Plate number */}

          <View style={styles.container}>
            <View style={styles.plateNumberContainer}>
              <View style={styles.carAvatar}>
                <Ionicons name="person" size={60} color={Color.grey} />
              </View>
              <View style={styles.plate}>
                <Text variant="titleLarge">
                  {isOwner ? "Owner Account" : "Driver Account"}
                </Text>

                <TouchableOpacity activeOpacity={0.9} onPress={handleEdit}>
                  <Text variant="bodyLarge" style={styles.editText}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.abInfo}>
                <MaterialCommunityIcons
                  name="car-info"
                  size={24}
                  color={Color.dimblack}
                />
              </View>
            </View>

            <ProfileDetail
              label={isOwner ? "Owner" : "Driver"}
              value={name}
            >
              <Octicons
                name="organization"
                size={24}
                color={Color.primary}
              />
            </ProfileDetail>

            <ProfileDetail label="Email" value={email}>
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color={Color.primary}
              />
            </ProfileDetail>

            <ProfileDetail label="Mobile" value={phoneNumber}>
              <MaterialCommunityIcons
                name="phone-outline"
                size={30}
                color={Color.primary}
              />
            </ProfileDetail>

            {isOwner && (
              <ProfileDetail
                label="Vehicles"
                value={`total of ${vehicles.toString()}`}
              >
                <MaterialCommunityIcons
                  name="truck-fast-outline"
                  size={28}
                  color={Color.primary}
                />
              </ProfileDetail>
            )}

            {!isOwner && (
              <ProfileDetail label="License" value={licenseNo}>
                <FontAwesome
                  name="drivers-license-o"
                  size={24}
                  color={Color.primary}
                />
              </ProfileDetail>
            )}

            <TouchableOpacity activeOpacity={0.85} onPress={handlePrivacy}>
              <ProfileDetail label="Privacy" value="Password & account">
                <Feather name="settings" size={24} color={Color.primary} />
              </ProfileDetail>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} activeOpacity={0.9}>
              <View style={styles.logoutContainer}>
                {/* <Entypo name="log-out" size={24} color={Color.error} /> */}
                <FontAwesome
                  name="power-off"
                  size={24}
                  color={Color.error}
                />
                <Body style={styles.logoutText}>Log out</Body>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.conditionsContainer}>
          <Text
            variant="labelMedium"
            style={styles.conditionText}
            onPress={handlePrivacyPolicy}
          >
            Privacy policy{" "}
          </Text>

          <Entypo name="dot-single" size={12} color={Color.dimblack} />

          <Text
            variant="labelMedium"
            style={styles.conditionText}
            onPress={handleTermsOfService}
          >
            Terms of service{" "}
          </Text>
        </View>
      </Screen>

      <Modal visible={visible} animationType="fade" transparent>
        <LogoutModal />
      </Modal>

      <Modal visible={updateVisible} animationType="fade">
        <EditProfile />
      </Modal>

      <Modal visible={privacyVisible} animationType="fade">
        <Privacy />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    paddingTop: 20,
  },
  container: {
    // flex: 1,
  },
  carAvatar: {
    backgroundColor: Color.lightgray,
    width: 100,
    aspectRatio: 10 / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  plateNumberContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: Color.lightgray,
    paddingBottom: 20,
    borderRadius: 10,
  },
  plate: {
    padding: 8,
    paddingHorizontal: 10,
    marginLeft: 15,
    borderRadius: 2,
  },
  abInfo: {
    width: 40,
    aspectRatio: 10 / 10,
    backgroundColor: Color.liteprimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    right: 20,
    bottom: -20,
  },
  logoutContainer: {
    paddingHorizontal: 30,
    borderTopWidth: 6,
    borderTopColor: Color.lightgray,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  logoutText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  editText: {
    color: Color.primary,
    fontWeight: "bold",
  },
  conditionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 15,
    alignItems: "center",
  },
  conditionText: {
    color: Color.dimblack,
  },
});

export default Profile;
