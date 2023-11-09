import { SafeAreaView } from 'react-native-safe-area-context';

import { View } from 'react-native';
import { Header } from '../components/Header';

export function OngoingTrips() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-[37px] px-5">
        <Header title="Hi, Olivia!" />
      </View>
    </SafeAreaView>
  );
}
