import { SafeAreaView, View, StyleSheet, FlatList, GestureResponderEvent } from 'react-native'
import Card from '../components/Card'
import GameControls from '../components/GameControls'
import GameStatus from '../components/GameStatus'
import Hint from '../components/Hint'
import Footer from '../components/Footer'
import { useSelector ,useDispatch} from 'react-redux'
import { RootState } from '../redux/store'
import { socket } from '../socket'
import { useEffect } from 'react'
import { setCards } from '../redux/slices/cardsSlice'

// main game component
const Game = () => {

    const dispatch = useDispatch()

    // states
    const cards = useSelector((state: RootState) => state.cards)
    const auth = useSelector((state: RootState) => state.auth)
    const turn = useSelector((state: RootState) => state.teamData.turn)

    // constants
    const rc = 5; // row coloumn

    const handleClick = (index: number) => {
        if (turn !== auth.team) return
        if (auth.role === 'spymaster') return
        socket.emit('cardClicked', index)
    }

    const handleLongPress = (index: number) => {
        if (turn !== auth.team) return
        if (auth.role === 'spymaster') return
        console.log('Long pressed', index)
        socket.emit('cardFlipped', index)
    }

    useEffect(() => {
        socket.on('cardClicked', (data) => {
            console.log('card clicked', data);
            dispatch(setCards(data))
            

        })
        socket.on('cardFlipped', (data) => {
            console.log('card flipped', data);
            dispatch(setCards(data))
        }
        )
        return () => {
            socket.off('cardClicked')
            socket.off('cardFlipped')
        }
    }, [])

    return (
        <SafeAreaView style={styles.safe}>
            <GameControls />
            <GameStatus />
            <View style={styles.cardContainer}>
                <FlatList
                    data={cards}
                    renderItem={(item => Card(item, auth.role, () => handleClick(item.index), () => handleLongPress(item.index)))}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Hint />
            <Footer />
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