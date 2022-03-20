import * as React from 'react';
import { View, Text, Button,StyleSheet, TextInput,ImageBackground,StatusBar,Image,SafeAreaView, ScrollView,TouchableHighlight, Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

function Chats({ navigation }) {
  return (
    
   <SafeAreaView style={{ flex:1,backgroundColor:'#001A33',justifyContent:'center'}}>
     <View>
      <ScrollView>
  <View>
    <StatusBar backgroundColor="blue" barStyle="dark-content" />
     <View style={{flex:2,borderRadius:10,marginTop:60}} > 
      <Text style={{
        color:"white",
        fontSize:40,
        fontWeight:'bold',
        paddingTop:5
      }}> Chats</Text>
     
      <TextInput title='Search' autoCapitalize='characters' placeholder='Search' keyboardAppearance='dark'  maxLength={30}
      style={{width:null,height:40,
      backgroundColor:'#EEEDEC',
      borderRadius:10,
      padding:10,
      color:'black',
      margin:10
      }}
      />

      <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',margin:18,borderBottomColor:'gray',borderBottomWidth:0.2,}}>
      <Button title='Broadcast List' color={'white'} letterSpacing={2}/>
      <Button title='New Group' color={'white'}/>
      </View>
      </View>
      

 {/* ========================================================================================== */}
        
  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/hannah.jpeg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Hannah Lormenyo</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>Hello thank you very much you ..</Text>

       </View>
       <View>
       <Text style={{color:'white'}}>3:30 PM</Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>

  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/evans.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Evans Ampofo</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>Man Open the door abeg..</Text>

       </View>
       <View>
       <Text style={{color:'white'}}>10:30 AM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>1</Text>
       </View>
    </View> 
  </TouchableHighlight>


  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/sis.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Christian Alanyo</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>Adey Hia Monies oo send me 2k </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight> 

  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'grey',borderBottomWidth:0.5}}>
    <Image source={require('./assets/den.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Dennis Alphatek</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>The Editting udoam abeg do am</Text>

       </View>
       <View>
       <Text style={{color:'white'}}>8:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight> 
  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.5}}>
    <Image source={require('./assets/sampi.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Victor Sampson </Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>Eee Vido</Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>


  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <TouchableHighlight onPress={() => Alert.alert('Hello image click ') }>
  
      
    <Image source={require('./assets/emma.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      </TouchableHighlight>
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Emmanuel Alanyo</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>bro what dey go on </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>

  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/alphatekgh.jpeg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>A-Levels</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>bbuy me the car oo this year </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>
  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/mill.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Freda Nuotaba</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}> dayvid,how are you </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>

  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/mill.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Millicient Akwaboa</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>bro what dey go on </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>


  <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/emma.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>0241444599</Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>bro what dey go on </Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>1</Text>
       </View>
    </View> 
  </TouchableHighlight>


  <TouchableHighlight onPress={()=> navigation.navigate(NavBars)} style={{margin:10}}>
  <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
    <Image source={require('./assets/dina.jpg')}
       style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
       <View>
       <Text style={{color:'white',textAlign:'left',fontSize:18}}>Dina GCD Hosp </Text>
       <Text style={{color:'white',textAlign:'left',fontSize:12,marginTop:6}}>deyvid whats going on</Text>

       </View>
       <View>
       <Text style={{color:'white'}}>1:30 PM </Text>
       <Text style={{color:'white',marginLeft:10,color:'white',margin:2}}>3</Text>
       </View>
    </View> 
  </TouchableHighlight>



    {/* =============================================================== */}
    </View>  
      </ScrollView>
      </View>
      <View 
      style={{
        backgroundColor:'#EEE4E2',
        height:100,
        paddingBottom:40,
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center'

      }}>


     <TouchableHighlight onPress={()=> navigation.navigate(Status)}>
      <View style={{ paddingBottom:4,}}>
        <Image source={require('./assets/btns/circle.png')} 
        style={{width:30,height:30}}
        />
        <Text>Satus</Text>
      </View>
     </TouchableHighlight>

     <TouchableHighlight onPress={()=> navigation.navigate(Call)}>
      <View style={{ paddingBottom:4,}}>
        <Image source={require('./assets/btns/call.png')} 
        style={{width:30,height:30}}
        />
        <Text>Calls</Text>
      </View>
     </TouchableHighlight>

     <TouchableHighlight onPress={()=> navigation.navigate(Camera)}>
      <View style={{ paddingBottom:4,}}>
        <Image source={require('./assets/btns/camera.png')} 
        style={{width:30,height:30}}
        />
        <Text>Camera</Text>
      </View>
     </TouchableHighlight>

     <TouchableHighlight onPress={()=> navigation.navigate(Chats)}>
      <View style={{ paddingBottom:4,}}>
        <Image source={require('./assets/btns/message.png')} 
        style={{width:30,height:30}}
        />
        <Text>Chats</Text>
      </View>
     </TouchableHighlight>

     <TouchableHighlight onPress ={() => navigation.navigate('Setting')} >
      <View style={{ paddingBottom:10,}}>
        <Image source={require('./assets/btns/setting.png')} 
        style={{width:40,height:30}}
        />
        <Text>Settings</Text>
      </View>
     </TouchableHighlight>      
      
      </View>
    </SafeAreaView>
    
  );
}


// THIS IS THE CHAT SCREEN 
function Chat({navigation}) {
  return (
    <ImageBackground source={require('./assets/hannah.jpeg')} style={
      {
      flex:1,
      resizeMode:'cover',
      opacity:0.7

    }}> 
   

  {/* Chating screen interface  */}
    <ScrollView title='ChatScreen' style={{flex:1}}>
    <View  title='Status bar'>
      <Text style={{color:'white',textAlign:'center'}}>Status side</Text>
    </View>

    <View style={{}}>
      <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>THANKS FOR THE ADVICE SENIOR Developer</Text>
      
      
   
    </View> 
    </ScrollView>
{/* message side  */}
    <View style={{flex:0,flexDirection:'row',alignItems:'flex-end',backgroundColor:'white',}}>
    <View style={styles.chatBtn}>
     <Button title='😁'/>
     <Button title='📎'/>

     <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
     
    
      <Button title='🎙️' onPress={()=> Alert.alert('recording in Progress ...')}/>
      
      </View>
    

    </View>

  
  </ImageBackground>
    
  );
}

// ================================= seting tab in whatsapp call
function Call({navigation}){
 
  return (
    <Text> call</Text>
  );
}
// ================================= here all the web  images
function Camera({navigation}){
 
  return (
    <Text> camera Tab</Text>
  );
}

// ===================================== Status  
function Status({navigation}){
 
  return (
 


   
    <SafeAreaView style={{ flex:1,backgroundColor:'white',justifyContent:'center'}}>
    <View>
     <ScrollView> 
 <View>
   <StatusBar backgroundColor="blue" barStyle="dark-content" />
    <View style={{flex:2,borderRadius:10,marginTop:60}} > 
     <Text style={{
       color:"black",
       fontSize:33,
       fontWeight:'bold',
       margin:10,
       
     }}> Status </Text>
    
     <TextInput title='Search' autoCapitalize='characters' placeholder='Search' keyboardAppearance='dark'  maxLength={30}
     style={{width:null,height:30,
     backgroundColor:'#EEEDEC',
     borderRadius:10,
     padding:10,
     color:'black',
     margin:10
     }}
     />

<TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{marginLeft:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/profile.jpeg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:5}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>My Status</Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>5h ago</Text>
      </View>
      <View style={{
        flex:1,
       flexDirection:'row',
       justifyContent:'flex-end'
        
        }}>
      <Image source={require('./assets/btns/camera.png')} 
       style={{width:30,height:30,margin:10}}
       />

        <Image source={require('./assets/btns/camera.png')} 
       style={{width:30,height:30,margin:10}}
       />

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>


     </View>
     <View style={{flex:1,height:50,borderBottomColor:'lightgray',borderBottomWidth:0.2, backgroundColor:'#EEEDEC',textAlign:'bottom'}}>
     <Text style={{color:'gray',margin:10,}}>RECENT UPDATES</Text>
     </View>



     

{/* ======================status ==================================================================== */}
       
 
<TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/hannah.jpeg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Hannah </Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>20s ago</Text>
      </View>
      <View>
     

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>
 <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/alphatekgh.jpeg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Alphatek Gh </Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>30m ago</Text>
      </View>
      <View>
      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>

 <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/freda.jpeg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Freda</Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>1h ago</Text>
      </View>
      <View>
     

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>

 <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/den.jpg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Dennis Alphatek</Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>1h ago</Text>
      </View>
      <View>
     

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>

 <TouchableHighlight onPress={()=> navigation.navigate(Chat)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/deyvid.jpeg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Big Sissi</Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>7h ago</Text>
      </View>
      <View>
     

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>

 <TouchableHighlight onPress={()=> navigation.navigate(Status)} style={{margin:10}}>
 <View style={{flex:1,justifyContent:'flex',flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.2}}>
   <Image source={require('./assets/emma.jpg')}
      style={{width: 60, height: 60 , borderRadius:100,marginBottom:10}} />
      <View style={{margin:10}}>
      <Text style={{color:'black',textAlign:'left',fontSize:18}}>Emmanuel </Text>
      <Text style={{color:'gray',textAlign:'left',fontSize:12,marginTop:6}}>8h ago</Text>
      </View>
      <View>
     

      </View>
      <View>
      
      </View>
   </View> 
 </TouchableHighlight>


 



   {/* ===================================footer ============================ */}
   </View>  
     </ScrollView>
     </View>
     <View 
     style={{
       backgroundColor:'lightgray',
       height:100,
       paddingBottom:40,
       justifyContent:'space-evenly',
       flexDirection:'row',
       alignItems:'center'

     }}>


    <TouchableHighlight onPress={()=> navigation.navigate(Status)} activeOpacity={0.6}
  underlayColor="#ffff">
     <View style={{ paddingBottom:4,}}>
       <Image source={require('./assets/btns/circle.png')} 
       style={{width:30,height:30}}
       />
       <Text>Satsus</Text>
     </View>
    </TouchableHighlight>

    <TouchableWithoutFeedback onPress={()=> navigation.navigate(Call)}>
     <View style={{ paddingBottom:4,}}>
       <Image source={require('./assets/btns/call.png')} 
       style={{width:30,height:30}}
       />
       <Text>Calls</Text>
     </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback onPress={()=> navigation.navigate(Camera)}>
     <View style={{ paddingBottom:4,}}>
       <Image source={require('./assets/btns/camera.png')} 
       style={{width:30,height:30}}
       />
       <Text>Camera</Text>
     </View>
    </TouchableWithoutFeedback>

    <TouchableHighlight onPress={()=> navigation.navigate(Chats)}>
     <View style={{ paddingBottom:4,}}>
       <Image source={require('./assets/btns/message.png')} 
       style={{width:30,height:30}}
       />
       <Text>Chats</Text>
     </View>
    </TouchableHighlight>
    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Setting')}>
    <View style={{ paddingBottom:10,}}>
       <Image source={require('./assets/btns/setting.png')} 
       style={{width:40,height:30}}
       />
       <Text>Settings</Text>
     </View>
    </TouchableWithoutFeedback>
     </View>
   </SafeAreaView>
  );
}








































// =================================
function Setting({navigation}){
 
  return (
    <Text> Setting</Text>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator  > 
      <Stack.Screen  
       options={{
            title: 'Chats',
            headerTitleStyle: {
              color: 'black',
              fontSize:20,
              textAlign:'center',
            },
            headerStyle: {
              backgroundColor: 'white',
             
              
            },
              headerRight: () =>(
              
                <TouchableHighlight  onPress={()=> Alert.alert('hehe')} style={{
                  tourchColor:null
                }}>  
  
                  <Image source={require('./assets/btns/camera.png')}
                 style={{
                 width:30,
                 height:30,
                 }} 
                  />
                </TouchableHighlight>
              ),

              headerLeft: () =>(
                <Button
                title="Edit"
                color='black'
                />
              ),
            headerShown:true
            }
          }  
          name ="Chats"component={Chats}/>
        <Stack.Screen name="Status" component={Status}
        options ={
          {
            headerLeft: () =>(
              <Button
              title="Privacy"
              onPress={()=> Alert.alert('Privacy Btn Pressed ')} style={{borderBottomColor:'black',borderBottomWidth:0.5}}
              />
            )
           
          }
        }
        
        />
       <Stack.Screen name="Camera" component={Camera}/>
       <Stack.Screen name="Call" component={Call}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name='Chat' component={Chat}  
      
        options={{

          headerRight:() => (
            <TouchableHighlight onPress={() => Alert.alert('Buttom Pressed')}>
              <Image  source={require('./assets/btns/call.png')}
              style={{
              width:30,
              height:30,
              }}
              />
            </TouchableHighlight>
          )
        }
       
      }
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 12,
    borderWidth:2,
    padding: 10,
    borderRadius:10,
    borderColor:'#fff',
    fontSize:24,
    color:'#fff',
    padding:20,
    
  },
  chatBtn:{
    backgroundColor:'white',
    margin:10,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  container: {
    flex: 1
  },
  inner: {
    padding: 13,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});
export default App;


