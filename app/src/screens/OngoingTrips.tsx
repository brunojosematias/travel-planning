import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from 'react-native';
import { Header } from '../components/Header';

export function OngoingTrips() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-[37px] px-[25px]">
        <Header />
      </View>
    </SafeAreaView>
  );
}
