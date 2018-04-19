import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      soThu1: '',
      textManHinh: '',
      phepTinh: '',
    }
    this.getKetQua = this.getKetQua.bind(this);
  }

getKetQua() {
  const { soThu1, textManHinh, phepTinh } = this.state;
  if(phepTinh === '+') return this.setState({ textManHinh : Number(soThu1) + Number(textManHinh) });
  if(phepTinh === '-') return this.setState({ textManHinh : Number(soThu1) - Number(textManHinh) });
  if(phepTinh === 'X') return this.setState({ textManHinh : Number(soThu1) * Number(textManHinh) });
  if(phepTinh === ':') return this.setState({ textManHinh : Number(soThu1) / Number(textManHinh) });
};

  render() {
    const { soThu1, textManHinh, } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text>{soThu1}</Text>
        </View>
        <View style={styles.manHinh}>
          <Text style={styles.textMH}>{textManHinh}</Text>
        </View>
        
        <View style={styles.banPhim}>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
              <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'7' })}>
                <Text style={styles.text}>7</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'8' })}>
                <Text style={styles.text}>8</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'9' })}>
                <Text style={styles.text}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutTinh}>
            <TouchableOpacity onPress={()=> this.setState({ phepTinh: '+', soThu1: textManHinh, textManHinh: '' })}>
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'4' })}>
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'5' })}>
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'6' })}>
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutTinh}>
            <TouchableOpacity onPress={()=> this.setState({ 
                phepTinh: '-',
                soThu1: textManHinh,
                textManHinh: '',
             })}>
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'1' })}>
                <Text style={styles.text}>1</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'2' })}>
                <Text style={styles.text}>2</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'3' })}>
                <Text style={styles.text}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutTinh}>
            <TouchableOpacity onPress={()=> this.setState({ 
              phepTinh: 'X',
              soThu1: textManHinh,
              textManHinh: '',
             })}>
                <Text style={styles.text}>X</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dong}>
            <View style={styles.nutSo}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: textManHinh+'0' })}>
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutBang}>
            <TouchableOpacity onPress={this.getKetQua}>
                <Text style={styles.text}>=</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutReset}>
            <TouchableOpacity onPress={()=> this.setState({ textManHinh: '' })}>
                <Text style={styles.text}>AC</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.nutTinh}>
            <TouchableOpacity onPress={()=> this.setState({ 
              phepTinh: ':',
              soThu1: textManHinh,
              textManHinh: '',
             })}>
                <Text style={styles.text}>:</Text>
              </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
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
  textMH: {
    width: width - 40,
    backgroundColor: 'lightblue',
    height: 60,
    lineHeight: 60,
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 20,
    paddingLeft: 20,
  },
});
