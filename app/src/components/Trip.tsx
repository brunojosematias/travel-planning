import { Text, TouchableOpacity, View } from 'react-native';

import { Edit } from '../assets/Edit';

type Props = {
  location: string;
  expectedDate: string;
  returnDate: string;
  investment: string;
};

export function Trip({
  location,
  expectedDate,
  investment,
  returnDate,
}: Props) {
  return (
    <TouchableOpacity className="flex-row justify-between items-center border-gray-400 border-[0.5px] py-2 px-[14px] mb-[15px] rounded-[5px] ">
      <View>
        <Text className="text-gray-500 text-[15px]">{location}</Text>
        <View className="flex-row">
          <View>
            <Text className="text-gray-400 text-[8px]">
              Data prevista: {investment}
            </Text>
            <Text className="text-gray-400 text-[8px] mt-[2px]">
              Investimento: {returnDate}
            </Text>
          </View>

          <Text className="text-gray-400 text-[8px] ml-[15px]">
            Data volta: {expectedDate}
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Edit />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
