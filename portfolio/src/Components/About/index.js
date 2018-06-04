import React from "react"
import Image from "../../assets/img/happy.png"
export default class About extends React.Component{
    render(){
        return(
            <div style={{height:'600px',width:'1500px',background:'#F4EADE', marginTop:'1px' }}>
            
            <div style={{ height :'250px', width:'250px', marginLeft:'100px', paddingTop:'30px'}}>
             <img
            src={Image}
            alt="avatar"
          style={{height: '250px' , width:'250px'}}
            /></div>
            <div  style={{ height :'200px', width:'550px', marginLeft:'300px', background:'#755248', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
          <h6 style={{color:'white', paddingLeft:'20px', paddingTop:'20px'}}><b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into
             electronic typesetting, remaining essentially unchanged.</b></h6>
                </div>      
            </div>
        )
    }
}