import { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../customer/style"

class CustomerPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>

            </div>
        )
    }
}
export default withStyles(styleSheet)(CustomerPage)