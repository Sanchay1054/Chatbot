import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {NavigationContainer}  from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView, TextInput } from 'react-native-web';

function TomatoView({navigation})
{
  let tomato = [{TomatoName:"Tomato1 (Bulk Order)",quantity:50,price:50,state:'Tamil Nadu',contact:9123456789},{TomatoName:"Tomato1 (Bulk Order)",quantity:50,price:50,state:'Tamil Nadu',contact:9123456789},{TomatoName:"Tomato1 (Bulk Order)",quantity:50,price:50,state:'Tamil Nadu',contact:9123456789},{TomatoName:"Tomato1 (Bulk Order)",quantity:50,price:50,state:'Tamil Nadu',contact:9123456789}]
  return(
    <View><Pressable style={{margin:'5%',alignItems:'center',backgroundColor:'#00F',color:'white',borderRadius:'5px',fontSize:'110%',padding:'2%',justifyContent:'center'}} onPress={()=>{navigation.navigate('tomatoAdd')}} title="Sell Tomatoes">Sell Tomatoes</Pressable><ScrollView style={styles.content}>{tomato.map((t,index)=>(<View style={styles.tscreen}><b style={{backgroundColor:'#0F0',padding:'2%',color:'black'}}>{t.TomatoName}</b><br/>{t.quantity+" Kg"}<br/>{"Rs."+t.price+" /kg"}<br/>{t.state}<br/>{t.contact}</View>))}</ScrollView></View>
  )
}

function TomatoAdd()
{
  return(
    <View style={styles.text}>
      <b>Only Bulk Orders</b><br/>
      <form>
        Tomato Order Name<br/><TextInput style={styles.input}/><br/>
        Quantity<br/><TextInput style={styles.input}/><br/>
        Price per Kg<br/><TextInput style={styles.input}/><br/>
        State<br/><select><option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option></select><br/>
        Contact<br/><TextInput style={styles.input}/><br/>
        <Pressable title="Submit" style={{alignItems:'center',padding:'2%',color:'white',margin:'2%',backgroundColor:'#00F'}}>Sumbit</Pressable>
      </form>
    </View>
  )
}

const Tomato = createNativeStackNavigator();
function TomatoScreen()
{
  return(
    <Tomato.Navigator>
      <Tomato.Screen name="Tomato" component={TomatoView}/>
      <Tomato.Screen name="tomatoAdd" component={TomatoAdd}/>
    </Tomato.Navigator>
  )
}


function FertilizerAdd({navigation})
{
  return(
    <View style={styles.text}>
      <form>
      Fertilizer Name<br/><TextInput style={styles.input}/><br/>
      Fertilizer Description<br/><TextInput style={styles.input}/><br/>
      State<br/><select><option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option><option>Maharashtra</option></select><br/>
      <View style={{}}>Contact<br/><TextInput style={styles.input}/></View>
      <Pressable value="submit" style={{alignItems:'center',backgroundColor:'#00F',padding:'2%',color:'white',borderRadius:'5px',margin:'2%'}}>Submit</Pressable>
      </form>
    </View>
  )
}
function FertilizerView({navigation})
{
  let fertilizer = [{fertilizerName:"Fertilizer1",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789},{fertilizerName:"Fertilizer2",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789},{fertilizerName:"Fertilizer2",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789},{fertilizerName:"Fertilizer2",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789},{fertilizerName:"Fertilizer2",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789},{fertilizerName:"Fertilizer2",description:"This is fertilizer1.",state:"Tamil Nadu",contact:9123456789}]
  //{fertilizer.map((f,index)=>{<View style={styles.screen}>{f.fertilizerName}<br/>{f.description}<br/>{f.state}<br/>{f.contact}</View>})}
  var i;
  /*let fertilzerview = []
  for(i=0; fertilizer.length; i++)
  {
    fertilzerview.push(<View>{fertilizer[i].fertilizerName}<br/>{fertilizer[i].description}<br/>{fertilizer[i].state}<br/>{fertilizer[i].contact}</View>)
  }*/
  return(
    <View><Pressable title="Add fertilzer" style={{textAlign:'center',alignItems:'center',borderRadius:'5px',backgroundColor:'#00F',margin:'5%',color:'white',padding:'2%'}} onPress={()=>{navigation.navigate('FertilizerAdd')}}>Add Fertilizer</Pressable><br/><ScrollView style={styles.content}>{fertilizer.map((f,index)=>(<View style={styles.screen}><b style={{color:'blue',fontSize:'140%'}}>{f.fertilizerName}</b><br/>{f.description}<br/>{f.state}<br/>{f.contact}</View>))}</ScrollView></View>
  )
}

const Fertilizer = createNativeStackNavigator();
function FertilizerScreen()
{
  return(
    <Fertilizer.Navigator>
      <Fertilizer.Screen name="Fertilizer" component={FertilizerView}/>
      <Fertilizer.Screen name="FertilizerAdd" component={FertilizerAdd}/>
    </Fertilizer.Navigator>
  )
}


const Tab = createMaterialTopTabNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Fertilizer" component={FertilizerScreen}/>
        <Tab.Screen name="Tomato" component={TomatoScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen:{
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#CCF',
    padding:'2%',
    margin:'4%',
    borderRadius:'10px',
    fontSize:'90%',
    fontFamily:'Arial',
    shadowColor:'#CCC',
    shadowRadius:'10px',
    shadowOffset:{height:'0',width:'0'}
  },
  input:{
    borderColor:'black',
    borderStyle:'solid',
    //backgroundColor:'#000',
    borderWidth:'1px',
    borderRadius:'5px',
    margin:'2%',
    padding:'2%',
    width:'100%'
  },
  text:{
    margin:'4%',
    fontFamily:'Arial'
  },
  content:{
    height:'65vh'
  },
  tscreen:{
    alignSelf:'center',
    width:'75%',
    margin:'4%',
    textAlign:'center',
    padding:'2%',
    backgroundColor:'#A22',
    shadowColor:'black',
    shadowRadius:'10px',
    borderRadius:'5px',
    color:'white'
  }
});
