import React, { Component } from 'react';
import './header.css';
import jsdiaries from '../../images/jsdiaries-logo.jpg';

export default class Header extends Component {
  render() {
    return (
      <div id="site-header-menu" className="site-header-menu">
        <nav id="site-navigation" className="menu-navigation-container" role="navigation" aria-label="Primary Menu">
            <div className="menu-navigation-container">
                <ul id="menu-navigation" className="primary-menu">
                    <li id="menu-item-556" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-556">
                        <a href="http://jsdiaries.com/contact-us/">Hire Us</a>
                    </li>

                    <li id="menu-item-557" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-557">
                        <a href="http://jsdiaries.com/resources/">Resources</a>
                    </li>

                    <li id="menu-item-595" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-593 current_page_item menu-item-595">
                        <a href="http://jsdiaries.com/">Blog</a>
                   </li>
                 </ul>
             </div>						
        	</nav>

           
            <div className="site-header-main">
                <a className="js-blog" href="https://blog.feedspot.com/javascript_blogs/" title="JavaScript blogs">
                    <img src="https://blog-cdn.feedspot.com/wp-content/uploads/2017/04/javascript-30-transparent_216px.png" scale="0"/>
                </a>

				<div className="site-branding">
					<a href="http://jsdiaries.com/" className="custom-logo-link" rel="home" itemprop="url">
                     <img width="190" height="190" src={jsdiaries} className="custom-logo" alt="" itemprop="logo" srcset="https://i1.wp.com/jsdiaries.com/wp-content/uploads/2016/12/cropped-cropped-Jsdiaries01jpgrev05-6.jpg?w=240 240w, https://i1.wp.com/jsdiaries.com/wp-content/uploads/2016/12/cropped-cropped-Jsdiaries01jpgrev05-6.jpg?resize=150%2C150 150w" sizes="(max-width: 240px) 85vw, 240px"/
                     ></a>
                        <p className="site-title">
                             <a href="http://jsdiaries.com/" rel="home"></a>
                        </p>

                        <p className="site-description">Delivering JavaScript Knowledge</p>
						</div>
				
                    </div>
            </div>
   
    );
  }
}
