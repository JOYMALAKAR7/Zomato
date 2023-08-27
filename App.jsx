import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const App = () => {
  return (
    <View style={myStyle.container}>
      <Image resizeMode='contain' source={require('./src/Images/logo.png')} style={myStyle.logo} />
    </View>
  );
};

export default App;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3744',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  
  },
});
