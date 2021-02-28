import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';

const StudentSignUp = ({navigation }) => {
    return (
        <View style={{flex:1, backgroundColor:'#438D80'}}>
        
          
          <Form style={{padding:30,top:20 }}>
          <Item floatingLabel>
              <Label style={{color:'white'}}>StudentName</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{color:'white'}}>StudentEmail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'white'}}>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'white'}}>Password</Label>
              <Input />
            </Item>
            <Button info style={styles.BtnLog} >
              <Text style={styles.BtnLogT}>SignUp</Text>
          </Button>
        

          </Form>
          

            

          
      
     
          </View>
    )
}

export default StudentSignUp;

const styles = StyleSheet.create({
    BtnLog:{
        padding:20,borderRadius:10, left:110 ,top:30 ,backgroundColor:'#4C4646',color:'white'
    },
    BtnLogT:{
        color:'white',fontSize:17
    },
});