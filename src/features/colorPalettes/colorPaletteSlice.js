import { createSlice } from "@reduxjs/toolkit"
import { closeModal, showAddColorModal, showUpdateProjectModal } from "../modals/modalSlice";
import { getInitialProjects, getUUID, sanitizeProjectTitle } from "../../utils/helpers";
import { isValidProjectTitle, isValidColorCode } from "./helpers";

const initialState = {
    palettes: getInitialProjects(),
    selectedPalette: '',
    selectedColor: '',
    errMsg: '',
    showColorCopiedMsg: false
}

const colorPaletteSlice = createSlice({
    name: 'colorPalette',
    initialState: initialState,
    reducers: {
        createProject: (state, action) => {
            const projectTitle = sanitizeProjectTitle(action.payload.fieldValue);
            if (!isValidProjectTitle(state, projectTitle)) {
                return;
            }
            state.errMsg = '';
            action.payload.success = true;
            state.palettes.push({
                id: getUUID('palette'),
                projectTitle: projectTitle, 
                colors: []
            });
        },
        addColor: (state, action) => {
            let color = action.payload.fieldValue;
            if (!isValidColorCode(state, color)) {
                return;
            }
            state.errMsg = '';
            state.palettes.map(palette => {
                if (palette.projectTitle === state.selectedPalette) {
                    palette.colors.push(color);
                    return palette;
                }
                return palette;
            });
            action.payload.success = true;
        },
        deleteProject: (state, action) => {
            const projectId = action.payload;
            state.palettes = state.palettes.filter(palette => palette.id !== projectId);
        },
        renameProject: (state, action) => {
            const updatedProjectTitle = sanitizeProjectTitle(action.payload.fieldValue);
            if (!isValidProjectTitle(state, updatedProjectTitle)) {
                return;
            }
            state.errMsg = '';
            action.payload.success = true;
            state.palettes.map(palette => {
                if (palette.projectTitle === state.selectedPalette) {
                    palette.projectTitle = updatedProjectTitle;
                    return palette;
                }
                return palette;
            });
        },
        colorCopied: (state, action) => {
            state.showColorCopiedMsg = true;
            state.selectedColor = action.payload;
        },
        hideColorCopyMsg: (state) => {
            state.showColorCopiedMsg = false;
            state.selectedColor = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(closeModal, (state) => {
            state.errMsg = '';
            state.selectedPalette = '';
        });

        builder.addCase(showAddColorModal, (state, action) => {
            state.selectedPalette = action.payload;
        });

        builder.addCase(showUpdateProjectModal, (state, action) => {
            state.selectedPalette = action.payload;
        });
    }
});

export const colorPaletteReducer = colorPaletteSlice.reducer;
export const {createProject, deleteProject, renameProject, addColor, colorCopied, hideColorCopyMsg} = colorPaletteSlice.actions;