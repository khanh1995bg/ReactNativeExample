import InstagramLogin from 'react-native-instagram-login';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Test extends Component {
    state = {
        token: ''
    }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'red' }}>Login</Text>
          <Text style={{ color: 'red' }}>token:{this.state.token}</Text>
        </TouchableOpacity>
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          clientId="2087e37396f54aff9391352b41c31794"
          redirectUrl="https://google.com"
          scopes={['public_content', 'follower_list']}
          onLoginSuccess={token => this.setState({ token })}
          onLoginFailure={data => console.log(data)}
        />
      </View>
    );
  }
}
