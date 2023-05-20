import { errorMsgs } from "../../utils/strings";

export function isValidProjectTitle(state, projectTitle) {
    if (projectTitle === '') {
        state.errMsg = errorMsgs.emptyProjectTitle;
        return false;
    }
    if (state.palettes.filter(palette => palette.projectTitle === projectTitle).length > 0) {
        state.errMsg = errorMsgs.duplicateProjectTitle;
        return false;
    }
    return true;
}

export function isValidColorCode(state, colorCode) {
    if (!colorCode) {
        state.errMsg = errorMsgs.emptycolorCode;
        return false;
    }
    if (colorCode[0] !== '#' || colorCode.length !== 7) {
        state.errMsg = errorMsgs.invalidColorCode;
        return false;
    }
    return true;
}