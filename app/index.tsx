import { useUser } from '@/context/UserContext';
import { useLogto } from '@logto/rn';
import { useRouter, useRootNavigationState } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Index = () => {
  const router = useRouter();
  const { updateUser, user } = useUser();
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const rootNavigationState = useRootNavigationState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      // Check if navigation is ready
      if (!rootNavigationState?.key) {
        console.log('Navigation state not ready');
        return;
      }

      try {
        if (!isAuthenticated) {
          router.replace('/landing');
        } else {
          const claims = await getIdTokenClaims();
          router.replace('/(tabs)');
          if (claims) {
            updateUser(claims);
          } else {
            console.warn('No claims received from token');
          }
        }
      } catch (error) {
        console.error('Authentication flow error:', error);
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Wait for 1 second to let auth state settle

    return () => clearTimeout(timer);
  }, [isAuthenticated, rootNavigationState?.key]);

  if (isLoading) {
    return (
      <View className="flex-1 flex items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 flex items-center justify-center">
      {user ? (
        <View>
          <Text className="text-2xl font-bold">Hello, {user.name}!</Text>
          <Text className="text-2xl font-bold">
            Your email is {user.at_hash}!
          </Text>
        </View>
      ) : (
        <Text className="text-2xl font-bold">Hello, !</Text>
      )}
    </View>
  );
};

export default Index;
