import React from 'react';
import SwipeableViews from 'react-swipeable-views-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import BoardView from '../BoardView/BoardView';
import Data from '../../resources/data.json';
import styles from './styles.js';

class Boards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBoardId: this.findNextBoardAsc(-1),
			numberOfBoards: Data.boards.length,
		};
	}

	nextBoard() {
		const { currentBoardId } = this.state;
		const { numberOfBoards } = this.state;
		if(currentBoardId >= numberOfBoards - 1) { return; }
		this.setState({
			currentBoardId: this.findNextBoardAsc(currentBoardId),
		})
	}

	prevBoard() {
		const { currentBoardId } = this.state;
		if(currentBoardId <= 0) { return;	}
		this.setState({
			currentBoardId: this.findNextBoardDesc(currentBoardId),
		});
	}

	deleteBoard() {
		const { currentBoardId } = this.state;
		const { numberOfBoards } = this.state;
		delete Data.boards[currentBoardId];

		var nextBoardId = this.findNextBoardAsc(currentBoardId);
		if(nextBoardId === undefined || nextBoardId == currentBoardId) {
			nextBoardId = this.findNextBoardDesc(currentBoardId);
		}
		console.log(nextBoardId)
		this.setState({
			currentBoardId: nextBoardId,
		});
	}

	findNextBoardAsc(index) {
		// Deleted boards will show up in the data as "undefined"
		for(var i = index + 1; i < Data.boards.length; i++) {
			if(Data.boards[i] !== undefined) {
				return i;
			}
		}
		return index;
	}

	findNextBoardDesc(index) {
		for(var i = index - 1; i >= 0; i--) {
			if(Data.boards[i] !== undefined) {
				return i;
			}
		}
		return index;
	}

	findCurrentBoardId() {
		const { currentBoardId } = this.state;
		var currentBoard = Data.boards[currentBoardId];
		if(currentBoard !== undefined) {
			return currentBoard.id;
		}
	}

	render() {
		const { currentBoardId } = this.state;
		const { navigation } = this.props;

		return(
			<View style={styles.container}>
				<View style={styles.boardContainer}>
					<Button title='X' onPress={ () => { this.deleteBoard() }} />
					<BoardView navigation={ navigation } boardId={ this.findCurrentBoardId() }
					boardIndex={ currentBoardId } data={ Data } />
					<Button title='<' onPress={ () => { this.prevBoard() }}/>
					<Button title='>' onPress={ () => { this.nextBoard() }}/>
				</View>
			</View>
		);
	}
}

export default Boards;
