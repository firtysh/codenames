import { SafeAreaView, View, Text, TouchableHighlight, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import { RootState } from "../redux/store"

function Config(props: { navigation: { navigate: (arg0: string) => void } }) {
  const room = useSelector((state: RootState) => state.room)
  const auth = useSelector((state: RootState) => state.auth)
  const players = useSelector((state: RootState) => state.player)
  console.log(room);
  console.log(players);
  const redSpymasters = players.filter((item) => {
    return item.team === 'red' && item.role === 'spymaster'
  })
  const blueSpymasters = players.filter((item) => {
    return item.team === 'blue' && item.role === 'spymaster'
  })
  const redOperatives = players.filter((item) => {
    return item.team === 'blue' && item.role === 'operative'
  })
  const blueOperatives = players.filter((item) => {
    return item.team === 'blue' && item.role === 'operative'
  })

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.footerContainer}>
        <View style={styles.redContainer}>
          <Text style={[styles.scoreText, { color: '#e65831' }]}>Operative(s)</Text>
          <View style={styles.roleContainer}>
            {/* Red operative */}
            {redOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831', color: '#e65831' }]}>{i.name}</Text>)}
            {auth.role == '' && <TouchableHighlight onPress={() => {
              // handleJoin(roles.operative, teams.red)
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
          </View>
          <Text style={[styles.scoreText, { color: '#e65831' }]}>Spymaster</Text>
          <View style={styles.roleContainer}>
            {/* Red Spymaster */}
            {redSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#e65831' }]}>{i.name}</Text>)}
            {auth.role == '' && <TouchableHighlight onPress={() => {
              // handleJoin(roles.spymaster, teams.red)
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: '#fff' }]}>Join</Text></TouchableHighlight>}
          </View>
        </View>
        {/* ########################################################### */}
        <View style={styles.blueContainer}>
          <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Operative(s)</Text>
          <View style={styles.roleContainer}>
            {/* Blue operative */}
            {blueOperatives.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9', color: '#7bcae9' }]}>{i.name}</Text>)}
            {auth.role == '' && auth.team == '' && <TouchableHighlight onPress={() => {
              // handleJoin(roles.operative, teams.blue)
            }}><Text style={[styles.textChip, { borderColor: '#fff', color: 'white' }]}>Join</Text></TouchableHighlight>}
          </View>
          <Text style={[styles.scoreText, { color: '#7bcae9' }]}>Spymaster</Text>
          <View style={styles.roleContainer}>
            {/* Blue Spymasters */}
            {blueSpymasters.map((i, index) => <Text key={index} style={[styles.textChip, { borderColor: '#7bcae9' }]}>{i.name}</Text>)}
            {auth.role == '' && <TouchableHighlight onPress={() => {
              // handleJoin(roles.spymaster, teams.blue)
            }}><Text style={[styles.textChip, { borderColor: 'white', color: 'white' }]}>Join</Text></TouchableHighlight>}

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    height:100,
    flexDirection: 'row',
    flex: 1
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
})


export default Config