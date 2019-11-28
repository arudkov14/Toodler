import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles.js';
import Data from '../../resources/data.json';

const ListView = (board) => {

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        numColumns={1}
        data={ Data.lists }
        renderItem={ ({ item: { id, name, color, boardId}}) => {
          if(boardId == board.board) {
            return (
              <View style={( color: '#fff')}>
                <Text> { name } </Text>
              </View>
            );
          }
        }} keyExtractor={(list) => list.name}
     />
    </View>
  );
}

export default ListView
