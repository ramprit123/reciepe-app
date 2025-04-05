import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from '../common/Button';

const SearchSecton = () => {
  return (
    <View className="bg-green-100 p-4 m-4 rounded-lg flex items-center">
      <Image
        source={require('@/assets/images/pan.gif')}
        className="h-36 w-36"
        resizeMode="contain"
      />
      <Text className="text-2xl text-center">
        Warn up your stove, and let's get cooking!
      </Text>
      <Text className="text-lg mt-2">Make somethings for your LOVE</Text>
      <TextInput
        className="w-full h-24 bg-white rounded-lg px-4 mt-4 text-gray-800"
        placeholder="Search for recipes..."
        placeholderTextColor="#9CA3AF"
      />

      <View className="flex-row justify-center mt-4">
        <Button title="Generate Recipes" icon="color-wand-sharp" />
      </View>
    </View>
  );
};

export default SearchSecton;
