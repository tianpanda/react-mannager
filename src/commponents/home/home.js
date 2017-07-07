import React, { Component } from 'react'; 
import { Link } from 'react-router';
 

import   './style/home.less'

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className='layout-cont'>
      
	        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
	          <div className="logo"/>
		          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			            <Menu.Item key="1">
				            <Link to='/user'>
				            	<Icon type="user" />
					            <span className="nav-text">账户信息</span>
				            </Link>				        
			            </Menu.Item>
			            <Menu.Item key="2">
				              <Link to='/video'>
					              <Icon type="video-camera" />
					              <span className="nav-text">个人录像</span>
				              </Link>
			            </Menu.Item>
			            <Menu.Item key="3">
				              <Link to='/updata'>
					              <Icon type="upload" />
					              <span className="nav-text">上传资料</span>
				              </Link>
			            </Menu.Item>
		          </Menu>
	        </Sider>

	        <Layout>
		          <Header style={{ background: '#fff', padding: 0 }}>
		            	<Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
		          </Header>
		          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
		            		显示内容1
		            		显示内容1
		            		显示内容1
		            		显示内容1
		            		显示内容1
		            		显示内容1
		            		显示内容1
		            		显示内容1
		          </Content>
	        </Layout>

      </Layout>
    );
  }
}

 
export default Home;
