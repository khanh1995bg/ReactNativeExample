import InstagramLogin from 'react-native-instagram-login'
<View>
    <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
        <Text style={{color: 'white'}}>Login</Text>
    </TouchableOpacity>
    <InstagramLogin
        ref= {ref => this.instagramLogin= ref}
        clientId='xxxxxxxxxx'
 	      redirectUrl='yourRedirectUrl'
        scopes={['public_content', 'follower_list']}
        onLoginSuccess={(token) => this.setState({ token })}
        onLoginFailure={(data) => console.log(data)}
    />
</View>