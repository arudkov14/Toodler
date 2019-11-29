import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, Button, Image } from 'react-native';
import Data from '../../resources/data.json';
import styles from './styles.js';

class ListView extends React.Component { //  = ( {navigation: { navigate }, board} ) => {
  deleteList(id) {
    delete Data.lists[this.getListIndex(id)];
    Data.lists = Data.lists.filter(function(i) {
      return i != undefined;
    });
    this.forceUpdate();
  }

  getListIndex(id) {
    for(var i = 0; i < Data.lists.length; i++) {
      if(Data.lists[i].id == id) {
        return i;
      }
    }
  }

  render() {
    const { navigation } = this.props;
    const { board } = this.props;

    return (
      <View>
        <FlatList
          numColumns={1}
          data={ Data.lists }
          renderItem={ ({ item: { id, name, color, boardId}}) => {
            if(boardId == board) {
              return (
                <TouchableHighlight style={{ backgroundColor: color } }
                 onPress={() => { navigation.navigate('List', { list: id }) }} >
                  <View style={ styles.list } >
                    <Text style={{
                      backgroundColor: color,
                      fontSize: 20,
                    }}>
                      { name }
                    </Text>
                    <TouchableOpacity style={ styles.deleteButton }
                     onPress={ () => this.deleteList(id) }>
                       <Image
                         style={ styles.removeIcon }
                         resizeMode='cover'
                         source={ require('../../../assets/close.png') }
                        />
                    </TouchableOpacity>
                  </View>
                </TouchableHighlight>
              );
            }
          }} keyExtractor={(list) => list.name}
       />
      </View>
    );
  }
}

export default ListView
