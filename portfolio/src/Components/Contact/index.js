import React from "react"
import { Grid, Cell, List, ListItem, ListItemContent, Textfield} from "react-mdl"
// import Message from "../subViews/message"
// import Road from "../subViews/road"
// import Social from "../subViews/social"
import Image from "../../assets/img/road.png"
export default class Contact extends React.Component{
    render(){
        return(
         <div className='contact-body' >
        <Grid className='contact-grid'>
        <Cell col={12}>
        <div col={12} style={{height: '220px', background:'#D09683' , marginTop:'70px'}} >

        <img
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            style={{height: '200px', marginLeft:'200px' ,marginTop:'-50px'}}
            />
             <h3  style={{ marginLeft:'250px' }}><b>Ghazal Soomro</b></h3></div>
    
            </Cell>
          
        <div style={{ height:'400px', width:'300px', marginLeft:'150px'}}>
        <h4 style={{textAlign:'center'}}><b>Send me Message</b></h4>
 <hr style={{borderTop: '3px solid #763626', width: '100%',}}/>
        <Textfield
    onChange={() => {}}
    label="Text..."
    floatingLabel
    style={{width: '200px'}}
/>

{/* Numeric Textfield with floating label */}
<Textfield
    onChange={() => {}}
    pattern="-?[0-9]*(\.[0-9]+)?"
    error="Input is not a number!"
    label="Number..."
    floatingLabel
/>
<Textfield
    onChange={() => {}}
    label="Text lines..."
    rows={3}
    style={{width: '200px'}}
/>
      <button style={{ backgroundColor: '#2D4262',
    color: 'white',
    padding: '10px 25px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'}}>Submit</button>
        </div>
        <div style={{ height:'400px', width:'300px', marginLeft:'50px'}}>
        <h4 style={{textAlign:'center'}}><b>On the road</b></h4>
 <hr style={{borderTop: '3px solid #763626', width: '100%',}}/>
 <img
            src={Image}
            alt="avatar"
          style={{height: '300px' }}
            />

      
        </div>
        <div style={{ height:'400px', width:'300px', marginLeft:'50px'}}>
 <h4 style={{textAlign:'center'}}><b>Socially</b></h4>
 <hr style={{borderTop: '3px solid #763626', width: '100%',}}/>
 <div style={{marginLeft:'20px',marginTop:'40px',}}>
 <button style={{ backgroundColor: '#2D4262',
    color: 'white',
    padding: '15px 90px',
    textAlign: 'auto',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'}}>Facebook</button>
      <button style={{ backgroundColor: '#3189B8',
    color: 'white',
    padding: '15px 101px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'}}>Twitter</button>
      <button style={{ backgroundColor: '#4D648D',
    color: 'white',
    padding: '15px 94px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer'}}>Linkdein</button>
 </div>
 
      
        </div>
         
          
        </Grid>
      </div>
        )
    }
}