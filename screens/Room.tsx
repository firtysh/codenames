import { useEffect } from 'react';
import femaleImg from '../assets/codename_female.png';
import maleImg from '../assets/codename_male.png';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';
import { useState } from 'react';
import { socket, connectSocket } from '../socket'
import { useSelector,useDispatch } from 'react-redux';
import { joinRoom } from '../redux/slices/roomSlice';
import { useRoute } from '@react-navigation/native'

export default function Room(props: { navigation: { navigate: (arg0: string) => void }, route: { params: { type: string } } }) {
  const route = useRoute();
  const dispatch = useDispatch();
  const { type } = props.route.params
  const auth = useSelector((state: any) => state.auth);

  const handleCreateRoom = async (nickname: string) => {
    socket.emit('createRoom', { nickname: nickname });
  };
  const handleJoinRoom = async (nickname: string, roomId: string) => {
    socket.emit('joinRoom', { nickname: nickname, roomId: roomId });
  };

  useEffect(() => {
    if (socket && !socket.connected) {
      socket.connect();
    }
    if (!socket) {
      connectSocket(auth.id)
    }
    socket.on('connect', () => {
      console.log('connected');
    })
    socket.on('room_created', (roomDetail) => {
      console.log(roomDetail);
      dispatch(joinRoom(roomDetail))

      props.navigation.navigate('Config')

    })
    socket.on('room_joined', (roomDetail) => {
      dispatch(joinRoom(roomDetail))
      console.log(roomDetail);
      if(route.name === 'Room'){
        props.navigation.navigate('Config')
      }
    })
    socket.on('disconnect', () => {
      console.log('Disconnected');
    })
    return () => {
      socket.off('connect');
      socket.off('room_created')
      socket.off('room_joined')
      socket.off('disconnect')
    }
  }, [])
  const onChangeNickname = (text: string) => setNickname(text);
  const onChangeroomId = (text: string) => setroomId(text);
  const [nickname, setNickname] = useState('');
  const [roomId, setroomId] = useState('');
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.heading}>Welcome To{''}</Text>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#fee400', '#fa0']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}>
              <Text style={styles.heading}> Codenames</Text>
            </LinearTextGradient>
          </View>
          <View style={styles.imageContainer}>
            <Image source={maleImg} style={styles.image} />
            <Image source={femaleImg} style={styles.image} />
          </View>


          {type === 'create' && (
            <>
              <Text style={styles.text}>To enter the room, choose a nickname.</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNickname}
                value={nickname}
              />
              <TouchableHighlight
                onPress={() => {
                  if (nickname == '') {
                    console.warn("Cant be empty");
                    return;
                  }
                  handleCreateRoom(nickname);
                  // props.navigation.navigate('Game', { nickname: nickname });
                }}>
                <LinearGradient
                  style={styles.btnBorder}
                  colors={['#3b3601', '#fee400', '#a24500']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.5, y: 2 }}>
                  <LinearGradient
                    style={styles.btn}
                    colors={['#b7a400', '#b87a00']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={styles.btnText}>Create Room</Text>
                  </LinearGradient>
                </LinearGradient>
              </TouchableHighlight>
            </>
          )}

          {
            type === 'join' && (<>
              <Text style={styles.text}>Enter Room ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeroomId}
                value={roomId}
              />
              <Text style={styles.text}>To enter the room, choose a nickname.</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNickname}
                value={nickname}
              />
              <TouchableHighlight
                onPress={() => {
                  if (nickname == '' || roomId == '') {
                    console.warn("Cant be empty");
                    return;
                  }
                  handleJoinRoom(nickname,roomId);
                  // props.navigation.navigate('Game', { nickname: nickname });
                }}>

                <LinearGradient
                  style={styles.btnBorder}
                  colors={['#3b3601', '#fee400', '#a24500']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.5, y: 2 }}>
                  <LinearGradient
                    style={styles.btn}
                    colors={['#b7a400', '#b87a00']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={styles.btnText}>Join Room</Text>
                  </LinearGradient>
                </LinearGradient>
              </TouchableHighlight>
            </>)
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  image: {
    width: 125,
    height: 125,
  },
  imageContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'grey',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
  },
  btn: {
    backgroundColor: '#fee400',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  text: {
    fontWeight: 'bold',
    color: 'grey',
  },
});
