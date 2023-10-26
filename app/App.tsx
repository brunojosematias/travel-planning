import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";
import { Main } from "./src/Main";
// import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Inter-200": require("./src/assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-400": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-800": require("./src/assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}
