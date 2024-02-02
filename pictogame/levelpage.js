
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Pressable, TextInput, TouchableHighlight } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFocusEffect } from '@react-navigation/native';

const Gamelevels = ({route,navigation}) => {
 const [board, setBoard] = useState([]);

 useEffect(() => {
    var temp = [];
    for (var i = 1; i <= 28; i++){
      temp.push(i);
    } 
    setBoard(temp);
  }, []); 

 return (
  <View style={styles.container}>
    <ImageBackground source={require('./img/download.jpeg')} resizeMode='stretch' style={styles.gameplaybackground}>
      <View style={styles.heading}>
        <Text style={styles.title}>select Puzzles</Text>
      </View>
      <View style={styles.levelmain}>
      {
        board.map((item, index) => {
        return(
          <View style={[styles.levels]}>
            <TouchableOpacity style={styles.row} key={index} onPress={() => navigation.navigate('game',{'levelno' : item})}>
              <Image resizeMode='contain' style={styles.lock} source={require('./img/lock.png')}></Image>
            </TouchableOpacity>
          </View>
        )
        })
      }
      </View>
    </ImageBackground>   
  </View>
  );
};

const styles = StyleSheet.create({
  gameplaybackground: {
    height: '100%',
    width: '100%'
  },
  heading:{
    flex: 0.5,
  },
  title: {
    fontSize: 28,
    color:'#3F51B5',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  levelmain:{
    flex: 6,
    flexDirection:'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: '2%'
  },
  levels: {
    height:'13%',
    width:'24%',
  },
  lock: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
  },
  skip :{
    flex:  1,
  },
  next :{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '50%',
    paddingHorizontal: 20,
    marginBottom: '10%'
  },
  nextlevel: {
    flexGrow: 1,
    height: '40%',
    width: '40%',
  },
});
export default Gamelevels;
