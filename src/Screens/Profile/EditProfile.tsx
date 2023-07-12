import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux";
import { inputAuthReducer } from "../../Redux/Features/Auth/AuthSlice";
import { InputText } from "../../Components/Inputs";
import { updateProfile } from "../../Api/Services/Backend/Profile";
import { updateProfileVisibleReducer } from "../../Redux/Features/Profile/ProfileModal";
import { Button } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";

const EditProfile: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const {
    name,
    email,
    phoneNumber,
    isOwner,
    licenseNo,
    authToken,
  } = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleBack = (): void => {
    dispatch(updateProfileVisibleReducer());
  };

  const handleChange = (
    name: string,
    value: string
  ): void => {
    dispatch(inputAuthReducer({ name, value }));
  };

  const handleEdit = async (): Promise<void> => {
    setIsLoading(true);
    let response = await updateProfile(
      {
        name,
        email,
        phoneNumber,
        licenseNo,
      },
      authToken
    );

    setIsLoading(false);

    handleBack();
  };

  return (
    <>
      <ModalScreen>
        <ModalNavBack
          title="Edit profile"
          handleBack={handleBack}
        />

        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <InputText
            label="name"
            value={name}
            onChangeText={(value) => {
              handleChange("name", value);
            }}
          />

          {!isOwner && (
            <InputText
              label="license"
              value={licenseNo}
              onChangeText={(value) => {
                handleChange("lecenseNo", value);
              }}
            />
          )}

          <InputText
            label="phone"
            value={phoneNumber}
            onChangeText={(value) => {
              handleChange("phoneNumber", value);
            }}
          />

          <InputText
            label="email"
            value={email}
            onChangeText={(value) => {
              handleChange("email", value);
            }}
          />

          <Button
            icon={() => (
              <Feather
                name="arrow-right"
                size={20}
                color="white"
              />
            )}
            buttonColor={Color.primary}
            mode="contained"
            onPress={handleEdit}
            style={styles.buttonStyle}
            contentStyle={styles.buttonContent}
            loading={isLoading}
          >
            Save profile
          </Button>
        </ScrollView>
      </ModalScreen>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  buttonStyle: {
    width: "80%",
    marginTop: 10,
  },
  buttonContent: {
    flexDirection: "row-reverse",
  },
});

export { EditProfile };
