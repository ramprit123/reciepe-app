import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { Camera, CreditCard as Edit2, Bell, CreditCard, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

const MENU_ITEMS = [
  {
    icon: Bell,
    title: 'Notifications',
    subtitle: 'Manage your notification preferences',
  },
  {
    icon: CreditCard,
    title: 'Payment Methods',
    subtitle: 'Add or remove payment methods',
  },
  {
    icon: Lock,
    title: 'Security',
    subtitle: 'Manage your security settings',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    subtitle: 'Get help with your account',
  },
];

export default function ProfileScreen() {
  const { isDark } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#f8f8f8' }]}>
      <View style={[styles.header, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400' }}
              style={styles.profileImage}
            />
            <TouchableOpacity
              style={[styles.cameraButton, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]}>
              <Camera size={20} color={isDark ? '#fff' : '#666'} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.name, { color: isDark ? '#fff' : '#1a1a1a' }]}>John Doe</Text>
          <Text style={[styles.email, { color: isDark ? '#888' : '#666' }]}>john.doe@example.com</Text>
          <TouchableOpacity style={[styles.editButton, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]}>
            <Edit2 size={20} color={isDark ? '#fff' : '#666'} style={styles.editIcon} />
            <Text style={[styles.editButtonText, { color: isDark ? '#fff' : '#666' }]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        {MENU_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
            <View style={[styles.menuIconContainer, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]}>
              <item.icon size={24} color={isDark ? '#fff' : '#666'} />
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={[styles.menuTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                {item.title}
              </Text>
              <Text style={[styles.menuSubtitle, { color: isDark ? '#888' : '#666' }]}>
                {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.logoutButton, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
          <LogOut size={24} color="#FF3B30" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
  },
  editIcon: {
    marginRight: 8,
  },
  editButtonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  logoutText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#FF3B30',
    marginLeft: 8,
  },
});