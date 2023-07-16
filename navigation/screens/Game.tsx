import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    TextInput,
    Button
} from 'react-native'
import { useRoute } from '@react-navigation/native'
import words from '../../words'  // words used for game
import { RouteProp } from '@react-navigation/native'   // to get room name from Room.tsx




// black : bottom -200 #212121
// blue : bottom -100 #3a8aa6
// red : top -100 #d35a2b
// yellow : top 0 #eed5b2

// Constants for teams and roles and colors
const teams: { red: 'red', blue: 'blue' } = { red: 'red', blue: 'blue' };
const roles: { operative: 'operative', spymaster: 'spymaster' } = { operative: 'operative', spymaster: 'spymaster' };
const initialColors = [
    { id: 1, color: 'yellow', isOpen: true },
    { id: 2, color: 'blue', isOpen: true },
    { id: 3, color: 'black', isOpen: false },
    { id: 4, color: 'red', isOpen: false },
    { id: 5, color: 'blue', isOpen: false },
    { id: 6, color: 'blue', isOpen: false },
    { id: 7, color: 'red', isOpen: false },
    { id: 8, color: 'red', isOpen: false },
    { id: 9, color: 'blue', isOpen: false },
    { id: 10, color: 'red', isOpen: false },
    { id: 11, color: 'blue', isOpen: false },
    { id: 12, color: 'red', isOpen: false },
    { id: 13, color: 'blue', isOpen: false },
    { id: 14, color: 'red', isOpen: false },
    { id: 15, color: 'blue', isOpen: false },
    { id: 16, color: 'red', isOpen: false },
    { id: 17, color: 'yellow', isOpen: false },
    { id: 18, color: 'blue', isOpen: false },
    { id: 19, color: 'blue', isOpen: false },
    { id: 20, color: 'yellow', isOpen: false },
    { id: 21, color: 'yellow', isOpen: false },
    { id: 22, color: 'yellow', isOpen: false },
    { id: 23, color: 'yellow', isOpen: false },
    { id: 24, color: 'yellow', isOpen: false },
    { id: 25, color: 'red', isOpen: false },

]


const generateRandomisedCard = () => {
    let randomWords = [...words.wordset1].sort(() => Math.random() - 0.5)
    let randomColors = [...initialColors].sort(() => Math.random() - 0.5)
    let cards = []
    for (let i = 0; i < 25; i++) {
        cards.push({ word: randomWords[i], color: randomColors[i].color, isOpen: randomColors[i].isOpen })
    }
    console.log(cards, '\n ended');
    return cards;
}


// card component with color 
const card = ({ item }: { item: { word: string, color: string, isOpen: boolean } }, role: string) => {
    // const [colors, setColors] = useState(initialColors)
    const colors = initialColors;


    const getCardColor = () => {
        if (role != 'spymaster' && !item.isOpen) {
            return { top: 0 }
        }
        if (item.color === 'black') {
            return { bottom: -200 }
        }
        else if (item.color === 'blue') {
            return { bottom: -100 }
        }
        else if (item.color === 'red') {
            return { top: -200 }
        }
        else {
            return { top: 0 }
        }
    }
    const getTextColors = () => {
        if (role != 'spymaster' && !item.isOpen) {
            return { color: 'black' }
        }
        if (item.color === 'black') {
            return { color: 'white' }
        }
        else {
            return { color: 'black' }
        }
    }
    const getCardBgColor = () => {
        if (role != 'spymaster' && !item.isOpen) {
            return { backgroundColor: '#eed5b2' }
        }
        if (item.color === 'black') {
            return { backgroundColor: '#212121' }
        }
        else if (item.color === 'blue') {
            return { backgroundColor: '#3a8aa6' }
        }
        else if (item.color === 'red') {
            return { backgroundColor: '#d35a2b' }
        }
        else {
            return { backgroundColor: '#eed5b2' }
        }
    }
    const cardBgColor = getCardBgColor();
    const cardColor = getCardColor();
    const textColor = getTextColors();
    return (
        <View style={[styles.card, cardBgColor]}>
            <TouchableHighlight onPress={() => { }} style={[{ flex: 1 }, cardBgColor]}>
                <ImageBackground source={{ uri: 'https://cdn.codenames.game/v20210210/theme/classic/card/fronts.png' }} resizeMode='cover' imageStyle={[styles.imageStyle, cardColor]} style={styles.image}>
                    <Text style={[styles.cardText, textColor]}>
                        {item.word}
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    )
}


// main game component
const Game = (props: { navigation: { navigate: (arg0: string) => void } }) => {
    const route = useRoute<RouteProp<{ params: { nickname: string } }>>()
    const nickname = route.params.nickname;

    // generateRandomisedCard()

    // defining required states
    const [turn, setTurn] = useState(teams.red)
    const [statusText, setStatusText] = useState('Status goes here')
    const [hintText, setHintText] = useState('...');
    const [hintCount, setHintCount] = useState('_')
    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [cards, setCards] = useState([{ word: '', color: '', isOpen: false }])
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


    useEffect(() => {
        setCards(generateRandomisedCard())
    }, [])



    // constants
    const rc = 5; // row coloumn

    // handlers 
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
        <SafeAreaView style={styles.safe}>

            {/* Game controls like profile reset timer etc */}
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

            {/*  Show the current status of the game like whos turn */}
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>{statusText}</Text>
            </View>


            {/*  Crads are rendered here */}
            <View style={styles.cardContainer}>
                <FlatList
                    data={cards}
                    renderItem={(item => card(item, role))}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

            {/* Hints */}
            <View style={styles.hintContainer}>
                {role == roles.spymaster && turn == team ?
                    <>
                        <TextInput style={styles.hintText} placeholder='Enter hint' />
                        <TextInput style={styles.hintText} keyboardType='numeric' placeholder='0' />
                        <TouchableHighlight onPress={()=>{}}  >
                            <Text style={styles.hintText}>Send</Text>
                        </TouchableHighlight>
                    </>
                    :
                    <><Text style={styles.hintText}>{hintText}</Text>
                        <Text style={styles.hintText}>{hintCount}</Text></>
                }
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



// Styles 
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