import * as Font from "expo-font";

import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";

export function loadFonts() {
  return Font.loadAsync({
    MontserratRegular,
    MontserratMedium,
    MontserratBold,
    MontserratSemiBold,
  });
}

export const FONT_FAMILIES = Object.freeze({
  regular: "MontserratRegular",
  medium: "MontserratMedium",
  semi: "MontserratSemiBold",
  bold: "MontserratBold",
});
