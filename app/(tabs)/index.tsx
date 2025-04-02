import { ScrollView, StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning,</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {/* Add recent transactions list here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  greeting: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#1a1a1a',
    marginTop: 4,
  },
  balanceCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#007AFF',
    borderRadius: 16,
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
  },
  balanceAmount: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  balanceStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 16,
  },
  statAmount: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#fff',
    marginVertical: 4,
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1a1a1a',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});