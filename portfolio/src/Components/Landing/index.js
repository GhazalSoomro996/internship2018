import React from "react"
import {Grid, Cell, Card, CardText, CardTitle, CardActions} from "react-mdl"
import Image from "../../assets/img/mern.png"

export default class Landing extends React.Component{
    render(){
        return(
            <div style={{width: '1500px',height:'600px', background:'#D5C3AA' }}>
         <img
            src={Image}
            alt="avatar"
          style={{height: '250px' , width:'750px', marginLeft:'270px',marginTop:'70px'}}
            />
                <div style={{width: '850px',height:'200px', background:'#523634',marginTop:'20px', marginLeft:'220px', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                <div className='banner-text'>
                <h1 style={{textAlign:'center', color:'white'}}>Mern Stack Developer</h1>
                <hr style={{borderTop: '3px solid #301B28', width: '100%'}}/>
              <h5  style={{textAlign:'center', color:'white'}}>HTML/CSS | Bootstrap | Javascript| React | Nodejs | Express | Mongodb</h5>
          
            </div>
               
                </div>

             
      </div>
        )
    }
}