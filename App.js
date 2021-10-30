import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './localdb';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      meaning: '',
    };
  }
  speak=(content)=>{
   
    Speech.speak(content);
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: {
              color: 'white',
              fontWeight: 1000,
              fontSize: 20,
              marginLeft: 10,
            },
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={(letters) => {
            this.setState({
              text: letters,
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word =this.state.text.toLowerCase().trim()
            dictionary[word]?
           ( this.setState({meaning:dictionary[word].meaning}))
            : alert('Meaning not available')
          }}>
          <Text style={styles.buttonText}   > Search </Text>
        </TouchableOpacity>

        <Text style={styles.text}> Definition : </Text>

        <View>
          <Text style={styles.textDef}>{this.state.meaning}</Text>
        </View>
     
        <TouchableOpacity style={styles.soundButton} onPress={this.speak(this.state.meaning)} >
          <Text style={styles.soundText}> Click to hear the meanings </Text>
        </TouchableOpacity>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2FFFF',
  },
  input: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  button: {
    marginTop: 10,
    marginLeft: 110,
    borderWidth: 2,
    borderColor: '0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  buttonText:{
  color:'white', 
  fontSize:20,
  fontWeight:500
  },
  text: {
    marginTop: 20,
    marginLeft: 5,
    fontWeight: 1000,
    fontSize: 20,
    color: 'rgb(255,0,152)',
  },
  textDef: {
    marginLeft: 50,
    fontWeight: 1000,
    fontSize: 15,
    color: 'rgb(255, 0, 152)',
  },
  soundButton:{
    backgroundColor:'rgb(0, 182, 255)',
    width:200,
    height: 50,
    borderRadius:10,
    borderWidth: 2,
    boderColor: '0',
    marginLeft:60,
    marginTop: 50,
    justifyContent:'center',
    alignItems:'center',
    },
  soundText:{
    color:'white',
    fontWeight:500,
    fontSize:15
  }

});
