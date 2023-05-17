import React from 'react';
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

const Home = (props: {navigation: {navigate: (arg0: string) => void}}) => {
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
            props.navigation.navigate('Room');
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
    // justifyContent: 'center', // vertical
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
  btn: {
    backgroundColor: '#fee400',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Home;
