
import React from 'react';
import {
  SafeAreaView,

  StatusBar,
} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/Home';
// const MyIcon = <Icon name="rocket" size={30} color="#900" />;

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}





export default App;
