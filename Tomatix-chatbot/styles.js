import { ScrollView, ScrollViewBase } from "react-native";
import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen: {
      position:'relative',
      display:'flex',
      backgroundColor:'rgba(0,255,255,0)',
      height:'75vh',
      borderRadius:'20px',
      width:'50vh',
      //border:'1px solid grey',
      shadowColor:'rgba(100,100,100,0.5)',
      shadowOffset:{width:0,height:10},
      shadowOpacity:'1',
      elevation:'10',
      shadowRadius:5,
      flexDirection:'column'
    },
    input: {
      height: '10vh',
      margin: '2vh',
      borderRadius:'10px',
      
      fontSize:'120%',
      fontStyle:'bold',
      backgroundColor:'#EEE',
      fontFamily:'Arial',
      shadowColor:'#BBB',
      shadowOffset:{height:10,width:0},
      shadowRadius:10,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:''
    },
    text: {
      display:'inline-flex',
      alignContent:'center',
      justifyContent:'flex-end',
      position:'relative',
      flex:1,
      width:'100%',
      flexDirection:'column'
    },
    text_area:{
      position:'relative',
      //border:'1px solid black',
      height:'10%',
      flex:2,
      borderRadius:'20px',
      padding:'10px',
      overflowY:'auto'
    },
    question:{   
      display:'flex', 
      float:'right',
      //textAlign:'right',
      borderRadius:'10px',
      backgroundColor:'#BFB',
      padding:'10px',
      alignSelf:'flex-end',
      margin:'10px'
    },
    answer:{
      display:'flex',
      //textAlign:'left',
      borderRadius:'10px',
      //backgroundColor:'#FFF',
      padding:'10px',
      float:'left',
      alignSelf:'flex-start',
      shadowColor:'gray',
      shadowOffset:{height:5,width:0},
      shadowRadius:'5px',
      justifyContent:'center'
      //backgroundImage:URL('./images/tomatix-chatbot-removebg-preview.png')
    }
  });