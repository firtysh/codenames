import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import { useState } from 'react'

function Hint() {
    const teams: { red: 'red', blue: 'blue' } = { red: 'red', blue: 'blue' };
    const roles: { operative: 'operative', spymaster: 'spymaster' } = { operative: 'operative', spymaster: 'spymaster' };

    const [team, setTeam] = useState('')
    const [role, setRole] = useState('')
    const [hintText, setHintText] = useState('...');
    const [hintCount, setHintCount] = useState('_');
    const [turn, setTurn] = useState(teams.red)
    return (
        <View style={styles.hintContainer}>
            {role == roles.spymaster && turn == team ?
                <>
                    <TextInput style={styles.hintText} placeholder='Enter hint' />
                    <TextInput style={styles.hintText} keyboardType='numeric' placeholder='0' />
                    <TouchableHighlight onPress={() => { }}  >
                        <Text style={styles.hintText}>Send</Text>
                    </TouchableHighlight>
                </>
                :
                <><Text style={styles.hintText}>{hintText}</Text>
                    <Text style={styles.hintText}>{hintCount}</Text></>
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