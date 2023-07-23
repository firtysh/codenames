import { SafeAreaView } from "react-native"
import {  useSelector } from "react-redux"

function Config(props: { navigation: { navigate: (arg0: string) => void }}) {
  const room = useSelector((state: any) => state.room)
  console.log(room);
  
  return (
    <SafeAreaView>

        
    </SafeAreaView>
  )
}

export default Config