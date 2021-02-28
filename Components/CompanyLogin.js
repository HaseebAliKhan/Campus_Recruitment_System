import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label ,Button} from 'native-base';


const CompanyLogin = ({navigation }) => {
    return (

        <View style={{flex:1, backgroundColor:'#438D80'}}>
        
          
          <Form style={{padding:30,top:150 }}>
            <Item floatingLabel>
              <Label style={{color:'white'}}>CompanyEmail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'white'}}>Password</Label>
              <Input />
            </Item>
            <Button info style={styles.BtnLog} >
              <Text style={styles.BtnLogT}>LogIn</Text>
          </Button>
          <Button transparent style={{left:115 ,top:40 }} onPress={() => navigation.navigate('CompanySignUp')}>
              <Text style={{color:'black',fontSize:20}}>Sign Up</Text>
          </Button>

          </Form>
          

            

          
      
     
          </View>
    )
}

export default CompanyLogin;

const styles = StyleSheet.create({
    BtnLog:{
        padding:20,borderRadius:10, left:110 ,top:30 ,backgroundColor:'#4C4646',color:'white'
    },
    BtnLogT:{
        color:'white',fontSize:17
    },
});
