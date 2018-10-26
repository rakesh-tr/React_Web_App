import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Icon,Row, Col,Dropdown,Button ,message,Divider,Card,Avatar ,Switch,Skeleton} from 'antd';
import logo from './logo.svg';
import './App.css';
import {Pie,HorizontalBar,Bar} from 'react-chartjs-2';
const { Meta } = Card;
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{

		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const horizontalBar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />Dashboard</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />Departments</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />Clients</Menu.Item>
  </Menu>
);
function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const { Header, Sider, Content ,Footer } = Layout;

const MainMenu = () => {
  return (
  <div>
    <Link to="/">
      <button>home</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/code">
      <button>code</button>
    </Link>
    <Link to="/code">
      <button>contact</button>
    </Link>
    <Link to="/info">
      <button>info</button>
    </Link>
  </div>
  )
}

const Home = () => (
     <Row>      
      <Col span={4} push={18} style={{ background: '#fff'}}>
      <Row>
        <Col span={11} style={{ background: '#fff'}}>
        <h5>Departnment</h5>
        <a>Add a Departments</a>
        <h2>12</h2>
        in total        
        </Col>
        <Col>
        <Divider type="vertical" /></Col>
        <Col span={11} style={{ background: '#fff'}}>
        <h5>Clients</h5>
        <a>Add new clients</a>
        <h2>180</h2>
        in total        
        </Col>        
        </Row>
        <Divider></Divider>
        <Row>
        <Col span={11} style={{ background: '#fff'}}>
        <h5>Consumers</h5>
        <a>Add a Consumers</a>
        <h2>24</h2>
        Active        
        </Col>
        <Col><h2>70</h2>
        in total </Col>
        </Row>
        <Divider></Divider>
        <Row>
        <Col span={11} style={{ background: '#fff'}}>
        <h5>Surveys</h5>
        <a>Create new survey</a>
        <h2>65</h2>
        in Total        
        </Col>
        <Col><h2>8</h2>
        in active </Col>
        </Row>
        <Divider></Divider>
        <Row>
        <Col span={11} style={{ background: '#fff'}}>
        <h5>Project Summary</h5>
        <a>Add a new Project</a>
        <h2>24</h2>
        active      
        </Col>
        <Col><h2>8</h2>
        Draft </Col>
        </Row>
</Col>

<Col span={18} pull={4}>
<Row><Col className="gutter-row" span={6}>
<b>Dashboard  </b> 
<Dropdown overlay={menu} placement="bottomCenter">
      <Button>bottomCenter</Button>
    </Dropdown>
      </Col>
      </Row>
<Col span={10} style={{ background: '#fff'}}>
<h3>Project Name</h3>
<Pie data={data} />
</Col>    
      <Col span={10} style={{ background: '#fff'}}>
      <h3>Project Performance</h3>
         <Bar
          data={barData}          
        /></Col>    
      <Col span={10} style={{ background: '#fff'}}>
      <h3>Mission Nearing Deadline</h3>
      <HorizontalBar data={horizontalBar} /></Col>   
      <Col span={10} style={{ background: '#fff'}}>
      <h3>Low Response Projects</h3>
      <HorizontalBar data={horizontalBar} /></Col>  
</Col>
</Row>      
)


const About = () => (
  <div>
       <Row>
      <Col span={8}><Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="delete" />]}
        >
          <Skeleton loading={false} avatar active>
            <Meta
              title="Marketting"
              description="Country/Location UK, Liverpool
              Department Owner Jessica
              Email jessica@dove.com
              Phone +44 20 7234 3456
              Categories #Soaps"
            />
          </Skeleton>
        </Card></Col>
      <Col span={8}><Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="delete" />]}
        >
          <Skeleton  loading={false} avatar active>
            <Meta             
              title="Production"
              description="Country/Location UK, Liverpool
              Department Owner Jessica
              Email jessica@dove.com
              Phone +44 20 7234 3456
              Categories #Soaps
              "
            />
          </Skeleton>
        </Card></Col>
      <Col span={8}><Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="delete" />]}
        >
          <Skeleton  loading={false} avatar active>
            <Meta              
              title="Research & Development"
              description="Country/Location UK, Liverpool
              Department Owner Jessica
              Email jessica@dove.com
              Phone +44 20 7234 3456
              Categories #Soaps"
            />
          </Skeleton>
        </Card></Col>
    </Row>
    <Row>
    <Col span={8}><Card
          style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="delete" />]}
        >
          <Skeleton  loading={false} avatar active>
            <Meta              
              title="Sales"
              description="Country/Location UK, Liverpool
              Department Owner Jessica
              Email jessica@dove.com
              Phone +44 20 7234 3456
              Categories #Soaps"
            />
          </Skeleton>
        </Card></Col>
    </Row>
       
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

class App extends Component {
  state = {
    collapsed: false,
    loading:true
  };  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onChange = (checked) => {
    this.setState({ loading: !checked });
  }
  render() {
    const { loading } = this.state;
    return (
      <Router><Layout>
      
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
          <Link to="/"/>
            <Icon type="dashboard" />            
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/about"/>
            <Icon type="appstore" />
            <span>Departments</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>Clients</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{minHeight: 280 }}>
         
        <div>             
           <div>
             <Route exact path="/" component={Home} />
             <Route exact path="/about" component={About} />
             <Route exact path="/code" component={Code} />
             <Route exact path="/contact" component={Contact} />
             <Route exact path="/info" component={info} />
           </div>
         </div>
       
        </Content>
        <Footer>footer</Footer>
      </Layout>     
    </Layout>
    </Router>
     
    );
  }
}


export default App;
