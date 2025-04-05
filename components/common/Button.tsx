import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  onPress?: () => void;
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  onPress,
  title,
  icon,
  variant = 'primary',
  size = 'md',
}: ButtonProps) => {
  const getButtonStyle = () => {
    const baseStyle = 'rounded-full flex-row items-center justify-center';
    const variantStyle = variant === 'primary' ? 'bg-green-500' : 'bg-gray-500';
    const sizeStyle = {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4',
    }[size];

    return `${baseStyle} ${variantStyle} ${sizeStyle}`;
  };

  return (
    <TouchableOpacity className={getButtonStyle()} onPress={onPress}>
      {icon && (
        <Ionicons
          name={icon}
          size={size === 'lg' ? 24 : size === 'md' ? 20 : 16}
          color="white"
          style={{ marginRight: 8 }}
        />
      )}
      <Text className="text-white font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};
