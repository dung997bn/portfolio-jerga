import React, { Component } from "react";
import BaseLayout from "../components/layout/BaseLayout";
import axios from "axios";
// import Link from "next/link";

import { Link } from "../routes";
import BasePage from "../components/BasePage";
class Portfolio extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      posts = res.data;
    } catch (error) {
      console.log(error);
    }
    return {
      posts: posts.slice(0, 10),
    };
  }
  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <BasePage>
          <h1>Port folio</h1>
          <ul>
            {posts &&
              posts.map((post) => (
                <li key={post.id} style={{ fontSize: "20px" }}>
                  <Link route={`/portfolios/${post.id}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolio;
