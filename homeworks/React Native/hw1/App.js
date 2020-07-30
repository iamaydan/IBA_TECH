import React, { Component } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

import { loadFonts } from "./styles";
import store from "./redux";
import { Drawer } from './navigation/RootDrawer';

export default class App extends Component {
  state = { loaded: false };
  render() {
    if (!this.state.loaded) {
      return (
        <AppLoading
          startAsync={loadFonts}
          onFinish={() => this.setState({ loaded: true })}
          onError={() => console.log("Something Went Wrong")}
        />
      );
    }

    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}
