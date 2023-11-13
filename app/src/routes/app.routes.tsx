import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { TabRoutes } from './tabs.routes';
import { EditFormTrips } from '../screens/EditFormTrips';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />

      <Screen name="register" component={Register} />

      <Screen name="user" component={TabRoutes} />

      <Screen name="edit-trips" component={EditFormTrips} />
    </Navigator>
  );
}
