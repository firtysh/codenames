import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
function Footer() {
    const players = useSelector((state: any) => state)
    console.log(players);

    const handleJoin = (role: 'spymaster' | 'operative', team: 'red' | 'blue') => { // handles when player clicks on join button

    }


    return (
        <View style={styles.footerContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        flex: 1
    },
    scoreHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    scoreText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textChip: {
        borderWidth: 1,
        borderRadius: 7,
        padding: 5,
        textAlign: 'center',
        color: 'white'
    },
    roleContainer: {
        flexDirection: 'row',
        padding: 5,
        gap: 4,
        flexWrap: 'wrap',
    },
    redContainer: {
        borderTopLeftRadius: 7,
        flex: 1,
        backgroundColor: '#8f2b1c',
        padding: 5,
    },
    blueContainer: {
        borderTopRightRadius: 7,
        flex: 1,
        backgroundColor: '#3284a3',
        padding: 5,
    },
    logContainer: {
        flex: 1,
        backgroundColor: '#212121',
        padding: 5,
    },
})

export default Footer