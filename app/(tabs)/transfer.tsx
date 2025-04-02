import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/components/ThemeContext';
import { ArrowRight, Ban as Bank, CreditCard, Wallet } from 'lucide-react-native';

const ACCOUNTS = [
  {
    id: '1',
    name: 'Main Account',
    balance: 5240.00,
    type: 'Checking',
    icon: Wallet,
  },
  {
    id: '2',
    name: 'Savings Account',
    balance: 12350.00,
    type: 'Savings',
    icon: Bank,
  },
  {
    id: '3',
    name: 'Credit Card',
    balance: -450.00,
    type: 'Credit',
    icon: CreditCard,
  },
];

export default function TransferScreen() {
  const { isDark } = useTheme();
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState(ACCOUNTS[0]);
  const [toAccount, setToAccount] = useState(ACCOUNTS[1]);

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#1a1a1a' : '#f8f8f8' }]}>
      <View style={[styles.header, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#1a1a1a' }]}>Transfer Money</Text>
      </View>

      <View style={styles.content}>
        <View style={[styles.card, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
          <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>From</Text>
          {ACCOUNTS.map(account => (
            <TouchableOpacity
              key={account.id}
              style={[
                styles.accountItem,
                { backgroundColor: isDark ? '#333' : '#f0f0f0' },
                fromAccount.id === account.id && { borderColor: '#007AFF', borderWidth: 2 },
              ]}
              onPress={() => setFromAccount(account)}>
              <account.icon size={24} color={isDark ? '#fff' : '#666'} />
              <View style={styles.accountInfo}>
                <Text style={[styles.accountName, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                  {account.name}
                </Text>
                <Text style={[styles.accountType, { color: isDark ? '#888' : '#666' }]}>
                  {account.type}
                </Text>
              </View>
              <Text style={[styles.accountBalance, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                ${account.balance.toFixed(2)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.arrowContainer}>
          <ArrowRight size={24} color={isDark ? '#fff' : '#666'} />
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
          <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>To</Text>
          {ACCOUNTS.filter(account => account.id !== fromAccount.id).map(account => (
            <TouchableOpacity
              key={account.id}
              style={[
                styles.accountItem,
                { backgroundColor: isDark ? '#333' : '#f0f0f0' },
                toAccount.id === account.id && { borderColor: '#007AFF', borderWidth: 2 },
              ]}
              onPress={() => setToAccount(account)}>
              <account.icon size={24} color={isDark ? '#fff' : '#666'} />
              <View style={styles.accountInfo}>
                <Text style={[styles.accountName, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                  {account.name}
                </Text>
                <Text style={[styles.accountType, { color: isDark ? '#888' : '#666' }]}>
                  {account.type}
                </Text>
              </View>
              <Text style={[styles.accountBalance, { color: isDark ? '#fff' : '#1a1a1a' }]}>
                ${account.balance.toFixed(2)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: isDark ? '#2a2a2a' : '#fff' }]}>
          <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#1a1a1a' }]}>Amount</Text>
          <TextInput
            style={[
              styles.amountInput,
              {
                backgroundColor: isDark ? '#333' : '#f0f0f0',
                color: isDark ? '#fff' : '#1a1a1a',
              },
            ]}
            placeholder="Enter amount"
            placeholderTextColor={isDark ? '#888' : '#666'}
            value={amount}
            onChangeText={setAmount}
            keyboardType="decimal-pad"
          />
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: amount ? 1 : 0.5 }]}
          disabled={!amount}>
          <Text style={styles.buttonText}>Transfer Now</Text>
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
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24,
  },
  content: {
    padding: 20,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    marginBottom: 16,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  accountInfo: {
    flex: 1,
    marginLeft: 16,
  },
  accountName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    marginBottom: 4,
  },
  accountType: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  accountBalance: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
  arrowContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  amountInput: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    padding: 16,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
    fontSize: 16,
  },
});