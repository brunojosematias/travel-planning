import { Text, TouchableOpacity, View } from 'react-native';

import { Edit } from '../assets/Edit';

type Props = {
  location: string;
  expectedDate: string;
  returnDate: string;
  investment: string;
  onEditFormTripNavigate: () => void;
};

export function Trip({
  location,
  expectedDate,
  investment,
  returnDate,
  onEditFormTripNavigate,
}: Props) {
  function handleEditFormTrip() {
    onEditFormTripNavigate();
  }

  return (
    <TouchableOpacity className="flex-row justify-between items-center border-gray-400 border-[0.5px] py-2 px-[14px] mb-[15px] rounded-[5px] ">
      <View>
        <Text className="text-gray-500 text-[15px]">{location}</Text>
        <View className="flex-row">
          <View>
            <Text className="text-gray-400 text-[8px]">
              Data prevista: {expectedDate}
            </Text>
            <Text className="text-gray-400 text-[8px] mt-[2px]">
              Investimento: {investment}
            </Text>
          </View>

          <Text className="text-gray-400 text-[8px] ml-[15px]">
            Data volta: {returnDate}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleEditFormTrip}>
        <Edit />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
