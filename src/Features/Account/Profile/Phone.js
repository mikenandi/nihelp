import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editPhoneVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditPhone } from "../EditProfile/EditPhone";
import { formatPhoneNumber } from "../../../Helpers/StringFormater";

function Phone(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.editProfileModal.editPhoneVisible;
    });

    const phone = useSelector((state) => {
        return state.profileDetail.phone;
    });

    const countryCode = useSelector((state) => {
        return state.profileDetail.countryCode;
    });

    const handleEdit = () => {
        dispatch(editPhoneVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail
                label="Phone"
                detail={`${countryCode} ${formatPhoneNumber(phone)}`}
                onEdit={handleEdit}
            >
                <Ionicons
                    name="ios-call-outline"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} transparent={false} animationType="fade">
                <EditPhone />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Phone };
