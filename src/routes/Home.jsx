import React, { Component } from 'react';
import Header from '../components/header/Header'
import PostList from '../components/posts/post-list/post-list'

export default class Home extends Component {

  constructor(props){
    super(props);
}
  render() {
    return (
      <div>
          <Header> </Header>
          <PostList> </PostList>
     </div>
   
    );
  }
}
