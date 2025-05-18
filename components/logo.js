import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo-new-edunexis.png')} style={styles.logo} />
);

const styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 250,
    alignSelf: 'center',
  },
});

export default (Logo);