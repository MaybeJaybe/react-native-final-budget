import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function History() {
	return (
		<View style={styles.container}>
			<Text style={styles.history}>No Stored History</Text>
		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ededed',
	},
	history: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
	}
})

export default History