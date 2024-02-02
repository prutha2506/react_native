import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React, { useState,useEffect } from 'react'

export default function Alone_shyari({route}) {
  // const Contentpage = ({route, navigation}) =>{
  const [board,setboard]=useState(Array(50).fill(null));
  const [color, setColor] = useState([]);
  const {levelno} = route.params;
 console.log('lvl',levelno)
  useEffect(()=>{
    t = []
    for(var i=0;i<50;i++){
      t.push("#000")
    }
    setColor(t)
    }, [])
    const generateRandomColor = (ind) => {
      var cpy = [...color]
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      cpy[ind]= randomColor
      setColor(cpy);
    };
  
  const quotes = [
    [
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
    ],
    [
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
    ],
    [
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
    ],
    [
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
    ],
    [
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
    ],
    [
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
    ],
    [
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
      "The soul sees beauty may sometimes walk alone.",
      "when the people you love are gone, you're alone.",   
      "life could be wonderful if people would leave you alone.",
      "i never did anything alone.whatever was accomplished in this country was accomplished collectively.",
      "i would rather to be alone and a loud voice for action than be silent.",
    ],
    [
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
      "silence is the best way to react while angry.",
      "i'm the person that the more you complain about me, the harder i'll try to annoy me.",   
      "sometimes i'm just not in the mood to talk.",
      "sometimes you just wanna give people a high five to the face.",
      "an angry man opens his mouth and shuts his eyes.",
    ],
    [
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
      "laugh at your problems,everybody else does.",
      "don't hate me, just get to know me first!",   
      "the best thing about being me, i'm a limited edition and there are no other copies!",
      "when people judge you on what they are told or what they see..get too know me first.",
      "i have a new thory in life...what other people think of me is truly none of my buisness!",
    ],
  ];
  return (
    <>   
    
     <View style={{backgroundColor:'white',}}>
     <ScrollView>
      {
        board.map((value,index)=>(

          <View style={style.box} key={index}>
            <Pressable style={[style.shyari,{backgroundColor: color[index]}]} onPress={()=>generateRandomColor(index)} > 
            <Image source={require('./images/quote.png')}></Image>
              <Text style={style.shyariTxt}>
                {quotes[levelno][index]}
            </Text>
            <Image source={require('./images/double-quotes.png')}></Image>

            </Pressable>
            <View key={index} style={{flexDirection:'row', backgroundColor:'white', height:50,borderBottomLeftRadius:20,borderBottomRightRadius:20,shadowColor:'black',elevation:5,marginBottom:30,}}>
         
         <View style={{width:'25%',flexDirection:'row',justifyContent:'space-evenly',}}>
           <Image source={require('./images/like.png')} style={{height:25,width:25,alignSelf:'center',}}></Image>
           <Text style={{color:'black', fontSize:20,alignSelf:'center',}}>Like</Text>
         </View>
         <View style={{width:'25%',flexDirection:'row',justifyContent:'space-evenly',}}>
           <Image source={require('./images/like.png')} style={{height:25,width:25,alignSelf:'center',}}></Image>
           <Text style={{color:'black', fontSize:20,alignSelf:'center',}}>Save</Text>
         </View>
         <View style={{width:'25%',flexDirection:'row',justifyContent:'space-evenly',}}>
           <Image source={require('./images/like.png')} style={{height:25,width:25,alignSelf:'center',}}></Image>
           <Text style={{color:'black', fontSize:20,alignSelf:'center',}}>Copy</Text>
         </View>
         <View style={{width:'25%',flexDirection:'row',justifyContent:'space-evenly',}}>
           <Image source={require('./images/like.png')} style={{height:25,width:25,alignSelf:'center',}}></Image>
           <Text style={{color:'black', fontSize:20,alignSelf:'center',}}>Share</Text>
         </View>
       </View>
          </View>
    
       
    
      ))}
        </ScrollView>
    
    </View>
  
  
    </>

  )
}

const style=StyleSheet.create({
  shyari:{
    backgroundColor:'black',
   borderTopEndRadius:20,
   borderTopLeftRadius:20,
    height:400,
    
  },
  shyariTxt:{
    color:'white',
    fontSize:25,
    alignItems:'center',
  }
})