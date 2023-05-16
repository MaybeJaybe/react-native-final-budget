import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Savings() {
	return (
		<View style={styles.container}>
			<Text style={styles.savings}>$0.00</Text>
		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ededed',
	},
	savings: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
	}
})

export default Savings