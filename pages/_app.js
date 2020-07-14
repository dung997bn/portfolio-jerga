import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import React, { Component } from "react";

const App =({ Component, pageProps })=> {
   return <Component {...pageProps} />;
} 



// static async getInitialProps({ Component, ctx }) {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return {
//     pageProps,
//   };
// }
export default App;
