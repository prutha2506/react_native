import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View ,Image ,ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


export const Lockpage =({navigation}) =>{

    const [bord,setBord] =useState([]);
    const [levelNo,setlevelNo]=useState(1);
    const [skippedLevels, setskipped] =useState([]);
    const [maxLevelvalue, setmaxlevel] = useState(1);

    useEffect(() =>{
        var temp = [];  
        var random = require('./images/lock.png')
        for(var i = 1; i <= 75; i++ ){
            temp.push(i);
        }
        setBord(temp);
    }, []);

    const getSkipLevelsFun = async () => {
        try {
          const value = await AsyncStorage.getItem('skipLevels');
          var temp = value != null ? JSON.parse(value) : [];
          console.log("skipped === ",temp)
          setskipped(temp);
         
        } catch (e) {
          // error reading value
        }
      };
      useFocusEffect(
        React.useCallback(() => {
          getData();
          getSkipLevelsFun();
          getMaxLevel();
        }, [])
      );
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('levelNo');
          if (value !== null) {
            console.log(levelNo)
            setlevelNo(parseInt(value))
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };

    const storeData = async (value) =>{
        try {
          await AsyncStorage.setItem('levelNo', value);
          navigation.navigate('Detail')
        } catch (e) {
          // saving error
        }
      };
      const getMaxLevel = async () => {
        try {
          const maxLevel = await AsyncStorage.getItem('maxLevelNum');
          if (maxLevel !== null) {
            setmaxlevel(maxLevel);
          }
        } catch (error) {
          // console.error('Error getting max level:', error);
        }
      };
    
      const storeMaxLevel = async (maxLevel) => {
        try {
          await AsyncStorage.setItem('maxLevelNum', maxLevel);
          //navigation.navigate('Levels');
        } catch (error) {
          // console.error('Error storing max level:', error);
        }
      };
      useFocusEffect(
        React.useCallback(()=>{
            if(parseInt(levelNo) > parseInt(maxLevelvalue))
            {
                storeMaxLevel(String(levelNo))
                console.log(levelNo)
            }
        },[levelNo])
    );
    

   
    return(
        <>
        
            <View>
                <ImageBackground source={require('./images/background.jpg')} style={{height:'100%',width:'100%'}}>

                <View>
                    <Text style={style.head}>Select puzzle</Text>
                </View> 
            <ScrollView>  

                <View style={style.level}>
                    {
                        bord.map((value, index)=>{
                            return(

                            (value < levelNo) ?
                                <View style={style.row}>
                                <Pressable onPress={() => storeData((index+1).toString())}>{
                                        skippedLevels.includes(value) ?
                                        <Text style={{ color: '#000', fontSize: 60, fontWeight: 'Bold', textAlign: 'center', paddingTop: 10, }}>{value}</Text> 
                                        :
                                        <>
                                         <ImageBackground source={require('./images/tick.png')} style={style.lock}><Text style={{ color: '#000', fontSize: 60, fontWeight: 'Bold', textAlign: 'center', paddingTop: 10, }}>{value}</Text></ImageBackground>
                                        </>
                                }
                        </Pressable>
                    </View>:
                    (value == levelNo) ?
                    <View style={style.row}>
                                <Pressable onPress={() => storeData((index+1).toString())}>
                                <Text style={{ color: '#000', fontSize: 60, fontWeight: 'Bold', textAlign: 'center', paddingTop: 10, }}>{value}</Text> 
                                </Pressable>
                                </View>:
                                <View style={style.row}>
                                <Pressable><Image source={require('./images/lock.png')} style={style.lock}></Image></Pressable>
                                </View>
                                
                               
                            )
                        })
                    }
                </View> 
                </ScrollView>
                            
                </ImageBackground>
            </View>
        </>
    )
}
export default Lockpage;
const style=StyleSheet.create({
    head: {
        textAlign: 'center',
        fontSize: 25,
        color: '#3f51b5',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    level:{
        // flex:8,
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'

    },
    lock:{
        width:100,
        height:100,
        
    },
    row:{
        width: 95,
        height:95
    }
   
})