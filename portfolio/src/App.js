import React from "react"
import {
    Layout, Header, Navigation, Drawer, Content
} from "react-mdl";
import {
    Link
} from "react-router-dom"
import Main from "./Components/Main";

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div style={{height: '650px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header style={{background: '#763626'}} title={<span><span style={{ color: '#ddd' }}></span><strong>Portfolio</strong></span>}>
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contac tMe</Link>
            </Navigation>
        </Drawer>
        <Content>
                <div className="page-content" />
                <Main />
            </Content>
    </Layout>
</div>
            </div>
        )
    }
}