import React, {Component} from 'react';

import styles from './style';
import {
  Keyboard,
  View,
  Button,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';


import NavigationService from './NavigationService';

import ServiceStart from '../services/ServiceStart';

export default class ScreenNewTrip extends Component {

  constructor() {
    super();
    this.state = {
      logginIn: false,
      phone: '',
      navigate : null
    };
  }

  handleStartNewTrip = async () => {
    
    this.setState({logginIn: true});

    let loginData = {
      phone: this.state.username
    };

    let serviceStart = ServiceStart.getInstance();
    
    serviceStart.login(loginData).then(res=>{
        //we have sent the PIN to the user
        NavigationService.navigate('Home');
    
    }).catch(err=>{
      Alert.alert('', err);
      this.setState({logginIn : false});
    }).finally(()=>{
      this.setState({logginIn : false});
    })


  };


  render() {
    const {navigate} = this.props.navigation;
    return (

      <View>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <LanguageSelector/>
             
              <View style={styles.loginFormView}>                

                <Button
                  buttonStyle={styles.loginButton}
                  onPress={() => this.handleStartNewTrip()}
                  title="Start New Trip"
                  disabled = {this.state.logginIn}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

}
