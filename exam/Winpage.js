import { View, Text ,ImageBackground, StyleSheet, Pressable} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react'

export default function Winpage({route,navigation}) {
 
  return (
    <>  
    <ImageBackground source={require('./images/background.jpg')} style={style.Bg}>
   
    <View style={{flex:1.3,}}>
      <Text style={style.heading}> PUZZLE COMPLETED</Text>
    </View>
    <View style={{flex:7.5,width:'100%',alignItems:'flex-end',}}>
      <ImageBackground resizeMode='stretch' style={style.trophy} source={require('./images/trophy.png')}></ImageBackground>
    </View>
    <View style={{flex:1.2, marginTop:6,}}>
        <Pressable style={{width:'100%',alignItems:'center',}}><Text style={style.conBtn} onPress={()=>navigation.navigate(('Detail'))}>CONTINUE</Text></Pressable>
    </View> 
    <View style={{flex:1.2,}}>
     <Pressable style={{width:'100%',alignItems:'center',}}><Text style={style.conBtn} onPress={()=>navigation.navigate("Home")}>MAIN MENU</Text></Pressable>
    </View>
    <View style={{flex:0.9,}}>
      <Pressable style={{width:'100%',alignItems:'center',}}><Text style={style.conBtn}>BUY PRO</Text></Pressable>
    </View>
    <View style={{flex:1.2,}}>
    <Text style={style.bottom}>SHARE THIS PUZZLE</Text>

    </View>
    <View style={{flex:1,alignItems:'center',}}>
    <Pressable style={style.shareBtn}>
      <ImageBackground  style={style.share} source={require('./images/shareus.png')}></ImageBackground>
    </Pressable>
    </View>
    <View style={{flex:3,}}></View>






    </ImageBackground>
    </>

  )
}
const style=StyleSheet.create({
    Bg:{
        height:'100%',
        width:'100%',
    }  ,
    conBtn:{
      fontFamily:'sans-serif',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:25,
      width:200,
      color:'black',
      textAlign:'center',
      borderRadius:10,
      backgroundColor:'gray',
      borderColor:'black',
      borderWidth:2,
      borderStyle:'solid',

    },
    heading:{
      fontFamily:'sans-serif',
      fontStyle:'italic',
      fontWeight:'bold',
      fontSize:30,
      textAlign:'center',
      color:'#3f51bf',
  },
  bottom:{
    fontFamily:'sans-serif',
    fontStyle:'italic',
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    // marginBottom:5,
    color:'#3f51bf',
  },
  trophy:{
    height:'100%',
    width:'85%',
  },
  shareBtn:{
   alignItems:'center',
    width:40,
    height:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    borderStyle:'solid',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'gray',
},
share:{
  height:30,
  width:30,
}


})