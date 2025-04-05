import { useTheme } from '@/components/ThemeContext';
import { Tabs } from 'expo-router';
import {
  ChartPie as PieChart,
  CircleUser as UserCircle,
} from 'lucide-react-native';
import { Image, Platform } from 'react-native';

export default function TabLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#1a1a1a' : '#fff',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#333' : '#e1e1e1',
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingTop: 10,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: isDark ? '#fff' : '#000',
        tabBarInactiveTintColor: isDark ? '#888' : '#888',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require('@/assets/images/i1.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: color,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <PieChart
              size={Platform.OS === 'ios' ? size : size - 2}
              color={color}
              strokeWidth={Platform.OS === 'ios' ? 2 : 2.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Cookbook',
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require('@/assets/images/i3.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: color,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <UserCircle
              size={Platform.OS === 'ios' ? size : size - 2}
              color={color}
              strokeWidth={Platform.OS === 'ios' ? 2 : 2.5}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={require('@/assets/images/i4.png')}
              style={{
                width: 30,
                height: 30,
                tintColor: color,
                opacity: focused ? 1 : 0.5,
              }}
            />
          ),
          href: null, // This will hide the tab from the tab bar
        }}
      />
    </Tabs>
  );
}
