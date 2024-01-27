/***
 *  LoginScreen.js
 *  Contains top level element for the LoginScreen
 *  
 *  ToDo:
 *    - create screen
 *    - add functionality
 *    - add auth
*/
import React from 'react';
import { StyleSheet, View, Button, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bg from "../assets/bg.jpeg";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title} >TOWER</Text>
        <Image
        style={styles.logo}
        source={bg}
        />
        <TouchableOpacity onPress={() => navigate('PlayOffline')} style={styles.blueButton}>
            <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('PlayOffline')} style={styles.blueButton}>
            <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Auth {
  FacebookPermissions = [
    "public_profile"
  ];
  static loginFinished(provider, error, result) {
    console.log(provider);
    console.log(error);
    console.log(result);
  }
  static anonymousLogin(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  plainButton: {
    marginBottom: 10
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  blueButton: {
    elevation: 8,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginBottom: 10
  }
});