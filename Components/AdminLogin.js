import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container,  Content, Form, Item, Input, Label,Button } from 'native-base';



const AdminLogin = () => {
    return (
        <View style={{flex:1}}>
        <Container>
        <Content style={{backgroundColor:'#438D80',top:140,margin:30}}>
          <Form>
            <Item floatingLabel>
              <Label style={{color:'white'}}>AdminEmail</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{color:'white'}}>Password</Label>
              <Input />
            </Item>
            <Button info style={{padding:20,borderRadius:10, left:110 ,top:30 ,backgroundColor:'#4C4646',color:'white'}}>
              <Text style={{color:'white',fontSize:17}}>LogIn</Text>
          </Button>

          </Form>
          
            
            <Text style={{top:80,fontFamily:'Chalkboy',fontSize:40, color:'yellow',left:84}}>Worning</Text>
          <Text style={{color:'#C36241',left:20,top:80}}>ONLY FOR ADMINISTRATIVE PURPOSES</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          <Text ></Text>
        </Content>
      </Container>
          </View>
    )
}

export default AdminLogin

const styles = StyleSheet.create({})
