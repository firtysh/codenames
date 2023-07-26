import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
function Footer() {
    const players = useSelector((state: RootState) => state.player)
    const redSpymasters = players.filter((item) => {
        return item.team === 'red' && item.role === 'spymaster'
    })
    const blueSpymasters = players.filter((item) => {
        return item.team === 'blue' && item.role === 'spymaster'
    })
    const redOperatives = players.filter((item) => {
        return item.team === 'red' && item.role === 'operative'
    })
    const blueOperatives = players.filter((item) => {
        return item.team === 'blue' && item.role === 'operative'
    })

    return (
        <View style={styles.footerContainer}>
            <View style={styles.redContainer}>
                <Text style={styles.scoreHeading}>Words left : 9</Text>
                <Text style={[styles.scoreText, { color: '#e65831' }]}>Operative(s)</Text>
                <View style={styles.roleContainer}>
                    {/* Red operative */}
                    {redOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831', color: '#e65831' }]}>{i.name}</Text>)}
                </View>
                <Text style={[styles.scoreText, { color: '#e65831' }]}>Spymaster</Text>
                <View style={styles.roleContainer}>
                    {/* Red Spymaster */}
                    {redSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831' }]}>{i.name}</Text>)}
                </View>
            </View>
            <View style={styles.logContainer}>
                <Text style={styles.scoreHeading}>Game Log</Text>
            </View>
            <View style={styles.blueContainer}>
                <Text style={styles.scoreHeading}>Words left : 8</Text>
                <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Operative(s)</Text>
                <View style={styles.roleContainer}>
                    {/* Blue operative */}
                    {blueOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9', color: '#7bcae9' }]}>{i.name}</Text>)}
                </View>
                <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Spymaster</Text>
                <View style={styles.roleContainer}>
                    {/* Blue Spymasters */}
                    {blueSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9' }]}>{i.name}</Text>)}
                </View>
            </View>

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