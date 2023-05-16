import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableHighlight, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

function Budget() {
	const [item, changeItem] = React.useState('');
	const [amount, changeAmount] = React.useState('');
	const [save, setSave] = React.useState('')

	return (
		<View style={styles.container}>
			<Text style={styles.budget}>Add new item</Text>
			<TextInput
				style={styles.item}
				onChangeText={changeItem}
				value={item}
				placeholder='example: Rent'
			/>
			<TextInput
				style={styles.amount}
				onChangeText={changeAmount}
				value={amount}
				placeholder='0.00'
				keyboardType='numeric'
			/>
			<Button title='Save' onPress={() => setSave({item})}></Button>
			<Text>Total Budget: $3000</Text>
			<TouchableHighlight>
				<FlatList 
					data={TextInput}
					renderItem={({item, amount}) => {
						return (
							<View
								item={item}
								amount={amount}
							/>
						)
					}}
				/>
			</TouchableHighlight>
		</View>
	)
}

const styles= StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ededed',
	},
	budget: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 20,
	},
	item: {
		height: 40,
		width: '80%',
		margin: 8,
		borderWidth: 1,
		padding: 10,
		fontSize: 18,
	},
	amount: {
		height: 40,
		width: '80%',
		margin: 8,
		borderWidth: 1,
		padding: 10,
		fontSize: 18,
	}
})

export default Budget