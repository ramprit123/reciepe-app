import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { Moon, Bell, Globe, Lock, CreditCard, CircleHelp as HelpCircle } from 'lucide-react-native';

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useTheme();

  const SETTINGS_SECTIONS = [
    {
      title: 'Appearance',
      items: [
        {
          icon: Moon,
          title: 'Dark Mode',
          type: 'switch',
          value: isDark,
          onValueChange: toggleTheme,
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          title: 'Push Notifications',
          type: 'switch',
          value: true,
        },
        {
          icon: Globe,
          title: 'Language',
          type: 'link',
          value: 'English',
        },
        {
          icon: CreditCard,
          title: 'Currency',
          type: 'link',
          value: 'USD',
        },
      ],
    },
    {
      title: 'Security',
      items: [
        {
          icon: Lock,
          title: 'Change Password',
          type: 'link',
        },
        {
          icon: Lock,
          title: 'Two-Factor Authentication',
          type: 'switch',
          value: false,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          title: 'Help Center',
          type: 'link',
        },
        {
          icon: HelpCircle,
          title: 'Contact Support',
          type: 'link',
        },
      ],
    },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#f8f8f8' }]}>
      <View style={[styles.header, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#1a1a1a' }]}>Settings</Text>
      </View>

      <View style={styles.content}>
        {SETTINGS_SECTIONS.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: isDark ? '#888' : '#666' }]}>
              {section.title}
            </Text>
            <View style={[styles.card, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.settingItem,
                    itemIndex < section.items.length - 1 && styles.borderBottom,
                    { borderBottomColor: isDark ? '#333' : '#f0f0f0' },
                  ]}>
                  <View style={styles.settingItemLeft}>
                    <View
                      style={[styles.iconContainer, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]}>
                      <item.icon size={20} color={isDark ? '#fff' : '#666'} />
                    </View>
                    <Text style={[styles.settingItemTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                      {item.title}
                    </Text>
                  </View>
                  {item.type === 'switch' ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onValueChange}
                      trackColor={{ false: '#767577', true: '#007AFF' }}
                      thumbColor={isDark ? '#fff' : '#f4f3f4'}
                    />
                  ) : (
                    <View style={styles.settingItemRight}>
                      {item.value && (
                        <Text style={[styles.settingItemValue, { color: isDark ? '#888' : '#666' }]}>
                          {item.value}
                        </Text>
                      )}
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    marginBottom: 8,
    paddingLeft: 4,
  },
  card: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingItemTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  settingItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemValue: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    marginRight: 8,
  },
});