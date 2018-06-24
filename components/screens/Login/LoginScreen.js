import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { PMText } from "../../shared/styledComponents/PMText/PMText";
import { PMTextInput } from "../../shared/styledComponents/PMTextInput/PMTextInput";
import { PMButton } from "../../shared/styledComponents/PMButton/PMButton";
import { stylesLib } from "../../../lib/StylesLib";
import lib from "../../../lib/Lib";
import repo from "../../../lib/Repo";
import { styles } from "./styles";

export class LoginScreen extends React.Component {
  state = {
    username: 'PingWin',
    email: 'garrettdavid1@gmail.com',
    password: 'whenever12',
    confirmPassword: 'whenever12',
    registering: false,
    registerButtonText: "Need an account?"
  };

  render() {
    return (
		<KeyboardAvoidingView style={[stylesLib.fullDeviceWidth, stylesLib.fullDeviceHeight, styles.container]} behavior='padding' enabled>
			<ScrollView contentContainerStyle={[stylesLib.centeredScreen]} scrollEnabled={false} keyboardShouldPersistTaps='always'>
				<PMText style={[styles.title, stylesLib.boldText]}>
				Pong Mate
				</PMText>
				<PMTextInput value={this.state.username} onChangeText={username => {
					this.setState({ username });
					this.fadeOutError();
				}} placeholder="UserName" autoCapitalize="none" />
				<PMTextInput style={{ display: this.state.registering ? "flex" : "none" }} value={this.state.email} onChangeText={email => {
					this.setState({ email });
					this.fadeOutError();
				}} placeholder="Email" autoCapitalize="none" />
				<PMTextInput value={this.state.password} onChangeText={password => {
					this.setState({ password });
					this.fadeOutError();
				}} secureTextEntry={true} placeholder="Password" onSubmitEditing={this.state.registering ? () => {} : this.login} />
				<PMTextInput style={{ display: this.state.registering ? "flex" : "none" }} value={this.state.confirmPassword} onChangeText={confirmPassword => {
					this.setState({ confirmPassword });
					this.fadeOutError();
				}} secureTextEntry={true} placeholder="Confirm Password" onSubmitEditing={this.register} />
				<PMButton onPress={this.toggleRegistering}>
				{this.state.registerButtonText}
				</PMButton>
			</ScrollView>
    	</KeyboardAvoidingView>
	)
  }

  fadeOutError = () => {};

  login = () => {};

  register = () => {
    if (
      lib.areAllStringsWithValues([
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.confirmPassword
      ]) &&
      this.state.password === this.state.confirmPassword
	) 
	{
      	repo.register(this.state.username, this.state.email, this.state.password).then(resp => {
		  //Auto log user in here.
	  }).catch( resp => {
		  //Display error.
	  })
    } else {
		//Display error.
    }
  };

  toggleRegistering = () => {
    this.setState({
      registering: !this.state.registering,
      registerButtonText:
        this.state.registerButtonText === "Need an account?"
          ? "Have an account?"
          : "Need an account?"
    });
  };
}
