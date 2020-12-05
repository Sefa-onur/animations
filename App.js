import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {

  const data = [
    { id: 1, name: 'sefa' },
    { id: 2, name: 'onur' },
    { id: 3, name: 'öztemur' }
  ]
  return (
    <View style = {{flex:1}} >
      <View style={styles.Header} >
        <Text style={styles.HeaderText} >
          Animations
        </Text>
      </View>
      {data.map((item, id) => {
        return (
          <Animatable.View animation='fadeInRightBig' delay={id * 1000} direction='normal' key={id} >
            <View style={styles.AnimationText}>
              <Text style={{ fontSize: 18 }} >
                {item.name}
              </Text>
            </View>
          </Animatable.View>
        )
      })}
      <View style = {{flex:1,justifyContent:'center',alignItems:'center' }} >
        <Animatable.Text animation='slideInDown' iterationCount={5} direction='alternate'>animasyon</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>REACT-NATİVE</Animatable.Text>
      </View>
    </View >
  )
}

export default App;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    elevation: 5
  },
  HeaderText: {
    fontSize: 18,
    color: 'black'
  },
  AnimationText: {
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
})