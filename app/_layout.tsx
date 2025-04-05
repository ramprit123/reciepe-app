import { ThemeProvider } from '@/components/ThemeContext';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { LogtoConfig, LogtoProvider, UserScope } from '@logto/rn';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import { UserProvider } from '@/context/UserContext';

const config: LogtoConfig = {
  endpoint: process.env.EXPO_PUBLIC_LOGTO_ENDPOINT!,
  appId: process.env.EXPO_PUBLIC_LOGTO_KEY!,
  scopes: [
    UserScope.Email,
    UserScope.Phone,
    UserScope.CustomData,
    UserScope.Identities,
    UserScope.Organizations,
  ],
};

const queryClient = new QueryClient();
export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LogtoProvider config={config}>
      <UserProvider>
        <ThemeProvider>
          <GestureHandlerRootView>
            <QueryClientProvider client={queryClient}>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
              </Stack>
              <StatusBar style="auto" />
            </QueryClientProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </UserProvider>
    </LogtoProvider>
  );
}
