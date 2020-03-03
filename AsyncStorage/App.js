import React, { Component } from 'react';
import { 
      StyleSheet,
      Text, 
      View,
      TextInput,
      TouchableOpacity,
      Keyboard,
      AsyncStorage
} from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        input:'',
        nome:''
    }
    this.gravaNome = this.gravaNome.bind(this);
  }

  //ComponentDidMount - Quando o componente é montado em tela
  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value)=>{
      this.setState({
        nome:value
      });
    })
  }

  //ComponentDidUpdate - toda vez que um state é atualizado fazer algo

  async componentDidUpdate(_, prevState){
    const nome = this.state.nome;
    if(prevState != nome){
       await AsyncStorage.setItem('nome', nome);
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    });

    alert('Salvo com sucesso');
    Keyboard.dismiss();
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
          style={styles.input}
          value={this.state.input}
          onChangeText={(text)=>this.setState({input: text})}
          underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    marginTop:20,
    
  },
  
  inputView:{
    flexDirection:'row',
    alignItems:'center'
  },

  input:{
    flex:1,
    height:40,
    borderColor:'#000',
    borderWidth:1,
    padding: 8,
    margin:8
  },

  botao:{
    backgroundColor:'#222',
    color:'#fff',
    height:40,
    padding:8,
    marginLeft:3
  },

  nome: {
    fontSize:30,
    textAlign:'center',
    marginTop:15
  }


});
