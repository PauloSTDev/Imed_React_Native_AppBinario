import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.title}>Existem [....] tipos de pessoas no mundo inteiro</Text>
      <Text style={styles.title}>Aquelas que entendem binário e aquelas que não entendem!</Text>
      <Text style={styles.title}>Selecione a resposta abaixo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: "black",
    fontSize: 15,
    padding: 6
  }
});
