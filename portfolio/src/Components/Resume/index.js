import React from "react"
import { Grid, Cell} from "react-mdl"

export default class Resume extends React.Component{
    render(){
        return(
            <div>
                <Grid  style={{background: '#B7B8B6'}} >
                    <Cell col={5} >
                        <div >
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '50px'}}>Ghazal Soomro</h2>
                        <h4 style={{color: '#011A27'}}>Mern Stack Developer</h4>
                        <hr style={{borderTop: '3px solid #763626', width: '60%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <hr style={{borderTop: '3px solid #763626', width: '65%'}}/>
                       <h4><b><u>Personal Information</u></b></h4>
                        <h5><b>Address</b></h5>
                        <p>House No: B.T.25 R.B.B colony jamshoro</p>
                        <h5><b>Phone</b></h5>
                        <p>+92 305-3042326</p>
                        <h5><b>Email</b></h5>
                        <p>ghazalsoomro@gmail.com</p>
                        <h5><b>Website</b></h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #763626', width: '65%'}}/>
                    </Cell>
                    <Cell className='resume-right-cell' col={7}>
                        <div> 
                        <div style={{paddingLeft:'5px', background: '#34675C' , borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px', borderTopLeftRadius:'10px', borderTopRightRadius:'10px' }}>
                        <h2><u>Experience</u></h2>
                        <h4><b>first experience</b>(2012-2013)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        
                        <h4><b>second experience</b>(2012-2013)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <hr style={{borderTop: '3px solid #763626'}} />
                        
                        <div style={{paddingLeft:'5px', background: '#BA5536' , borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px', borderTopLeftRadius:'10px', borderTopRightRadius:'10px' }}>
                        <h2><u>Education</u></h2>
                        <h4><b>first experience</b>(2012-2013)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        
                        <h4><b>second experience</b>(2012-2013)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                       </div>
                        <hr style={{borderTop: '3px solid #763626'}} />
                        <div style={{paddingLeft:'5px', background: '#5D535E' , borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px' , borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}>
                        <h2>Skills</h2>
                      <div >
                          <ol>
                     <li> <h5>HTML/CSS</h5></li>
                     <li> <h5>Javascript</h5></li>
                     <li> <h5>Node</h5></li>
                     <li> <h5>React</h5></li>
                      </ol>
                </div>
                      </div>
                      
                    </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}