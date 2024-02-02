import React, { useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';

import { StyleSheet, View, Text, Pressable, Alert, Image, Button } from "react-native";

export const Gamepage = ({route,navigation}) => {

    const {levelno} = route.params;
    const [num,getnum] = useState("")
    const [box,setbox] = useState("")

    const [DisplayValue, setDisplayValue] = useState('');
    const [skippedLevels, setskipped] =useState([]);
    

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('levelno');
  
          if (value !== null) {
                console.log("Get Level =",value)
                setlevelNo(parseInt(value))
          }
        } catch (e) {
          // Handle error
        }
      };
       
  useFocusEffect(
    React.useCallback(() => {
        getData();
    }, [])
  );
      const [anslength,getanslength] = useState([])
      const [typeletter,gettypeletter] = useState([])
      const [coins,getcoins] = useState([50])

      const image_1 = [ 
        require('./img/pics-star6-1.jpg'), 
        require('./img/pics-foot1-1.jpg'), 
        require('./img/pics-sand3-1.jpg'), 
        require('./img/pics-fire3-1.jpg'), 
        require('./img/pics-ear1-1.jpg'), 
        require('./img/pics-horse1-1.jpg'), 
        require('./img/pics-key1-1.jpg'), 
        require('./img/pics-star6-1.jpg'), 
        require('./img/pics-foot1-1.jpg'), 
        require('./img/pics-sand3-1.jpg'), 
        require('./img/pics-fire3-1.jpg'), 
        require('./img/pics-ear1-1.jpg'), 
        require('./img/pics-horse1-1.jpg'), 
        require('./img/pics-key1-1.jpg'), 
        
    ];
    const image_2 = [ 
        require('./img/pics-art1-1.jpg'), 
        require('./img/pics-ball1-2.jpg'), 
        require('./img/pics-witch1-2.jpg'), 
        require('./img/pics-dog2-1.jpg'), 
        require('./img/pics-ring1-1.jpg'), 
        require('./img/pics-shoe1-1.jpg'), 
        require('./img/istockphoto-1344981650-170667a.jpg'), 
        require('./img/pics-art1-1.jpg'), 
        require('./img/pics-ball1-2.jpg'), 
        require('./img/pics-witch1-2.jpg'), 
        require('./img/pics-dog2-1.jpg'), 
        require('./img/pics-ring1-1.jpg'), 
        require('./img/pics-shoe1-1.jpg'), 
        require('./img/istockphoto-1344981650-170667a.jpg'), 
    ];  

   const rightans=[
                    "START","FOOTBALL","SANDWITCH","HOTDOG","EARRING",
                    "HORSESHOE","ICECREAM","START","FOOTBALL","SANDWITCH","HOTDOG","EARRING",
                    "HORSESHOE","ICECREAM",      
                  ]

    const findans = [
                        "SHKTGHALKLRNBT","LOOGJLLFJKTVBA","FSGANKDWIETCLH","FKHLAOVTNDMOKG","LESAERFRGIJNVG",
                        "AHOCRGSEBSHXOE","JIOCLEVCYREZAM", "SHKTGHALKLRNBT","LOOGJLLFJKTVBA","FSGANKDWIETCLH","FKHLAOVTNDMOKG","LESAERFRGIJNVG",
                        "AHOCRGSEBSHXOE","JIOCLEVCYREZAM",   
                    ]


    useEffect(()=>{
        var rightlength = rightans[levelno-1].length;
        var righttemp = []
        for(var i=1; i<=rightlength; i++)
        {
            righttemp.push('')
        }
        getanslength(righttemp)


        var findlength = findans[levelno-1];
        var findtemp = []
        for(var i=0;i<findlength.length;i++)
        {
            findtemp.push(findlength[i])
        }
        gettypeletter(findtemp)
    },[levelno])           

    const [temp,settemp] = useState(0)
    const [arr,setarr] = useState([])
    function btnpress(x)
    {
        var temparr =[...anslength]
        var justarr=[...arr]
        if(temparr[temp]=="")
        {
            temparr[temp]=findans[levelno-1][x]
            settemp(temp+1);
            justarr[temp]=(String(x))
        }
        if(temp==temparr.length)
        {
            settemp(0)
        }
        setarr(justarr)
        getanslength(temparr)
    }

    function btnpress2(c)
    {
        var arrr = [...arr];
        var temparr=[...anslength]

        for(var i=0;i<arrr.length;i++)
        {
            if(arr[c]==arrr[i])
            {
                temparr[c]=""
                arrr[i]=""
            }
        }
        setarr(arrr)
        getanslength(temparr)
    }
    useEffect(()=>{
        for(var i=0 ; i<anslength.length ; i++)
        {
            if(anslength[i]=="")
            {
                settemp(i)
                break;   
            }
        }
    },[anslength])

    useEffect(()=>{
        var useranswer = anslength.join("");
        var rightlength=rightans[levelno-1].length
        if(temp!=0)
        {
            if(useranswer.length==rightlength)
            {
                if(useranswer==rightans[levelno-1])
                {       
                    reset()
                    navigation.navigate('win',{'levelno':levelno,'word':rightans[levelno-1]})
                    getcoins(parseInt(coins)+50)

                }
                else
                {
                    navigation.navigate("loss",{"levelno":levelno})
                    getnum("");
                }
            }
            // if (useranswer == rightans[levelno-1]) {
            //     // storeDataCoin(String(coin+50))
            //     temparr = [...skippedLevels]
            //     if(temparr.includes(levelno)) {
            //         for(var i = 0; i < temparr.length; i++)  {
            //             if(temparr[i] == levelno) {
            //                 temparr[i]="";
            //             }
            //         }
            //         setSkipLevelsFun(temparr);
            //     }
            //     setDisplayValue('');
            //     //navigation.navigate('win');
            //     storeData((levelno + 1).toString());
            //     }else {
            //         // navigation.navigate('loss',{'levelno' : levelno});
            //         // storeDataCoin(String(coin-50))
            //         setDisplayValue('');
            //     }
        }
    },[temp])
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('levelno', value);
          //navigation.navigate('Win')
        } catch (e) {
          // saving error
        }
      };

    //   const storeData2 = async (value) => {
    //     try {
    //       await AsyncStorage.setItem('LevelNum', value);
    //       navigation.push('level')
    //     } catch (e) {
    //       // saving error
    //     }
    //   };
      
    //   function skip(){
    //     console.log('skip')
    //    setskipped([...skippedLevels,levelno])
    //    storeData2((levelno+1).toString());
    //   }
    
    function reset()
    {
        settemp(0)
        var templength = anslength.length;
        var temparr =[...anslength]
        setarr('')
        for(var i=0;i<templength;i++)
        {
            temparr[i]=""
        }
        getanslength(temparr)
    }
        
    return(
        <View style={style.continer}>
            <View style={style.main}>
                <View style={style.firstrow}>
                    <Text style={style.leveltxt}>LEVEL</Text>
                    <Text style={style.levelno}>{levelno}</Text>
                </View>
                <View style={style.coinmain}>
                    <View style={style.imgmain}>
                        <Image source={require("./img/dollar.png")} style={style.imgcoin}></Image>
                    </View>
                    <View style={style.txtmain}>
                        <Text style={style.cointxt}>{coins}</Text>
                    </View>
                </View>
                <View style={style.iconsett}>
                    <View style={style.settingmain}>
                        <Image source={require("./img/gear.png")} style={style.settimg}></Image>
                    </View>
                </View>
            </View>
            <View style={style.gamearea}>
                <View style={style.img_1perent}>
                    <Image source={image_1[levelno-1]} style={style.image_}></Image>
                </View>
                <Text style={style.plus}>+</Text>
                <View style={style.img_1perent}>
                    <Image source={image_2[levelno-1]} style={style.image_}></Image>
                </View>
            </View>
            <View style={style.keyborde}>
                <View style={style.first}>
                    {
                        anslength.map((val,ind)=>{
                            return(    
                                (val=='') ?
                                    <Pressable style={style.text}>
                                        <Text style={style.txt}>{val}</Text>
                                    </Pressable>
                                :
                                    <Pressable style={style.text} onPress={()=>{btnpress2(ind)}}>
                                        <Text style={[{backgroundColor:"orange"},style.txt]}>{val}</Text>
                                    </Pressable>
                            )
                        })
                    }
                </View>
        <View style={style.second}>
                    {
                        typeletter.map((val,ind)=>{
                            return(
                                (arr.includes(String(ind)))?
                                    <Pressable id="button" style={[style.presebal,{backgroundColor:"white"}]} onPress={()=>{btnpress(ind)}} disabled={true}>
                                        <Text style={[style.letter,{color:"white"}]}>{val}</Text>
                                    </Pressable>    
                                :
                                    <Pressable style={style.presebal} onPress={()=>{btnpress(ind)}}>
                                        <Text style={style.letter}>{val}</Text>
                                    </Pressable> 
                            )
                        })
                    }
            </View>
            
                <View style={style.other}>
                    <Pressable style={style.reload} onPress={()=>{reset()}}>
                        <View style={style.iconmain}>
                            <Image source={require('./img/reload.png')} style={style.reloadicon}></Image>
                        </View>
                    </Pressable>
                    <Pressable style={style.reload} onPress={()=>{skip()}}>
                        <View style={style.iconmain}>
                            <Image source={require('./img/reload.png')} style={style.reloadicon}></Image>
                        </View>
                    </Pressable>
                </View>
            
            </View>

        </View>
    )    
} 

const style = StyleSheet.create({
    continer:{
        height:"100%",
        backgroundColor:"skyblue",
    },
    main:{
        height:"9%",
        backgroundColor:"rgba(0,0,0,0.1)",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:6,
        paddingRight:6,
    },
    firstrow:{
        height:"100%",
        width:"13%",
    },
    leveltxt:{
        height:"30%",
        fontSize:16,
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
    },
    levelno:{
        height:"70%",
        fontSize:30,
        fontWeight:"900",
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
    },
    coinmain:{
        height:"100%",
        width:"25%",
        flexDirection:"row",
    },
    imgmain:{
        height:"60%",
        width:"30%",
        alignSelf:"center",
    },
    imgcoin:{
        height:"100%",
        width:"100%",
        resizeMode:"contain"
    },
    txtmain:{
        height:"100%",
        width:"65%",
    },
    cointxt:{
        height:"100%",
        fontSize:25,
        color:"black",
        textAlignVertical:"center",
    },
    iconsett:{
        height:"65%",
        width:"16%",
        borderRadius:10,
        alignSelf:"center",
        backgroundColor:"#0083A3",
        justifyContent:"center",
    },
    settingmain:{
        height:"75%",
        width:"55%",
        alignSelf:"center",
    },
    settimg:{
        height:"100%",
        width:"100%",
        resizeMode:"contain"
    },
    gamearea:{
        height:"56%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    img_1perent:{
        height:"45%",
        
        width:"45%",
        justifyContent:"center",
    },
    image_:{
        height:"97%",
        borderColor:'white',
        borderWidth:8,
        width:"97%",
        alignSelf:"center",
        resizeMode:"contain",
    },
    plus:{
        height:"40%",
        width:"6%",
        fontSize:50,
        textAlign:"center",
        textAlignVertical:"center",
        fontWeight:"900",
        color:"black"
    },
    keyborde:{
        height:"35%",
        backgroundColor:"white",
    },
    first:{
        height:"25%",
        backgroundColor:"#ffc40c",
        justifyContent:"center",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    text:{
        height:"65%",
        width:"11%",
        backgroundColor:"white",
        alignSelf:"center",
        justifyContent:'center',
    },
    txt:{
        height:"95%",
        width:"95%",
        fontSize:27,
        fontWeight:"900",
        color:"black",
        alignSelf:"center",
        textAlign:"center",
        textAlignVertical:"center",
    },
    second:{
        height:"50%",
        backgroundColor:"white",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        alignContent:"space-around"
    },
    other:{
        height:"24%",
        justifyContent:"space-around",
        flexDirection:"row",
    },
    reload:{
        height:"90%",
        width:"13%",
        borderRadius:50,
        backgroundColor:"white",
        elevation:3,
        shadowColor:'black',
        // borderWidth:2,
        alignSelf:"center",
        justifyContent:"center"
    },
    iconmain:{
        height:"80%",
        width:"80%",
        alignSelf:"center",
    },
    reloadicon:{
        height:"90%",
        width:"100%",
        resizeMode:"center",
    },
    presebal:{
        height:"40%",
        width:"13%",
        backgroundColor:"#ffc40c",
       
    },
    letter:{
        height:"100%",
        fontSize:35,
        textAlign:"center",
        textAlignVertical:"center",
        color:"black",
        fontWeight:"600"
    },
})