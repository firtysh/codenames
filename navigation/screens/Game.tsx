import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import { useRoute } from '@react-navigation/native'
import words from '../../words'
import { RouteProp } from '@react-navigation/native'

// black : bottom -200 #212121
// blue : bottom -100 #3a8aa6
// red : top -100 #d35a2b
// yellow : top 0 #eed5b2
// const player:{
//     blue: {
//         operative: string[],
//         spymaster: string[]
//     },
//     red: {
//         operative: string[],
//         spymaster: string[]
//     }
// } = {
//     blue: {
//         operative: [],
//         spymaster: []
//     },
//     red: {
//         operative: [],
//         spymaster: []
//     }
// }
const teams: { red: 'red', blue: 'blue' } = { red: 'red', blue: 'blue' };
const roles: { operative: 'operative', spymaster: 'spymaster' } = { operative: 'operative', spymaster: 'spymaster' };
const colors = [
    { id: 1, color: 'yellow' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'black', },
    { id: 4, color: 'red', },
    { id: 5, color: 'blue' },
    { id: 6, color: 'blue', },
    { id: 7, color: 'red', },
    { id: 8, color: 'red', },
    { id: 9, color: 'blue', },
    { id: 10, color: 'red', },
    { id: 11, color: 'blue', },
    { id: 12, color: 'red', },
    { id: 13, color: 'blue', },
    { id: 14, color: 'red', },
    { id: 15, color: 'blue', },
    { id: 16, color: 'red', },
    { id: 17, color: 'yellow', },
    { id: 18, color: 'blue', },
    { id: 19, color: 'blue', },
    { id: 20, color: 'yellow', },
    { id: 21, color: 'yellow', },
    { id: 22, color: 'yellow', },
    { id: 23, color: 'yellow', },
    { id: 24, color: 'yellow', },
    { id: 25, color: 'red', },

]
const card = ({ item, index }: { item: string, index: number }, role: string) => {
    const getCardColor = (index: number) => {
        if (role != 'spymaster') {
            return { top: 0 }
        }
        if (colors[index].color === 'black') {
            return { bottom: -200 }
        }
        else if (colors[index].color === 'blue') {
            return { bottom: -100 }
        }
        else if (colors[index].color === 'red') {
            return { top: -200 }
        }
        else {
            return { top: 0 }
        }
    }
    const getTextColors = (index: number) => {
        if (role != 'spymaster') {
            return { color: 'black' }
        }
        if (colors[index].color === 'black') {
            return { color: 'white' }
        }
        else {
            return { color: 'black' }
        }
    }
    const getCardBgColor = (index: number) => {
        if (role != 'spymaster') {
            return { backgroundColor: '#eed5b2' }
        }
        if (colors[index].color === 'black') {
            return { backgroundColor: '#212121' }
        }
        else if (colors[index].color === 'blue') {
            return { backgroundColor: '#3a8aa6' }
        }
        else if (colors[index].color === 'red') {
            return { backgroundColor: '#d35a2b' }
        }
        else {
            return { backgroundColor: '#eed5b2' }
        }
    }
    const cardBgColor = getCardBgColor(index);
    const cardColor = getCardColor(index);
    const textColor = getTextColors(index);
    return (
        <View style={[styles.card, cardBgColor]}>
            <TouchableHighlight onPress={() => { }} style={[{ flex: 1 }, cardBgColor]}>
                <ImageBackground source={{ uri: 'https://cdn.codenames.game/v20210210/theme/classic/card/fronts.png' }} resizeMode='cover' imageStyle={[styles.imageStyle, cardColor]} style={styles.image}>
                    <Text style={[styles.cardText, textColor]}>
                        {item}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    )
}

const Game = (props: { navigation: { navigate: (arg0: string) => void } }) => {
    const route = useRoute<RouteProp<{ params: { nickname: string } }>>()
    const nickname = route.params.nickname;
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
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
    const rc = 5;


    const handleJoin = (role: 'spymaster' | 'operative', team: 'red' | 'blue') => {
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
        <SafeAreaView style={styles.safe}>
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
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>The Opponent Spymaster is playin wait for your turn...</Text>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    data={words.wordset1}
                    renderItem={(item => card(item, role))}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.hintContainer}>
                <Text style={styles.hintText}>...</Text>
                <Text style={styles.hintText}>_</Text>
            </View>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#161718',
    },

    controlContainer: {
        marginTop: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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
    cardContainer: {
        padding: 3,
    },
    card: {
        flex: 1,
        margin: 2,
        overflow: 'hidden',
        aspectRatio: 1.55,
        borderRadius: 3,
    },
    image: {
        flex: 1,
    },
    imageStyle: {
        position: 'absolute',
        justifyContent: 'center',
    },
    controlText: {
        backgroundColor: '#ffe400',
        fontSize: 15,
        padding: 5,
        borderRadius: 5,
        color: 'black',
    },
    cardText: {
        width: '78%',
        height: 'auto',
        position: 'absolute',
        fontSize: 9,
        textAlign: 'center',
        alignSelf: 'center',
        bottom: 8,
        fontWeight: 'bold',
    },
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

export default Game