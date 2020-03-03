import React, {Component} from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Button,
  Modal
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({
      modalVisible:true
    });
  }

  sair(){
    this.setState({
      modalVisible:false
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.entrar}/>

        <Modal animationType="slide" visible={this.state.modalVisible}>
          <View style={{backgroundColor:'#292929', flex:1, top:20}}>
            <Text style={{color:'#fff', fontSize:28}}> Seja bem vindo</Text>
            <Button title="fechar" onPress={this.sair}/>
          </View>
        </Modal>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;