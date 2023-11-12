import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { OngoingTrips } from '../screens/OngoingTrips';
import { TravelRegistration } from '../screens/TravelRegistration';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="profile"
        component={OngoingTrips}
        options={{
          tabBarIcon: ({ size }) => <Feather name="home" size={size} />,
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="travel-registration"
        component={TravelRegistration}
        options={{
          tabBarIcon: ({ size }) => <Feather name="plus" size={size} />,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}
