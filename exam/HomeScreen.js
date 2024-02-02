import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class HomeScreen extends Component {
    
  render() {
    return (
        <>
      <View style={style.main}>
            <ImageBackground source={require('./images/background.jpg')} style={style.Bg}>
                <View style={{flex:1}}>
                    <Text style={style.heading}>Math Puzzle</Text>
                </View>
                <View style={{flex:5}}>
                <ImageBackground resizeMode='stretch' source={require('./images/blackboard_main_menu.png')} style={style.bord}>
                       <Pressable style={style.BlackBord}><Text style={style.Txt} onPress={()=>this.props.navigation.navigate('Detail')}>CONTINUE</Text></Pressable>
                       <Pressable style={style.BlackBord}><Text style={style.Txt} onPress={() => this.props.navigation.navigate('Lockpage')}>PUZZLES</Text></Pressable>
                       <Pressable style={style.BlackBord}><Text style={style.Txt}>BUY PRO</Text></Pressable>
                    </ImageBackground>
                </View>
                <View style={{flex:1,flexDirection:'row',}}>
                <Pressable style={style.adIcone}>
                    <ImageBackground source={require('./images/ltlicon.png')} style={style.adicon}></ImageBackground>
                    </Pressable>
               

                </View>
            </ImageBackground>
      </View>
      </>
    ) 
  }
}
const style=StyleSheet.create({
    share:{
        height:100,
        width:100,
    },
    icone:{
        height:30,
        width:30,
    },
    Bg:{
        height:'100%',
        width:'100%',
    },
    heading:{
        fontFamily:'sans-serif',
        fontStyle:'italic',
        fontWeight:'bold',
        // marginTop:'20%',
        fontSize:50,
        textAlign:'center',
        color:'#3f51bf',
    },
    bord:{ 
        flex:0,
        justifyContent:'center',
        width:'100%',
        height:'100%',
    },
    Txt:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        fontFamily:'PWChalk',
        color:'white',
    },
    hedder:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignContent:'flex-end',
    },
    shreBTn:{
        backgroundColor:'gray',
        borderBlockColor:'black',
        borderWidth:3,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:10,
        padding:10,
        marginTop:10,
        marginLeft:235,
        borderStyle:'solid',

    },
    share:{
        height:20,
        width:20,
        
    },
    emaileBTn:{
        backgroundColor:'gray',
        borderBlockColor:'black',
        borderWidth:3,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:10,
        // padding:5,
        marginLeft:15,
        marginTop:10,
        borderStyle:'solid',

    },
    email:{
        height:20,
        width:30,
        
    },
    adIcone:{
        marginTop:35,
        marginLeft:10,
    },
    adicon:{
        height:70,
        width:70,
    }

    

})