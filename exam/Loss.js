import React, { useState } from "react";
import { Text, Pressable, StyleSheet, TextInput, View, ImageBackground, Image, _Image, } from "react-native";
function Loss({route,navigation}) {

    const {levelNo}=route.params;

    return (
        <>
            <View>
            <ImageBackground source={require('./images/background.jpg')} style={style.bg}>
            <Text style={style.mat}>Loss this Puzzles</Text>

                <Image source={require('./images/loss.png')} style={style.tr} resizeMode="stretch"></Image>
                <Pressable style={{margin:0,padding:0}}><Text style={style.tex} onPress={()=>navigation.navigate("Detail",{"levelNo":levelNo})}>Retry</Text></Pressable>
            
               
            </ImageBackground>                 
            </View>
        </>
    )
}

const style = StyleSheet.create({
   bg:{
    height:'100%',
    width:'100%',
   },
   mat: {
    fontSize: 25,
    color: '#6600df',
    fontStyle: "italic",
    fontFamily: 'SimSun',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '8%',
},
tr:{
    height:250,
    width:250, 
    marginHorizontal:'20%',
    marginTop:30,
},
tex:{
    backgroundColor:'#7D7A93',
    marginHorizontal:'25%',
    textAlign:'center',
    margin:5,
    padding:10, 
    width:'50%',
    borderRadius:15,
    fontWeight:'bold',
    fontSize:20,
    borderRadius:18,
    borderWidth:1,
    borderColor:'#fff',    
    shadowColor: '#fff',
    color:'#000',
    fontStyle:'italic',
    shadowColor:'white',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1
},
sh:{
    height:'6%',
    width:'12%',
    marginHorizontal:'43%',
    marginTop:10,
    backgroundColor:'#7D8A93',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#fff'
}
});
export default Loss;


