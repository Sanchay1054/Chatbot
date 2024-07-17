import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import style1 from './App.css'
import { Button, ScrollView, TextInput } from 'react-native-web';
import ChatAnswer from './ChatAnswer'
import styles from './styles'
import {useState} from 'react'

export default function App() {
  const [ans,setAns] = useState([{id:1,question:"Hello",answer:"Hello I am your assistant"}]);
  const [question,setQuestion] = useState('');
  var id=2;
  var i;
  async function chatAnswer()
  {
    var answer = await fetch("http://localhost:3000/chat",{method:'POST',body:JSON.stringify({question:question}),headers:{'Content-Type':'application/json'}});
    console.log(answer.formData,/*answer.json().then((data)=>{console.log(data.answer)})*/);
    answer.json().then((data)=>{
    setAns([...ans,{id:id,question:question,answer:data.answer}])});
    id++;
  }
  function chat()
  {
    var chats = [];
    for(i=0; i<ans.length; i++)
    {
      chats.push(<>
    <Text style={styles.question}>{ans[i].question}</Text>
                  <ChatAnswer style={styles.answer} answer_text={ans[i].answer}/></>);
    }
    var a = <Text>Text</Text>
    return chats;
  }
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        
              <View style={styles.text}>
                <ScrollView style={styles.text_area}>
                  {/*ans.map(chat=>{<Text>{/*console.log(chat.id);}<Text style={styles.question}>Hello text_area</Text>
                  <ChatAnswer style={styles.answer} answer_text="ChatAnswer"/></Text>})*/}
                  {chat()}
                  {/*<Text style={styles.question}>Hello text_area</Text>
                  <ChatAnswer style={styles.answer} answer_text="ChatAnswer"/>*/}
                  </ScrollView>
                  <View style={styles.input}>
                    <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-end', top:'50%'}}>
                    <Button style={{float:'right',width:'25px',display:'flex'}} onPress={chatAnswer} title="Send"/>
                    </View>
                    <View style={{display:'flex',position:'relative',width:'100%'}}>
              <TextInput
              style={{height:'10vh',fontSize:'120%',padding:'10px',paddingRight:'50px',display:'flex'}}
              placeholder="Chat here..."
              keyboardType="text"
              multiline
              placeholderTextColor="#444"
              onChangeText={setQuestion}
            />
            </View>
            </View>
            </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



/*const styles = StyleSheet.create({
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
    border:'1px solid grey',
    shadowColor:'rgba(100,100,100,0.5)',
    shadowOffset:{width:0,height:10},
    shadowOpacity:'1',
    elevation:'10',
    shadowRadius:5
  },
  input: {
    height: '10vh',
    margin: '2vh',
    borderRadius:'10px',
    padding: 20,
    fontSize:'120%',
    fontStyle:'bold',
    backgroundColor:'#EEE',
    fontFamily:'Arial',
    shadowColor:'#BBB',
    shadowOffset:{height:10,width:0},
    shadowRadius:10
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
    border:'1px solid black',
    height:'10%',
    flex:2,
    borderRadius:'20px',
    padding:'10px',
    
  },
  question:{   
    display:'flex', 
    float:'right',
    //textAlign:'right',
    borderRadius:'10px',
    backgroundColor:'#BFB',
    padding:'10px',
    alignSelf:'flex-end'
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
    //backgroundImage:URL('./images/tomatix-chatbot-removebg-preview.png')
  }
});*/
