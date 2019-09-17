import InstagramLogin from 'react-native-instagram-login';

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Test extends Component {
    state = {
        token: ''
    }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'red' }}>Login</Text>
          <Text style={{ color: 'white' }}>token:{this.state.token}</Text>
        </TouchableOpacity>
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          clientId="xxxxxxxxxx"
          redirectUrl="yourRedirectUrl"
          scopes={['public_content', 'follower_list']}
          onLoginSuccess={token => this.setState({ token })}
          onLoginFailure={data => console.log(data)}
        />
      </View>
    );
  }
}
