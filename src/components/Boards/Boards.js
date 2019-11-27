import React from 'react';
import SwipeableViews from 'react-swipeable-views-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import BoardList from '../BoardList/BoardList';
import Data from '../../resources/data.json';
import styles from './styles.js';

class Boards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBoardId: 1,
			numberOfBoards: Data.boards.length,
		};
		this.nextBoard = this.nextBoard.bind(this);
	}

	shouldComponentUpdate(nextState) {
		const differentTitle = this.state.currentBoardId !== nextState.currentBoardId;
		console.log(differentTitle)
    return differentTitle;
	}

	nextBoard() {
		const { currentBoardId } = this.state;
		const { numberOfBoards } = this.state;
		if(currentBoardId < numberOfBoards) {
			this.setState({
				currentBoardId: currentBoardId + 1
			});
			this.forceUpdate();
		}
	}

	prevBoard() {
		const { currentBoardId } = this.state;
		if(currentBoardId > 1) {
			this.setState({
				currentBoardId: currentBoardId - 1
			});
			this.forceUpdate();
		}
	}

	render() {
		console.log(this.state.currentBoardId)
		const { currentBoardId } = this.state;
		const { navigation } = this.props;

		return(
			<View style={styles.container}>
				<View style={styles.boardContainer}>
					<BoardList navigation={ navigation } boardId={ currentBoardId } data={ Data } />
					<Button title='<' onPress={ () => { this.prevBoard() }}/>
					<Button title='>' onPress={ () => { this.nextBoard() }}/>
				</View>
			</View>
		);
	}
}

export default Boards;
