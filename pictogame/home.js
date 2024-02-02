import React from "react";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

export const Home = ({navigation}) => {

    
    return(
        <View style={style.main}>
            <View style={style.imgmain}>
                <ImageBackground source={require("./img/homeimg.png")} style={style.img}>
                </ImageBackground>
            </View>
                
                <View style={style.btnnext}>
                    <Pressable style={style.button} onPress={()=>{navigation.navigate('game',{'levelno':1})}}> 
                        <Text style={style.txt}>CONTINUE</Text>
                    </Pressable>
                    <Pressable style={style.button} onPress={()=>{navigation.navigate('Level')}}> 
                        <Text style={style.txt}>LEVELS</Text>
                    </Pressable>
                </View>
           

               
            
        </View>
    )
}

const style = StyleSheet.create({
    main:{
        height:"80%",
        backgroundColor:"white"
    },
    imgmain:{
        height:"100%",
        justifyContent:"center",
    },
    img:{
        height:'100%',
        resizeMode:"contain",
    },
    btnnext:{
        height:"25%",
        width:"80%",
        alignSelf:"center",
        justifyContent:"space-around",

    },
    button:{
        height:"40%",
        backgroundColor:"white",
        borderRadius:30,
        shadowColor:"black",
        elevation:15,
        // marginTop:10,
    },
    txt:{
        height:"100%",
        fontSize:30,
        textAlign:"center",
        textAlignVertical:"center",
        color:"black",
        fontWeight:"900",
    }
})