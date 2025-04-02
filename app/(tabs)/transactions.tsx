import { useTheme } from '@/components/ThemeContext';
import { Car, Coffee, Chrome as Home, ShoppingBag, Utensils } from 'lucide-react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const TRANSACTIONS = [
  {
    id: '1',
    title: 'Grocery Shopping',
    amount: -85.50,
    date: '2024-02-15',
    category: 'Shopping',
    icon: ShoppingBag,
  },
  {
    id: '2',
    title: 'Coffee Shop',
    amount: -4.50,
    date: '2024-02-15',
    category: 'Food & Drinks',
    icon: Coffee,
  },
  {
    id: '3',
    title: 'Gas Station',
    amount: -45.00,
    date: '2024-02-14',
    category: 'Transportation',
    icon: Car,
  },
  {
    id: '4',
    title: 'Rent Payment',
    amount: -1200.00,
    date: '2024-02-01',
    category: 'Housing',
    icon: Home,
  },
  {
    id: '5',
    title: 'Restaurant',
    amount: -65.30,
    date: '2024-02-14',
    category: 'Food & Drinks',
    icon: Utensils,
  },
];

export default function TransactionsScreen() {
  const { isDark } = useTheme();

  const renderTransaction = ({ item }: { item: typeof TRANSACTIONS[0] }) => {
    const Icon = item.icon;
    return (
      <View style={[styles.transactionItem, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
        <View style={[styles.iconContainer, { backgroundColor: isDark ? '#333' : '#f0f0f0' }]}>
          <Icon size={24} color={isDark ? '#fff' : '#666'} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={[styles.transactionTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>
            {item.title}
          </Text>
          <Text style={[styles.transactionCategory, { color: isDark ? '#888' : '#666' }]}>
            {item.category}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color: isDark ? '#fff' : '#1a1a1a' }]}>
            ${Math.abs(item.amount).toFixed(2)}
          </Text>
          <Text style={[styles.date, { color: isDark ? '#888' : '#666' }]}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#f8f8f8' }]}>
      <View style={[styles.header, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#1a1a1a' }]}>Transactions</Text>
      </View>
      <FlatList
        data={TRANSACTIONS}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
  list: {
    padding: 20,
  },
  transactionItem: {
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  transactionCategory: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
});