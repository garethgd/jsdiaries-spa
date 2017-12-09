import React, { Component } from 'react';
import './post-item.css';

export default class PostItem extends Component {

  constructor(props){
    super(props);
}
  render() {
      debugger;
    return (
      <article class="post">
        <figure id="attachment_539" class="wp-caption alignnone" styles="width: 604px;">
            <img class="size-full wp-image-539" src={this.props.image} alt="" width="455" height="385"/>
        </figure>

        <div class="hover">
            <div class="icon">
                <span class={`ion-` + `${ this.props.icon }`}> </span> </div>
                    <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                <div class="tile-btn">
                 <a class="ghost" href={this.props.link}>View Post</a></div>
                </div>
        </article>
   
    );
  }
}
