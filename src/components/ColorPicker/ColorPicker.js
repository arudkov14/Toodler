import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';

class ColorPicker extends React.Component {
  render() {
    const { updateColor } = this.props;

    return (
      <View style={ styles.container }>
        <TouchableOpacity style={ styles.white } onPress={ () => updateColor('#fff') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.orange } onPress={ () => updateColor('#FF6900') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.red } onPress={ () => updateColor('#EB144C') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.purple } onPress={ () => updateColor('#9900EF') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.blue } onPress={ () => updateColor('#008080') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.lightBlue } onPress={ () => updateColor('#0693E3') }>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.grey } onPress={ () => updateColor('#ABB8C3') }>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ColorPicker;
