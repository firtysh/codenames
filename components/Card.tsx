import { View, TouchableHighlight, Text, ImageBackground, StyleSheet, GestureResponderEvent } from "react-native"
import { useState } from "react"

const Card = function ({ item }: { item: { word: string, color: string, isOpen: boolean, isClicked: boolean } }, role: string, handleClick: () => void, handleLongPress: () => void) {

    // black : bottom -200 #212121
    // blue : bottom -100 #3a8aa6
    // red : top -100 #d35a2b
    // yellow : top 0 #eed5b2



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
        <TouchableHighlight  onLongPress={() => handleLongPress()} onPress={() => { handleClick() }} style={[styles.card, cardBgColor]}>
            <ImageBackground source={{ uri: 'https://cdn.codenames.game/v20210210/theme/classic/card/fronts.png' }} resizeMode='cover' imageStyle={[styles.imageStyle, cardColor]} style={styles.image}>
                <Text style={[styles.cardText, textColor]}>
                    {item.word}
                </Text>
                <Text>{item.isClicked ? '👆' : ''}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
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
})


export default Card;