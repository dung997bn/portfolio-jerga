import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import React, { Component } from "react";

class App extends Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
