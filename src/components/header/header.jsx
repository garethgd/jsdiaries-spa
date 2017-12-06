import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div id="site-header-menu" class="site-header-menu">
        <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Primary Menu">
            <div class="menu-navigation-container">
                <ul id="menu-navigation" class="primary-menu">
                    <li id="menu-item-556" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-556">
                        <a href="http://jsdiaries.com/contact-us/">Hire Us</a>
                    </li>

                    <li id="menu-item-557" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-557">
                        <a href="http://jsdiaries.com/resources/">Resources</a>
                    </li>

                    <li id="menu-item-595" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-593 current_page_item menu-item-595">
                        <a href="http://jsdiaries.com/">Blog</a>
                   </li>
                 </ul>
             </div>						
        	</nav>

            <div id="site-header-menu" class="site-header-menu">
                <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Primary Menu">
                    <div class="menu-navigation-container">
                        <ul id="menu-navigation" class="primary-menu">
                            <li id="menu-item-556" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-556">
                                 <a href="http://jsdiaries.com/contact-us/">Hire Us</a>
                            </li>

                            <li id="menu-item-557" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-557">
                                 <a href="http://jsdiaries.com/resources/">Resources</a>
                            </li>

                             <li id="menu-item-595" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-593 current_page_item menu-item-595">
                                <a href="http://jsdiaries.com/">Blog</a>
                            </li>

                        </ul>
                    </div>						
                </nav>
            <div class="site-header-main">
                <a class="js-blog" href="https://blog.feedspot.com/javascript_blogs/" title="JavaScript blogs">
                    <img src="https://blog-cdn.feedspot.com/wp-content/uploads/2017/04/javascript-30-transparent_216px.png" scale="0"/>
                </a>

				<div class="site-branding">
					<a href="http://jsdiaries.com/" class="custom-logo-link" rel="home" itemprop="url">
                     <img width="240" height="240" src="https://i1.wp.com/jsdiaries.com/wp-content/uploads/2016/12/cropped-cropped-Jsdiaries01jpgrev05-6.jpg?fit=240%2C240" class="custom-logo" alt="" itemprop="logo" srcset="https://i1.wp.com/jsdiaries.com/wp-content/uploads/2016/12/cropped-cropped-Jsdiaries01jpgrev05-6.jpg?w=240 240w, https://i1.wp.com/jsdiaries.com/wp-content/uploads/2016/12/cropped-cropped-Jsdiaries01jpgrev05-6.jpg?resize=150%2C150 150w" sizes="(max-width: 240px) 85vw, 240px"/
                     ></a>
                        <p class="site-title">
                             <a href="http://jsdiaries.com/" rel="home"></a>
                        </p>

                        <p class="site-description">Delivering JavaScript Knowledge</p>
						</div>
				

					<nav id="social-navigation" class="social-navigation" role="navigation" aria-label="Social Links Menu">
								<div class="menu-social-media-container"><ul id="menu-social-media" class="social-links-menu">
                                    <li id="menu-item-1067" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1067">
                                        <a href="https://twitter.com/jsdiaries"><span class="screen-reader-text">Twitter</span></a></li>
</ul></div>							</nav>
											</div>
							</div>
      </div>
    );
  }
}
