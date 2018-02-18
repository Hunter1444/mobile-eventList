import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Event from './../components/Event';
import { connect } from 'react-redux';

class Main extends React.Component {
  addEvents(arr){
    this.props.addEvents(arr)
  }

  componentDidMount(){
    const self = this;
    const days = 14;
    const date = new Date();
    const startDate = Date.now() / 1000 | 0;
    const endDate = startDate + days*24*60*60;

    axios.get(`https://kudago.com/public-api/v1.4/events/?fields=id,dates,images,title,place&actual_since=${startDate}&actual_until=${endDate}`)
    .then(function (response) {
      self.addEvents(response.data.results)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    const eventList = this.props.events.map((item, index) => {
      return(<Event key={index} place={item.place} images={item.images} dates={item.dates} title={item.title}/>)
    })
    return (
      <ScrollView>
        {eventList}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    events: state
  }
}

function propsDispatch(dispatch) {
  return {
    addEvents: function(arr){
      dispatch({type: 'LOAD_EVENTS', payload:arr})
    }
  }
}

export default connect(mapStateToProps, propsDispatch)(Main)
