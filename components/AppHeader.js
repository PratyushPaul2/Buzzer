import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends React.Component {


  render() {
    return (
      <View style={styles.textContainer}>
      <Text style={styles.text}> Quiz Buzzer App </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'blue',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'white',
    textAlign:'center',
    padding:20
  }
});

export default SoundButton;