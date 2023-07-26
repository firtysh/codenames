import { SafeAreaView, View, Text, TouchableHighlight, StyleSheet } from "react-native"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../redux/store"
import { newPlayer } from "../redux/slices/playerSlice"
import { updateRole, updateTeam } from "../redux/slices/authSlice"
import { socket } from "../socket"

function Config(props: { navigation: { navigate: (arg0: string) => void } }) {
  const dispatch = useDispatch();
  const room = useSelector((state: RootState) => state.room)
  const auth = useSelector((state: RootState) => state.auth)
  const players = useSelector((state: RootState) => state.player)

  const redSpymasters = players.filter((item) => {
    return item.team === 'red' && item.role === 'spymaster'
  })
  const blueSpymasters = players.filter((item) => {
    return item.team === 'blue' && item.role === 'spymaster'
  })
  const redOperatives = players.filter((item) => {
    return item.team === 'red' && item.role === 'operative'
  })
  const blueOperatives = players.filter((item) => {
    return item.team === 'blue' && item.role === 'operative'
  })

  const handleJoin = (role: string, team: string) => {
    dispatch(updateTeam(team))
    dispatch(updateRole(role))
    socket.emit('join_team', {
      id: auth.id,
      name: auth.name,
      role: role,
      team: team,
      roomId: room.roomId
    })
  }

  const handleStart= ()=>{
    if (players.length=== room.members.length) {
      props.navigation.navigate('Game')
    }else{
      console.error('Can not start')
    }
  }

  useEffect(() => {
    socket.on('joined_team', (data) => {
      console.log('config.tsx l45', data);

      dispatch(newPlayer(data))
    })

    return () => {
      socket.off('joined_team')
    }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <GameControls/> */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          In the room
        </Text>
        <Text selectable={true} style={{ fontSize: 18, fontWeight: 'bold', color: '#FFF', textAlign: 'center', padding: 3 }} >{room.roomId}</Text>
        <View style={styles.roomMembers}>
          {
            room.members.map((item, i) => <Text key={i} style={[styles.textChip, { borderColor: '#FFF' }]}>{item.name}{item.owner && ' 👑'} </Text>)
          }
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.redContainer}>
          <Text style={[styles.scoreText, { color: '#e65831' }]}>Operative(s)</Text>
          <View style={styles.roleContainer}>
            {/* Red operative */}
            {redOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831', color: '#e65831' }]}>{i.name}</Text>)}
            {auth.role === '' && <TouchableHighlight onPress={() => {
              handleJoin('operative', 'red')
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
          </View>
          <Text style={[styles.scoreText, { color: '#e65831' }]}>Spymaster</Text>
          <View style={styles.roleContainer}>
            {/* Red Spymaster */}
            {redSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831' }]}>{i.name}</Text>)}
            {auth.role === '' && <TouchableHighlight onPress={() => {
              handleJoin('spymaster', 'red')
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
          </View>
        </View>
        <View style={styles.blueContainer}>
          <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Operative(s)</Text>
          <View style={styles.roleContainer}>
            {/* Blue operative */}
            {blueOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9', color: '#7bcae9' }]}>{i.name}</Text>)}
            {auth.role === '' && auth.team === '' && <TouchableHighlight onPress={() => {
              handleJoin('operative', 'blue')
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: 'white' }]}>Join</Text></TouchableHighlight>}
          </View>
          <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Spymaster</Text>
          <View style={styles.roleContainer}>
            {/* Blue Spymasters */}
            {blueSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9' }]}>{i.name}</Text>)}
            {auth.role === '' && <TouchableHighlight onPress={() => {
              handleJoin('spymaster', 'blue')
            }}><Text style={[styles.textChip, { borderColor: 'white', color: 'white' }]}>Join</Text></TouchableHighlight>}
          </View>
        </View>
      </View>
      {
        room.members.find((i) => {
          return i.owner && i.id === auth.id
        }) && <View style={styles.buttonContainer} >
          <TouchableHighlight onPress={() => {handleStart() }} style={{ padding: 10 }}>
            <Text style={styles.headerText}>Start</Text>
          </TouchableHighlight>
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    flex: 1
  },
  headerContainer: {
    gap: 5,
    flex: 0.5,
    flexDirection: 'column'
  },
  headerText: {
    textAlign: 'center',
    color: '#fee400',
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  roomMembers: {
    flexDirection: 'row',
    padding: 4,
    flexWrap: 'wrap',
    backgroundColor: '#3b3601',
    flex: 1,
    borderRadius: 5,
    gap: 5
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
  buttonContainer: {
    marginBottom: 10
  }
})


export default Config