import React from 'react';
import {styles} from './styles/splash.style';
import useSplash from './hooks/useSplash.hook';
import {Text} from 'react-native';
import SplashContainer from '../../container-layouts/SplashContainer.layout';
const Splash = () => {
  const {} = useSplash();
  return (
    <SplashContainer containerStyle={styles.container}>
      <Text style={styles.text}>Selise Assesment App</Text>
    </SplashContainer>
  );
};
export default Splash;
