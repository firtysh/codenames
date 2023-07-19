import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

function GameControls() {
	return (
		<View style={styles.controlContainer}>
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<TouchableHighlight onPress={() => { }}>
					<Text style={styles.controlText}>Players</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => { }}>
					<Text style={styles.controlText}>Timer</Text>
				</TouchableHighlight>
			</View>
			<View style={{ flexDirection: 'row', gap: 10 }}>
				<TouchableHighlight onPress={() => { }}>
					<Text style={styles.controlText}>Reset</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => { }}>
					<Text style={styles.controlText}>Rules</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => { }}>
					<Text style={styles.controlText}>Profie</Text>
				</TouchableHighlight>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	controlContainer: {
		marginTop: 20,
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	controlText: {
		backgroundColor: '#ffe400',
		fontSize: 15,
		padding: 5,
		borderRadius: 5,
		color: 'black',
	},
})

export default GameControls