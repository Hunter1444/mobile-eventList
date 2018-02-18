import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Event extends React.Component {
  render(){
    const eventImage = this.props.images[0].image ? this.props.images[0].image : 'http://atom96.ru/wp-content/uploads/2017/10/%D0%BD%D0%B5%D1%82-%D1%84%D0%BE%D1%82%D0%BE-596x467.png'
    const date = new Date(this.props.dates.start)
    console.log(this.props.dates[0].start)

    return(
      <View style={styles.event}>

        <Image source={{uri: eventImage}}
         style={styles.eventImage} />
        <Text>Название: {this.props.title}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  event: {
    width:'100%',
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10
  },
  eventImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover'
  }
});
