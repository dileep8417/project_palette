import { colorPaletteReducer } from "../features/colorPalettes/colorPaletteSlice";
import { modalReducer } from "../features/modals/modalSlice";

export const rootReducer = {
    colorPalette: colorPaletteReducer,
    modal: modalReducer
}