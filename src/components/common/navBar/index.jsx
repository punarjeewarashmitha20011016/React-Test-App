import { Component } from "react";
import {styleSheet} from '../../../pages/dashboard/style'
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import { withStyles } from "@mui/styles";

class NavBar extends Component{
    constructor(props){
        super(props);
    }

    changeBackground(e,check){
        if(check==true){
            e.target.style.background = '#B2BD89';
            e.target.style.color = 'white';
            e.target.style.transition="all 1s";
        }else{
            e.target.style.background = '#CCD4B0';
            e.target.style.color = 'black';
            e.target.style.transition="all 1s";
        }
    }

    render() {
        const {classes}=this.props;
        return(
                <div className={classes.navBarContainer}>
                    <Typography 
                        className={classes.navTitle}
                        gutterBottom variant="h5" 
                        component="div">
                        WebPosReact
                    </Typography>
                    <ul 
                    className={classes.listOfNavBars}
                    >
                        <Link 
                            to='/' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}>
                            <li className={classes.listInNav}>Dasboard</li>
                        </Link>
                        
                        <Link 
                            to='/customer' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}>
                            <li className={classes.listInNav}>Customer</li>    
                        </Link>
                        <Link 
                            to='/item' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}>
                            <li className={classes.listInNav}>Item</li>
                        </Link>
                        
                    </ul>
                </div>
        )
    }
}
export default withStyles(styleSheet)(NavBar)