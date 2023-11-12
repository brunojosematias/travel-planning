import { SafeAreaView } from 'react-native-safe-area-context';

import { FlatList, View } from 'react-native';
import { Header } from '../components/Header';
import { Trip } from '../components/Trip';
import { useState } from 'react';
import { ListEmpty } from '../components/ListEmpty';

type TripsTypes = {
  id: string;
  location: string;
  expectedDate: string;
  returnDate: string;
  investment: string;
};

export function OngoingTrips() {
  const [trips, useTrips] = useState<TripsTypes[]>([
    // {
    //   id: '1',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '2',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '3',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '4',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '5',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '6',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '7',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '8',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '9',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '10',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '11',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '12',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
    // {
    //   id: '13',
    //   location: 'Viagem para o Rio de Janeiro',
    //   expectedDate: ' 07/11/2023',
    //   returnDate: '20/11/2023',
    //   investment: '1.000,00',
    // },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-[37px] px-[24px]">
        <Header />

        <View className="mt-9 pb-52">
          <FlatList
            showsVerticalScrollIndicator={false}
            data={trips}
            keyExtractor={(trip) => trip.id}
            renderItem={({ item: trip }) => (
              <Trip
                location={trip.location}
                expectedDate={trip.expectedDate}
                returnDate={trip.returnDate}
                investment={trip.investment}
              />
            )}
            ListEmptyComponent={() => <ListEmpty />}
            contentContainerStyle={[{ paddingBottom: 100 }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
