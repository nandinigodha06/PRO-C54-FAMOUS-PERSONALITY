import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {Audio} from 'expo-av';


class ColorButton1 extends
Component{
  render(){
    return(
      <Button title="sound1" color={this.props.color}/>

    );

  }
}

class ColorButton2 extends
Component{
  
  render(){
    return(
      <Button title="sound2" color={this.props.color} />

    );

  }
}
class ColorButton3 extends
Component{
  
  render(){
    return(
      <Button title="sound3" color={this.props.color}/>

    );

  }
}
class ColorButton4 extends
Component{
  
  render(){
    return(
      <Button title="sound4" color={this.props.color} />

    );

  }
}class ColorButton5 extends
Component{
  render(){
    return(
      <Button title="sound5" color={this.props.color} />

    );

  }
}

class StopButton extends
Component{
  render(){
    return(
      <Button title="StopSound" color={this.props.color}/>

    );

  }
}




export default class App extends Component {
   async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      
    } catch (error) {
      console.log();
    }
  }
  render() {
    return (
      <View 
      style={{width:200, height:100, margin:80}}>
      <Button 
      title="sound1"
      color="red"
      onPress={() => {
        var uri= 'https://audio-previews.elements.envatousercontent.com/files/122059985/preview.mp3';
        this.playSound(uri);
      }} />
 <View 
      style={{width:200, height:100, marginTop:10}}>
      <Button 
      title="sound2"
      color="blue"
      onPress={() => {
        var uri= 'https://audio-previews.elements.envatousercontent.com/files/122059985/preview.mp3' ;
        this.playSound(uri);
      }} />
 <View 
      style={{width:200, height:100, marginTop:10}}>
      <Button 
      title="sound3"
      color="green"
      onPress={() =>{
        var uri= 'https://audio-previews.elements.envatousercontent.com/files/122059985/preview.mp3';
        this.playSound(uri);
      }} />

<View 
      style={{width:200, height:100, marginTop:10}}>
      <Button 
      title="sound4"
      color=""
      onPress={() => {
        var uri= 'http://cd.textfiles.com/sbsw/INSTRMNT/CELLO.WAV';
      this.playSound(uri);
      }} />
<View 
      style={{width:200, height:100, marginTop:10}}>
      <Button 
      title="sound5"
      color="gold"
      onPress={() =>{
        var uri= 'https://audio-previews.elements.envatousercontent.com/files/122059985/preview.mp3';
        this.playSound(uri);
      }} />

<View 
      style={{width:200, height:100, marginTop:10, }}>
      <Button 
      title="stopButton"
      color="black"
      onPress={() =>{
        Audio.setIsEnabledAsync(false);
      }} />
</View>
    
</View>
      </View>
      </View>
      </View>
      </View>
      
    );
  }
}






