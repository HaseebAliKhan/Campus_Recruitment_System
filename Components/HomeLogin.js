import React from 'react';
import { View, StyleSheet, ImageBackground  } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
function HomeLogin({ navigation }){
  return (
   
    <Container>
    <Content style={styles.All}>
      <Text style={{fontFamily:'Chalkboy',fontSize:70, color:'white',left:80}}>CAMPUS</Text>
      <Text style={{fontFamily:'Chalkboy',fontSize:70, color:'white',left:20}}>RECRUTMENT</Text>
      <Text style={{fontFamily:'Chalkboy',fontSize:70, color:'white',left:90}}>SYSTEM</Text>
      <View >
      <Button info style={styles.Btn1} onPress={() => navigation.navigate('AdminLogin')}>
        <Text>admin Login</Text>
      </Button>
      <Button info style={styles.Btn2} onPress={() => navigation.navigate('CompanyLogin')}>
        <Text>Company Login</Text>
      </Button>
      <Button info style={styles.Btn3} onPress={() => navigation.navigate('StudentLogin')}>
        <Text>Student login</Text>
      </Button>
      </View>
    </Content>
  </Container>

  );
}

const styles = StyleSheet.create({

    All:{
      
      backgroundColor:'#4C4646'
      

    },
    Btn1:{
      padding:42,
      paddingTop:40,
      paddingBottom:40,
      borderRadius:10,
      left:87,
      marginTop:20,
      backgroundColor:'#438D80'

    },
    Btn2:{
      padding:30,
      paddingTop:40,
      paddingBottom:40,
      borderRadius:10,
      left:86,
      marginTop:20,
      backgroundColor:'#438D80'

    },
    Btn3:{
      padding:34,
      paddingTop:40,
      paddingBottom:40,
      borderRadius:10,
      left:83,
      marginTop:20,
      backgroundColor:'#438D80'
    },
    Txt:{
      backgroundColor:'white',
      fontFamily:'Chalkboy'
    }
});

export default HomeLogin;