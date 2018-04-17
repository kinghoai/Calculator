import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.manHinh}>
          <Text>Day la phan man hinh</Text>
        </View>
        
        <View style={styles.banPhim}>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.nutSo}>
              <Text style={styles.text}>8</Text>
            </View>

            <View style={styles.nutSo}>
              <Text style={styles.text}>9</Text>
            </View>

            <View style={styles.nutTinh}>
              <Text style={styles.text}>+</Text>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
              <Text style={styles.text}>4</Text>
            </View>

            <View style={styles.nutSo}>
              <Text style={styles.text}>5</Text>
            </View>

            <View style={styles.nutSo}>
              <Text style={styles.text}>6</Text>
            </View>

            <View style={styles.nutTinh}>
              <Text style={styles.text}>-</Text>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
              <Text style={styles.text}>1</Text>
            </View>

            <View style={styles.nutSo}>
              <Text style={styles.text}>2</Text>
            </View>

            <View style={styles.nutSo}>
              <Text style={styles.text}>3</Text>
            </View>

            <View style={styles.nutTinh}>
              <Text style={styles.text}>X</Text>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
              <Text style={styles.text}>0</Text>
            </View>

            <View style={styles.nutBang}>
              <Text style={styles.text}>=</Text>
            </View>

            <View style={styles.nutReset}>
              <Text style={styles.text}>AC</Text>
            </View>

            <View style={styles.nutTinh}>
              <Text style={styles.text}>:</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  manHinh: {
    width: width,
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  banPhim: {
    width: width,
    flex: 3,
    backgroundColor: 'gray',
  },
  dong: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
  },
  nutSo: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  nutTinh: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutReset: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutBang: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
