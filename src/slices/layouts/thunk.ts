import {
  changeLayoutModeAction,
  changeLayoutThemeModeAction,
} from "slices/layouts/reducer";
import { changeHTMLAttribute } from "slices/layouts/utils";

//footer mood
export const changeLayoutMood = (footerMode: any) => async (dispatch: any) => {
  try {
    changeHTMLAttribute("data-footer", footerMode);
    dispatch(changeLayoutModeAction(footerMode));
  } catch (error) {
    /* empty */
  }
};
//them mood
export const changeThemeMood = (themeMode: any) => async (dispatch: any) => {
  try {
    changeHTMLAttribute("data-bs-theme", themeMode);
    dispatch(changeLayoutThemeModeAction(themeMode));
  } catch (error) {
    /* empty */
  }
};
