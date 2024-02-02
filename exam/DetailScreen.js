import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export const DetailScreen = ({route,navigation}) =>
{
    const [num,getnum] = useState("")
    const [levelNo,setlevelNo]=useState(1);
    const [DisplayValue, setDisplayValue] = useState('');
    const [skippedLevels, setskipped] =useState([]);
    const [coin,getcoin] = useState(10)
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('levelNo');
  
          if (value !== null) {
                console.log("Get Level =",value)
                setlevelNo(parseInt(value))
          }
        } catch (e) {
          // Handle error
        }
      };

      const getSkipLevelsFun  = async () => {
        try {
            const value = await AsyncStorage.getItem('skipLevels');
             var temp = value != null ? JSON.parse(value) : [];
             console.log("skipped",temp)
             setskipped(temp);
        } catch (e) {
          // error reading value
        }
      };
      useEffect(()=>{
        console.log(skippedLevels)
        setSkipLevelsFun(skippedLevels)
      },[skippedLevels])

      const setSkipLevelsFun = async(value) =>{
        try{
            if(value.length){
                const jsonValue = JSON.stringify(value);
                console.log(value)
                await AsyncStorage.setItem('skipped',jsonValue);
            }
        }  catch (e){

        }
      }
      

      
  useFocusEffect(
    React.useCallback(() => {
        getData();
        getSkipLevelsFun();
        getDataCoin();
    }, [])
  );


    const images =[
        require("./images/p1.png"),
        require("./images/p2.png"),
        require("./images/p3.png"),
        require("./images/p4.png"),
        require("./images/p5.png"),
        require("./images/p6.png"),
        require("./images/p7.png"),
        require("./images/p8.png"),
        require("./images/p9.png"),
        require("./images/p10.png"),
        require("./images/p11.png"),
        require("./images/p12.png"),
        require("./images/p13.png"),
        require("./images/p14.png"),
        require("./images/p15.png"),
        require("./images/p16.png"),
        require("./images/p17.png"),
        require("./images/p18.png"),
        require("./images/p19.png"),
        require("./images/p20.png"),
        require("./images/p21.png"),
        require("./images/p22.png"),
        require("./images/p23.png"),
        require("./images/p24.png"),
        require("./images/p25.png"),
        require("./images/p26.png"),
        require("./images/p27.png"),
        require("./images/p28.png"),
        require('./images/p29.png'),
        require('./images/p30.png'),
        require('./images/p31.png'),
        require('./images/p32.png'),
        require('./images/p33.png'),
        require('./images/p34.png'),
        require('./images/p35.png'),
        require('./images/p36.png'),
        require('./images/p37.png'),
        require('./images/p38.png'),
        require('./images/p39.png'),
        require('./images/p40.png'),
        require('./images/p41.png'),
        require('./images/p42.png'),
        require('./images/p43.png'),
        require('./images/p44.png'),
        require('./images/p45.png'),
        require('./images/p46.png'),
        require('./images/p47.png'),
        require('./images/p48.png'),
        require('./images/p49.png'),
        require('./images/p50.png'),
        require('./images/p50.png'),
        require('./images/p50.png'),
        require('./images/p50.png'),
        require('./images/p50.png'),
        require('./images/p51.png'),
        require('./images/p52.png'),
        require('./images/p53.png'),
        require('./images/p54.png'),
        require('./images/p55.png'),
        require('./images/p56.png'),
        require('./images/p57.png'),
        require('./images/p58.png'),
        require('./images/p59.png'),
        require('./images/p60.png'),
        require('./images/p61.png'),
        require('./images/p62.png'),
        require('./images/p63.png'),
        require('./images/p64.png'),
        require('./images/p65.png'),
        require('./images/p66.png'),
        require('./images/p67.png'),
        require('./images/p68.png'),
        require('./images/p69.png'),
        require('./images/p70.png'),
        require('./images/p71.png'),
        require('./images/p72.png'),
        require('./images/p73.png'),
        require('./images/p74.png'),
        require('./images/p75.png'),

    ];
                
    const trueAns = [ 10, 25, 6, 14, 128, 7, 50, 1025, 100, 3, 212, 3011, 14, 16, 1, 2, 44, 45, 625, 1, 13, 47, 50, 34, 6, 41, 16, 126, 82, 14, 7, 132, 34, 48, 42, 288, 45, 4, 111, 47, 27, 87, 22, 253, 12, 48, 178, 1, 6, 10, 2, 20, 7, 5, 143547, 84, 11, 27, 3, 5, 39, 31, 10, 130, 22, 3, 14, 42, 164045, 11, 481, 86, 84, 13, 8 ]
    function btnclick(n)
    {
        getnum(num+n)
    }
    function chack()
    {
        if (num == trueAns[levelNo-1]) {
            storeDataCoin(String(coin+20))
            temparr = [...skippedLevels]
            if(temparr.includes(levelNo)) {
                for(var i = 0; i < temparr.length; i++)  {
                    if(temparr[i] == levelNo) {
                        temparr[i]="";
                    }
                }
                setSkipLevelsFun(temparr);
            }
            setDisplayValue('');
            navigation.navigate('Winpage');
            getnum('')
            storeData((levelNo + 1).toString());
            }else {
                navigation.navigate('Losspage',{'levelNo' : levelNo});
                storeDataCoin(String(coin-20))
                setDisplayValue('');
            }
    }
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('levelNo', value);
        //   navigation.navigate('Winpage')
        } catch (e) {
          // saving error
        }
      };
    const storeData2 = async (value) => {
        try {
          await AsyncStorage.setItem('LevelNum', value);
          navigation.push('Detail')
        } catch (e) {
          // saving error
        }
      };
      function hint()
      {
          Alert.alert("Answer"+ansarr[important-1])
      }
    function deletetxt()
    {
        temp = num;
        getnum((temp.substring(0,temp.length-1)));
    }
    const getskip = [
        'Sum',
        'Multiply',
        'Multiply with next Number',
        'Count the boxes',
        'Check the difference of two numbers and Multiply it.',
        'Check the difference',
        'Sum',
        'Multiply',
        'Multiply with next Number',
        'Count the boxes',
        'Check the difference of two numbers and Multiply it.',
        'Check the difference',
        'Sum',
        'Multiply',
        'Multiply with next Number',
        'Count the boxes',
        'Check the difference of two numbers and Multiply it.',
        'Check the difference',
      ];
    
      const getDataCoin = async () => {
        try {
          const value = await AsyncStorage.getItem('Coin');
          if (value !== null) {
            getcoin(parseInt(value))
          }
        } catch (e) {
          // error reading value
        }
      };
      const storeDataCoin = async (value) => {
        try {
            await AsyncStorage.setItem('Coin',value);
        } catch (e) {
            // saving error
        }
      };
      function skip(){
       setskipped([...skippedLevels,levelNo])
       storeData((levelNo + 1).toString());
       navigation.push("Detail")
      }

      const storeSkipLevels = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('skipLevels', jsonValue);
        } catch (e) {
          // saving error
        }
      };

      useEffect(()=>{
        storeSkipLevels(skippedLevels);
      },[skippedLevels])
      function hint(){
        Alert.alert('Hint', getskip[levelNo - 1], [
            {text: 'OK',},
          ]);
      }

    return(
        <View style={style.main}>
            <ImageBackground source={require("./images/gameplaybackground.jpg")} resizeMode="stretch" style={style.main}>

                <View style={style.header}>
                    <Pressable style={style.skipperent} onPress={skip}> 
                        <Image source={require("./images/skip.png")} style={style.skip}></Image>
                    </Pressable>
                    <View style={style.nameboard__}> 
                        <ImageBackground source={require("./images/level_board.png")} style={style.nameboard} resizeMode="stretch" >
                            <Text style={style.leveltxt}>Puzzle {levelNo}</Text>
                        </ImageBackground>
                        
                    </View>
                    <Pressable style={style.skipperent} onPress={()=>hint()}> 
                        <Image source={require("./images/hint.png")} style={style.skip}></Image>
                    </Pressable>
                </View>
                <View style={{flex: .3,flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={style.coins_}>🪙</Text>
                        <Text style={style.coins_}>{coin}</Text>
             </View>

                <View style={style.boardperent}>
                    <Image source={images[levelNo-1]} style={style.boardimages} resizeMode="stretch"></Image>
                </View>

                <View style={style.footer}>
                    <View style={style.firstline}>
                        <Text style={style.txtdisplay}> {num}</Text>
                        <Pressable style={style.delete} onPress={deletetxt}>
                            <Image source={require("./images/delete.png")} style={style.deletetxt}></Image>
                        </Pressable>
                        <Pressable style={style.submit} onPress={chack} >
                            <Text style={style.submittxt}>SUBMIT</Text>
                        </Pressable>
                    </View>
                    <View style={style.secondline}>
                        <Pressable style={style.button} onPress={()=>{btnclick(1)}} ><Text style={style.buttontxt}>1</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(2)}} ><Text style={style.buttontxt}>2</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(3)}} ><Text style={style.buttontxt}>3</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(4)}} ><Text style={style.buttontxt}>4</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(5)}} ><Text style={style.buttontxt}>5</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(6)}} ><Text style={style.buttontxt}>6</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(7)}} ><Text style={style.buttontxt}>7</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(8)}} ><Text style={style.buttontxt}>8</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(9)}} ><Text style={style.buttontxt}>9</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(0)}} ><Text style={style.buttontxt}>0</Text></Pressable>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    main:{
        height:"100%",
        justifyContent:"space-around",
    },
    header:{
        height:"10%",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    skipperent:{
       height:"60%",
       width:"12%" ,
       alignSelf:"center",
    },
    skip:{
        height:"100%",
        width:"100%"
    },
    nameboard__:{
        height:"80%",
        width:"55%",
        alignSelf:"center",
    },
    nameboard:{
        height:"100%",
        width:"100%",
    },
    leveltxt:{
        height:"100%",
        fontSize:35,
        fontWeight:"900",
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
    },
    boardperent:{
        height:"50%",
        width:"90%",
        alignSelf:"center",
    },
    boardimages:{
        height:"100%",
        width:"100%"
    },
    footer:{
        height:"13%",
        backgroundColor:"black"
    },
    firstline:{
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    txtdisplay:{
        height:"70%",
        width:"60%",
        borderWidth:1,
        alignSelf:"center",
        backgroundColor:"white",
        fontSize:20,
        fontWeight:"600",
        color:"black",
        borderRadius:9,
        textAlignVertical:"center"
    },
    delete:{
        height:"100%",
        width:"13%",
    },
    deletetxt:{
        height:"100%",
        width:"100%"
    },
    submit:{
        height:"75%",
        width:"20%",
        alignSelf:"center",
    },
    submittxt:{
        height:"100%",
        fontSize:20,
        fontWeight:"700",
        color:"white",
        textAlign:"center",
        textAlignVertical:"center"
    },
    secondline:{
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    button:{
        height:"90%",
        width:"9%",
        alignSelf:"center",
        borderRadius:10,
        borderWidth:1,
        borderColor:"white"
    },
    buttontxt:{
        height:"100%",
        backgroundColor:"rgba(105,105,105,0.5)",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        borderRadius:10
    },
    coins_: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },    

})