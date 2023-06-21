import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, ImageBackground, TouchableHighlight } from 'react-native'
import words from '../../words'

// black : bottom -200 #212121
// blue : bottom -100 #3a8aa6
// red : top -100 #d35a2b
// yellow : top 0 #eed5b2


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
const card = ({ item, index }: { item: string, index: number }) => {
    const getCardColor = (index: number) => {
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
        if (colors[index].color === 'black') {
            return { color: 'white' }
        }
        else {
            return { color: 'black' }
        }
    }
    const getCardBgColor = (index: number) => {
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
    const rc = 5;
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
            <View style={styles.cardContainer}>
                <FlatList
                    data={words.wordset1}
                    renderItem={card}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.redContainer}>
                    <Text style={styles.scoreText}>Words left : 9</Text>
                </View>
                <View style={styles.logContainer}>
                <Text>Log</Text>
                </View>
                <View style={styles.blueContainer}>
                <Text style={styles.scoreText}>Words left : 8</Text>
                </View>
            </View>
            {/* </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#161718',
    },
    cardContainer: {
        flex: 1,
        padding: 3,
    },
    controlContainer: {
        marginVertical: 20,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    }
    ,
    footerContainer:{
        flexDirection: 'row',
        flex:1
    },
    scoreText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    redContainer: {
        flex: 1,
        backgroundColor: '#8f2b1c',
    },
    blueContainer: {
        flex: 1,
        backgroundColor: '#3284a3',
    },
    logContainer: {
        flex: 1,
        backgroundColor: '#212121',
    },
})

export default Game