import { Marquee } from '@animatereactnative/marquee';
import { useLogto } from '@logto/rn';
import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const IMAGE_LIST = [
  require('@/assets/images/1.jpg'),
  require('@/assets/images/c1.jpg'),
  require('@/assets/images/2.jpg'),
  require('@/assets/images/c2.jpg'),
  require('@/assets/images/3.jpg'),
  require('@/assets/images/c3.jpg'),
  require('@/assets/images/4.jpg'),
  require('@/assets/images/5.jpg'),
  require('@/assets/images/6.jpg'),
];

const Landing = () => {
  const { signIn, isAuthenticated } = useLogto();
  /**
   * Creates three rows of shuffled images using useMemo for performance optimization
   *
   * @returns {Array<Array>} Array containing 3 randomly shuffled image arrays
   */
  const shuffledRows = useMemo(() => {
    return [1, 2, 3].map(() => [...IMAGE_LIST].sort(() => Math.random() - 0.4));
  }, []);

  return (
    <View className="flex-1">
      <StatusBar hidden />
      {shuffledRows.map((randomImages, index) => (
        <Marquee
          key={index}
          spacing={10}
          speed={0.7}
          style={{
            transform: [{ rotate: '-4deg' }],
            marginBottom: 10,
          }}
        >
          <View className="flex flex-row gap-2.5">
            {randomImages.map((item, imageIndex) => (
              <Image
                key={`${index}-${imageIndex}`}
                source={item}
                className="h-[160px] w-[160px] object-cover"
              />
            ))}
          </View>
        </Marquee>
      ))}

      <View className="mt-10 mx-10 flex items-center justify-center gap-5">
        <Text className="text-3xl text-center leading-10 font-bold">
          Cookmate AI 🥗🔍 | Find, Create & Enjoy Delicious Recipes!
        </Text>
        <Text className="text-xl text-center">
          Generate delicious recipes in seconds with the power of AI! 🍔✨
        </Text>
      </View>
      <View className="flex items-center mt-10">
        <TouchableOpacity
          onPress={() => signIn('exp://192.168.31.172:8081')}
          className="border-2 border-slate-600 rounded-full px-8 py-3"
          activeOpacity={0.7}
        >
          <Text className="text-lg font-semibold">
            {isAuthenticated ? 'Get Started' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
