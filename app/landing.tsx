import { View, Text, Image, Animated } from 'react-native';
import React from 'react';
import { Marquee } from '@animatereactnative/marquee';
import { StatusBar } from 'expo-status-bar';
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
  return (
    <View className="flex-1">
      <StatusBar hidden />
      <Marquee>
        <View className="flex flex-row gap-2">
          {IMAGE_LIST.map((item) => (
            <Image
              key={Math.random()}
              source={item}
              className="h-[160px] w-[160px] object-cover"
            />
          ))}
        </View>
      </Marquee>
    </View>
  );
};

export default Landing;
