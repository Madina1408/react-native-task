import { StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <Home />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
