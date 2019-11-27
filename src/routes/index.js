import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import Boards from '../components/Boards/Boards';
import BoardList from '../components/BoardList/BoardList';
import Board from '../components/Board/Board';

const StackNavigator = createStackNavigator({
	Main,
	Boards,
	BoardList,
	Board,
});

export default createAppContainer(StackNavigator);
