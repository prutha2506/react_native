import react, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ImageBackground, Pressable, Alert } from 'react-native'

export const Winpage = ({route,navigation}) =>
{
    console.log("test",route.params)
    const {levelno,word}= route.params;
    
    useEffect(() => {
        var temparr = [...arr]
      for(var i=0;i<word.length;i++)
      {
            temparr.push(word[i])
      } 
      setarr(temparr)
    }, [word])
    

    const [arr,setarr]=useState([])
    return (
      <View style={style.main}>
            <ImageBackground source={require('./img/win.jpg')} style={style.bgimg}>
                <View style={style.peta}>
                    <View style={style.wordperent}>
                        {
                            arr.map((val)=>{
                                return(
                                    <View style={style.letterpernt}>
                                        <Text style={style.txt}>{val}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Pressable style={style.button} onPress={()=>{navigation.navigate('game',{'levelno':levelno+1})}}></Pressable>
                </View>
            </ImageBackground>
      </View>
    ) 
}

const style = StyleSheet.create({
    main:{
        height:"100%",
        backgroundColor:"black"
    },
    bgimg:{
        height:"100%",
        width:"100%",
        justifyContent:"center"
    },
    peta:{
        height:"51%",
        // backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"space-between",
        marginTop:"61%"
    },
    wordperent:{
        height:"20%",
        width:"95%",
        backgroundColor:"orange",
        flexDirection:"row",
        justifyContent:"space-around",
        borderRadius:20,
        alignSelf:"center",
    },
    letterpernt:{
        height:"50%",
        width:"10%",
        alignSelf:"center",
        backgroundColor:"white",
        borderRadius:10,
    },
    txt:{
        height:"100%",
        fontSize:25,
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
        color:"black",
    },
    button:{
        height:"20%",
        width:"50%",
        alignSelf:"center",
        alignSelf:"center",
        // backgroundColor:"green",
    },
})