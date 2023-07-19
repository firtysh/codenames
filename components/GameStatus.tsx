import { Text, View, StyleSheet } from 'react-native'

function GameStatus() {
    const statusText = ''
    return (
        <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{statusText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statusContainer: {
        // width:80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusText: {
        backgroundColor: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 7,
        borderRadius: 7,
        width: '80%',
        marginVertical: 10
    },
})

export default GameStatus