import { createSlice } from '@reduxjs/toolkit';
import { addColor, createProject, renameProject } from '../colorPalettes/colorPaletteSlice';

const initialState = {
    showAddProjectModal: false,
    showAddColorModal: false,
    showUpdateProjectModal: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        showAddProjectModal: (state) => {
            state.showAddProjectModal = true;
        },
        showAddColorModal: (state) => {
            state.showAddColorModal = true;
        },
        showUpdateProjectModal: (state) => {
            state.showUpdateProjectModal = true;
        },
        closeModal: (state) => {
            state.showAddColorModal = false;
            state.showAddProjectModal = false;
            state.showUpdateProjectModal = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createProject, (state, action) => {
            state.showAddProjectModal = action && action.payload.success ? false : true;
        });

        builder.addCase(renameProject, (state, action) => {
            state.showUpdateProjectModal = action && action.payload.success ? false : true;
        });

        builder.addCase(addColor, (state, action) => {
            state.showAddColorModal = action && action.payload.success ? false : true;
        })
    }
});

export const modalReducer = modalSlice.reducer;

export const {showAddProjectModal, showAddColorModal, showUpdateProjectModal, closeModal} = modalSlice.actions; 