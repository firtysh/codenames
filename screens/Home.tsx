import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { initID } from '../redux/slices/authSlice';

const Home = (props:{ navigation: { navigate: (arg0: string,arg1:any) => void }}) => {
const dispatch = useDispatch();
const handleNavigation = async (type:string) => {
    let id = await AsyncStorage.getItem('uid');
    if(!id){
      id = uuid.v4().toString();
      await AsyncStorage.setItem('uid', id);
    }
    dispatch(initID(id));
    props.navigation.navigate('Room',{type:type});
  };
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        animated={true}
        backgroundColor={'#161718'}
        showHideTransition={'fade'}
      />
      <View style={styles.container}>
        <View>
          <LinearTextGradient
            style={styles.heading}
            locations={[0, 1]}
            colors={['white', '#d1cfcccc']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.heading}>CODENAMES</Text>
          </LinearTextGradient>
          <LinearTextGradient
            style={styles.heading}
            locations={[0, 1]}
            colors={['#fee400', '#fa0']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.heading}>ONLINE</Text>
          </LinearTextGradient>
        </View>
        <Text style={styles.desc}>Play With Your Friends</Text>
        <TouchableHighlight
          onPress={() => {
            handleNavigation('create');
          }}>
          <LinearGradient
            style={styles.btnBorder}
            colors={['#3b3601', '#fee400', '#a24500']}
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 2}}>
            <LinearGradient
              style={styles.btn}
              colors={['#b7a400', '#b87a00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.btnText}>Create Room</Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            handleNavigation('join');
          }}>
          <LinearGradient
            style={styles.btnBorder}
            colors={['#3b3601', '#fee400', '#a24500']}
            start={{x: 0, y: 0}}
            end={{x: 0.5, y: 2}}>
            <LinearGradient
              style={styles.btn}
              colors={['#b7a400', '#b87a00']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Text style={styles.btnText}>Join Room</Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableHighlight>
        <LinearGradient
          colors={['#263409b3', 'transparent']}
          style={styles.instructionContainer}>
          <Text style={styles.instructionsHeading}>HOW TO PLAY:</Text>
          <Text style={styles.instructions}>
            <Text style={styles.instructionPoints}>1.</Text> Click on the CREATE
            ROOM button.
          </Text>
          <Text style={styles.instructions}>
            <Text style={styles.instructionPoints}>2.</Text> Select the
            preferred game settings and start the game.
          </Text>
          <Text style={styles.instructions}>
            <Text style={styles.instructionPoints}>3.</Text> Connect with your
            friends using your favorite audio or video chat.
          </Text>
          <Text style={styles.instructions}>
            <Text style={styles.instructionPoints}>4.</Text> Share the room URL
            with your friends.
          </Text>
          <Text style={styles.instructions}>
            <Text style={styles.instructionPoints}>5.</Text> Enjoy the game!
          </Text>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center', // horizontal
    justifyContent: 'space-evenly', // vertical
    backgroundColor: '#161718',
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  btnBorder: {
    borderRadius: 10,
    padding: 5,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d1cfcccc',
  },
  instructionsHeading: {
    color: '#d46898cc',
    fontWeight: 'bold',
    fontSize: 20,
  },
  instructionPoints: {
    color: '#d46898cc',
    fontWeight: 'bold',
    fontSize: 18,
  },
  instructions: {
    color: '#d1cfcccc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructionContainer: {
    padding: 20,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#fee400',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Home;
