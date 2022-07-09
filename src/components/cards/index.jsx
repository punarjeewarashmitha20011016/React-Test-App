import { maxWidth } from "@mui/system";
import { Component } from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";
import {styleSheet} from "./cards";
import { withStyles} from "@mui/styles";
class CardsInDashBoard extends Component{
    constructor(props){
        super(props);
    }

    static propTypes={
        className:PropTypes.string,
        sx:PropTypes.any,
        component:PropTypes.string,
        height:PropTypes.string,
        image:PropTypes.string,
        alt:PropTypes.string,
        varient:PropTypes.string,
        color:PropTypes.string,
    }

    static defaultProps = {
        className: "",
        image:"",
    }

    render(){
        const {classes,image,setTitle} = this.props
        return(
            <Card 
                className={classes.cards}
                sx={{maxWidth:300}}>
                <CardActionArea>
                        <CardMedia
                            component="img"
                            height='140'
                            image={image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {setTitle}
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}
export default withStyles(styleSheet)(CardsInDashBoard)