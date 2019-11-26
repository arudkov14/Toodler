import React from 'react';
import { Image } from 'react-native';
import styles from './styles.js';

const BoardThumbnail = ({ image }) => {
	return (
		<Image
			style={ styles.image }
			resizeMode='cover'
			source={{ uri: image }}
		 />
 	);
}

export default BoardThumbnail;
