import { SafeAreaView, View,StyleSheet,FlatList } from 'react-native'
import Card from '../components/Card'
import GameControls from '../components/GameControls'
import GameStatus from '../components/GameStatus'
import Hint from '../components/Hint'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

// main game component
const Game = () => {

    // states
    const cards = useSelector((state:any)=>state.cards)
    const auth = useSelector((state:any)=>state.auth)
   
    // constants
    const rc = 5; // row coloumn

    return (
        <SafeAreaView style={styles.safe}>
            <GameControls/>
            <GameStatus/>
            <View style={styles.cardContainer}>
                <FlatList
                    data={cards}
                    renderItem={(item => Card(item, auth.role))}
                    numColumns={rc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Hint/>
            <Footer/>
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