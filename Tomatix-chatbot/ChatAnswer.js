import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './styles'

export default function ChatAnswer({answer_text})
{
    return(
      <view >
       <Image source={require('./images/tomatix-chatbot-removebg-preview.png')} style={{width:'30px',height:'40px',resizeMode:'contain',display:'block'}}/>{"\n"}
        <Text style={styles.answer}>{answer_text}</Text>
        </view>
    )

}

/*const styles = StyleSheet.create({
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
      
    }
  });*/