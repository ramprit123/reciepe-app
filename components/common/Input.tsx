import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  multiline?: boolean;
  numberOfLines?: number;
}

export const Input = ({
  value,
  onChangeText,
  placeholder,
  icon,
  multiline = false,
  numberOfLines = 1,
}: InputProps) => {
  return (
    <View className="w-full flex-row items-center bg-white rounded-lg px-4">
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color="#9CA3AF"
          style={{ marginRight: 8 }}
        />
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        multiline={multiline}
        numberOfLines={numberOfLines}
        className={`flex-1 py-3 text-gray-800 ${
          multiline ? 'text-start' : 'text-left'
        }`}
        style={{ textAlignVertical: multiline ? 'top' : 'center' }}
      />
    </View>
  );
};
