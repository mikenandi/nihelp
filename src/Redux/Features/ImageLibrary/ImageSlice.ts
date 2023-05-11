import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    savedIds: [],
    selectedImages: [],
};

export const imageSlice = createSlice({
    name: "IMAGES_LIBRARY",
    initialState,
    reducers: {
        saveFromLibrary: (state, actions) => {
            state.photos = actions.payload;
        },
        saveSelectedIds: (state, actions) => {
            let selectedId = actions.payload;
            state.savedIds.push(selectedId);

            let selectedImg = state.photos.filter(
                (photo) => photo.id === selectedId
            );

            state.selectedImages.push(selectedImg[0]);
        },
        removeSelectedId: (state, actions) => {
            let selectedId = actions.payload;

            state.savedIds = state.savedIds.filter(
                (savedId) => savedId !== selectedId
            );

            state.selectedImages.filter(
                (selectedImg) => selectedImg.id !== selectedId
            );
        },
        clearPhotos: (state, actions) => {
            Object.assign(state, initialState);
        },
        clearSelectedImages: (state, actions) => {
            state.savedIds = [];
            state.selectedImages = [];
        },
    },
});

export const {
    saveFromLibrary,
    saveSelectedIds,
    removeSelectedId,
    clearPhotos,
    clearSelectedImages,
} = imageSlice.actions;

export default imageSlice.reducer;
