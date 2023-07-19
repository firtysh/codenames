import { Text, View, TouchableHighlight,StyleSheet } from 'react-native'
import React, { useState } from 'react'

function Footer() {
    const [players, setPlayers] = useState<{
        blue: {
            operative: string[],
            spymaster: string[]
        },
        red: {
            operative: string[],
            spymaster: string[]
        }
    }>({
        blue: {
            operative: [],
            spymaster: []
        },
        red: {
            operative: [],
            spymaster: []
        }
    })


    const handleJoin = (role: 'spymaster' | 'operative', team: 'red' | 'blue') => { // handles when player clicks on join button
        setRole(role);
        setTeam(team);
        setPlayers(prev => ({
            ...prev,
            [team]: {
                ...prev[team],
                [role]: [...prev[team][role], nickname]
            }
        }))
    }


  return (
    <View style={styles.footerContainer}>
                <View style={styles.redContainer}>
                    <Text style={styles.scoreHeading}>Words left : 9</Text>
                    <Text style={[styles.scoreText, { color: '#e65831' }]}>Operative(s)</Text>
                    <View style={styles.roleContainer}>
                        {/* Red operative */}
                        {players.red.operative.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831', color: '#e65831' }]}>{i}</Text>)}
                        {role == '' && <TouchableHighlight onPress={() => {
                            handleJoin(roles.operative, teams.red)
                        }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
                    </View>
                    <Text style={[styles.scoreText, { color: '#e65831' }]}>Spymaster</Text>
                    <View style={styles.roleContainer}>
                        {/* Red Spymaster */}
                        {players.red.spymaster.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831' }]}>{i}</Text>)}
                        {role == '' && <TouchableHighlight onPress={() => {
                            handleJoin(roles.spymaster, teams.red)
                        }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
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
                        {players.blue.operative.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9', color: '#7bcae9' }]}>{i}</Text>)}
                        {role == '' && team == '' && <TouchableHighlight onPress={() => {
                            handleJoin(roles.operative, teams.blue)
                        }}><Text style={[styles.textChip, { borderColor: '#fff', color: 'white' }]}>Join</Text></TouchableHighlight>}
                    </View>
                    <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Spymaster</Text>
                    <View style={styles.roleContainer}>
                        {/* Blue Spymasters */}
                        {players.blue.spymaster.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9' }]}>{i}</Text>)}
                        {role == '' && <TouchableHighlight onPress={() => {
                            handleJoin(roles.spymaster, teams.blue)
                        }}><Text style={[styles.textChip, { borderColor: 'white', color: 'white' }]}>Join</Text></TouchableHighlight>}

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