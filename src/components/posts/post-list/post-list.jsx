import React, { Component } from 'react';
import './post-list.css';
import PostItem from '../post-item/post-item'
var Spinner = require('react-spinkit');

export default class PostList extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: [],
      dataRoute: "http://jsdiaries.com/wp-json/wp/v2/posts" 
    }
}

componentDidMount(){
    fetch(this.state.dataRoute)
        .then(res => res.json())
        .then(posts => this.setState((prevState, props) => {
            return { posts: posts.map(this.mapPost)};
        }));
}

 mapPost(post){
    return {
      title: post.acf.title,
      description: post.acf.description,
      icon: post.acf.icon,
      link: post.acf.link,
      image: post.acf.image
    }
  }

  render() {
    console.log(this.state.posts)

     let posts = this.state.posts.map( post => {
      return  <PostItem 
                title={post.title} 
                description={post.description} 
                icon={post.icon} 
                link={post.link}
                image={post.image}  />
      })

    return (
      <div className="posts">
      
        {posts.length > 0 ?   {posts} : <Spinner name='double-bounce' />  }
        
      </div>
   
    );
  }
}
