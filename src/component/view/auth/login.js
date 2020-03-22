import React, {useState} from 'react';
import {
  ScreenView,
  SecondContainer,
  RowView,
  LogoImage,
  LogoText,
  ColumnView,
  TextP1,
  TextP2,
  PhoneBox,
  PhoneTextInput,
  LastTextView,
  TextP3,
  LastMainView,
  FacebookBox,
  SocialLoginImage,
  GoogleBox,
  TextP4,
  PhoneImage,
} from './styles';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleTextChange = num => {
        setPhoneNumber(num);
    };
  return (
    <ScreenView>
        <SecondContainer>
            <RowView>
                <LogoImage source = {require('./../../../assets/img/logo.png')}/>
                <LogoText>Pickmeup</LogoText>
            </RowView>
            <ColumnView>
                <TextP1>Hey there!</TextP1>
                <TextP2>Type in your phone number to get started</TextP2>
            </ColumnView>
            <PhoneBox>
                <PhoneImage source = {require('./../../../assets/img/ng.png')}/>
                <PhoneTextInput
                    placeholder="Phone Number"
                    onChangeText={handleTextChange}
                    value={phoneNumber}
                />
            </PhoneBox>
            <LastTextView>
                <TextP3>or you sign in with</TextP3>
            </LastTextView>
        </SecondContainer>
        <LastMainView>
            <FacebookBox>
                <SocialLoginImage source = {require('./../../../assets/img/facebook.png')}/>
                <TextP4>Facebook</TextP4>
            </FacebookBox>
            <GoogleBox>
                <SocialLoginImage source = {require('./../../../assets/img/google.png')}/>
                <TextP4>Google</TextP4>
            </GoogleBox>
        </LastMainView>
    </ScreenView >
  );
};

export default Login;
