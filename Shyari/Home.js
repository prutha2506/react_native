import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView } from 'react-native';

const Home = ({route,navigation}) => {
  const [board, setBoard] = useState(Array(20).fill(null));

  const renderBoard = () => {
    return board.map((cell, index) => (
      <Pressable key={index} onPress={() => navigation.navigate('Alone_shyari',{'levelno':index})} style={[styles.content,{backgroundColor: colors[index % colors.length]}]}>
        <Text style={styles.text}>{Quotes[index]}11</Text>
        <Image style={[styles.emoji]} resizeMode='contain' source={images[index]}></Image>
      </Pressable>
    ));
  };

  const Quotes = ['alone', 'angry', 'attitude', 'awesome', 'awkward moment', 'beard', 'beautiful', 'best', 'bike', 'birthday', 'break up', 'brother', 'busy', 'cheat', 'childhood', 'clever', 'college', 'cool', 'creative', 'cute', 'dance', 'emotional', 'exam', 'facebook', 'family', "father's day", 'flirt', 'food', 'forgiveness', 'friends', 'funny', 'god', 'good morning', 'good night', 'gym'];
  const images = [ require('./images/category113.png'),
   require('./images/category3.png'),
   require('./images/category5.png'),
   require('./images/category6.png'),
   require('./images/category7.png'),
   require('./images/category8.png'),
   require('./images/category9.png'),
   require('./images/category10.png'),
   require('./images/category11.png'),
   require('./images/category12.png'),
   require('./images/category74.png'),
   require('./images/category16.png'),
   require('./images/category17.png'),
   require('./images/category18.png'),
   require('./images/category19.png'),
   require('./images/category20.png'),
   require('./images/category21.png'),
   require('./images/category22.png'),
   require('./images/category24.png'),
   require('./images/category26.png'),
   require('./images/category27.png'),
   require('./images/category28.png'),
   require('./images/category29.png'),
   require('./images/category30.png'),
   require('./images/category31.png'),
   require('./images/category109.png'),
   require('./images/category32.png'),
   require('./images/category33.png'),
   require('./images/category114.png'),
   require('./images/category34.png'),
   require('./images/category35.png'),
   require('./images/category37.png'),
   require('./images/category38.png'),
   require('./images/category39.png'),
   require('./images/category40.png'),
 ];
  const colors = ['#00ADE5','#F70039','#F6C602','#A9181B','#BF73BB','#F38BAE','#F65C5E','#FF6090','#4BD462','#4F19AB','#9319A8','#FFB74B'];
  
  return ( 
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>best quotes & status</Text>
      <View style={styles.menubar}>
        <Image style={styles.menu} resizeMode='contain' source={require('./images/crown.png')}></Image>
        <Image style={styles.menu} resizeMode='contain' source={require('./images/menu-bar.png')}></Image>
      </View>
    </View>  
    <View style={styles.searchitem}>
      <TextInput style={styles.userinput} placeholderTextColor={'#756B66'}>
        <Image style={{height: 20}} source={require('./images/search-interface-symbol.png')} resizeMode='contain'></Image>
        <Text style={{color: '#756B66',fontWeight: 'bold'}}>search...</Text>
      </TextInput>
    </View>  
    <ScrollView style={{flex: 7}}>
      <View style={styles.row}>{renderBoard()}</View>
    </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: '#fff'
  },
  header: {
    flex: .06,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18 , 
    fontWeight: 'bold', 
    color: '#3d3d3d',
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  menubar: {
    flexDirection: 'row',
  },
  menu: {
    height: '80%',
    width: 40
  },
  searchitem:{
    flex: .1,
    justifyContent: 'center',
  },
  userinput: {
    backgroundColor: '#D3D3D3',
    borderRadius: 50,
    height: '70%',
  },
  row: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginVertical: '2%'
  },
  content: {
    height: 100,
    width: '45%',
    borderRadius: 5,
  },
  text: {
    fontSize : 14,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
  emoji: {
    height: '65%',
    alignSelf: 'flex-end',
  },
});
export default Home;
