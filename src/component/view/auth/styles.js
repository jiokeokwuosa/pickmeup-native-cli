import styled from 'styled-components/native';
import Text from '../../widget/text';
import TextInput from '../../widget/textInput';

export const ScreenView = styled.View`
    flex: 1;
    background-color: #f5f5f5;
    align-items: stretch;
    justify-content: flex-start;
`;
export const SecondContainer = styled.View`
    background-color: #0000CD;
    height: 86%;
    border-bottom-right-radius: 18px; 
    border-bottom-left-radius: 18px;   
    padding: 50px 30px 0px 30px;   
`;
export const RowView = styled.View`
    flex-direction: row;
`;
export const ColumnView = styled.View`
    flex-direction: column;
`;
export const LogoImage = styled.Image`
    height: 50px;
    width:  50px;
`;
export const LogoText = styled(Text)`
    font-size:35px;   
`;
export const TextP1 = styled(Text)`
    margin-top:30px;
`;
export const TextP2 = styled(Text)`
    margin-top:10px;
`;
export const PhoneBox = styled.View`
    flex-direction: row;
    height: 35px;
    background-color: #f5f5f5;
    align-items: stretch;
    margin-top:50px;
    border-radius: 8px;
    padding-horizontal:10px;
`;
export const PhoneTextInput = styled(TextInput)`
    border-left-width: 1px;
    padding-horizontal:7px;
    width:80%;
`;
export const LastTextView = styled.View`
    align-items: center;
    margin-top: 155px;
`;
export const TextP3 = styled(Text)`  
    font-size: 15px;
`;
export const TextP4 = styled(Text)`  
    font-size: 15px;
    color: black;
`;
export const LastMainView = styled.View`
    margin-top: 24px;
    flex-direction: row;
    justify-content: space-around;
`;
export const FacebookBox = styled.View`
    border-width: 1px;
    border-color:  #0000CD;
    border-radius:5px;
    padding-horizontal:15px;
    padding-vertical: 1px;
    flex-direction: row;
    align-items: center;
`;
export const SocialLoginImage = styled.Image`
    height: 20px;
    width:  20px;    
`;
export const PhoneImage = styled.Image`
    height: 20px;
    width:  30px;
    margin-top: 6px;
    margin-right: 6px;
`;
export const GoogleBox = styled.View`
    border-width: 1px;
    border-color:  grey;
    border-radius:  5px;
    padding-horizontal: 15px;
    padding-vertical: 1px;
    flex-direction: row;
    align-items: center;
`;
