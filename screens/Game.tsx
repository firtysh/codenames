import React, { useState, useEffect } from 'react'
import { SafeAreaView, View,StyleSheet,FlatList } from 'react-native'

// main game component
const Game = () => {


    const [statusText, setStatusText] = useState('Status goes here')

    const [role, setRole] = useState('')
    const [team, setTeam] = useState('')
    const [cards, setCards] = useState([{ word: '', color: '', isOpen: false }])


    useEffect(() => {
        setCards([])
    }, [])
    // constants
    const rc = 5; // row coloumn

    // handlers 

    return (
        <SafeAreaView style={styles.safe}>
            
            <View style={styles.cardContainer}>
                <FlatList
                    data={cards}
                    renderItem={(item => Card(item, role))}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
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
    cardContainer: {
        padding: 3,
    },

   


})

export default Game