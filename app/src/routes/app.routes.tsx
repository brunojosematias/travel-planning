import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FormLogin } from "../screens/FormLogin";
import { FormRegister } from "../screens/FormRegister";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouters() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={FormLogin} />

      <Screen name="register" component={FormRegister} />
    </Navigator>
  );
}
