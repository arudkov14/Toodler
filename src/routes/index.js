import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../components/Main/Main';
import Boards from '../components/Boards/Boards';

const StackNavigator = createStackNavigator({
	Main,
	Boards,
});

export default createAppContainer(StackNavigator);
