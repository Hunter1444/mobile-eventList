import React from 'react';
import { View, Navigator, StatusBar } from 'react-native';
import Main from './containers/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducer from './reducers/index';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <StatusBar backgroundColor='#0000ff'/>
          <Main/>
        </View>
      </Provider>
    );
  }
}
