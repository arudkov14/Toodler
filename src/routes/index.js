import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import CreateBoard from '../components/CreateBoard/CreateBoard';
import Boards from '../components/Boards/Boards';
import BoardView from '../components/BoardView/BoardView';
import Board from '../components/Board/Board';

const StackNavigator = createStackNavigator({
	Main,
	CreateBoard,
	Boards,
	BoardView,
	Board,
});

export default createAppContainer(StackNavigator);
