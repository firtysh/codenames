import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function Hint() {
    const auth = useSelector((state: RootState) => state.auth)
    const teamData = useSelector((state: RootState) => state.teamData)

    const hintText = teamData[teamData.turn].hint
    const hintCount = teamData[teamData.turn].hintCount

    return (
        <View style={styles.hintContainer}>
            {auth.role==='spymaster' && teamData.turn===auth.team ?
                <>
                    <TextInput style={styles.hintText} placeholder='Enter hint' />
                    <TextInput style={styles.hintText} keyboardType='numeric' placeholder='0' />
                    <TouchableHighlight onPress={() => { }}  >
                        <Text style={styles.hintText}>Send</Text>
                    </TouchableHighlight>
                </>
                :
                <>
                <Text style={styles.hintText}>{hintText}</Text>
                <Text style={styles.hintText}>{hintCount}</Text>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    hintContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    },
    hintText: {
        marginVertical: 10,
        backgroundColor: 'white',
        color: 'black',
        padding: 7,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 7
    },
})

export default Hint