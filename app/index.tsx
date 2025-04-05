import { useUser } from '@/context/UserContext';
import { useLogto } from '@logto/rn';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const { updateUser, user } = useUser();
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((claims) => {
        updateUser(claims);
      });
    }
  }, [isAuthenticated]);
  return (
    <View className="flex-1 flex items-center justify-center">
      {user ? (
        <Text className="text-2xl font-bold">Hello, {user.name}!</Text>
      ) : (
        <Text className="text-2xl font-bold">Hello, !</Text>
      )}
    </View>
  );
};

export default Index;
