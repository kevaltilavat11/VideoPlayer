import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context';
import VideoPlayerScreen from './src/screens/VideoPlayerScreen';
import { MenuProvider } from 'react-native-popup-menu';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  return (
    <SafeAreaView style={styles.container}>
      <MenuProvider>
      <VideoPlayerScreen/>
      </MenuProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
