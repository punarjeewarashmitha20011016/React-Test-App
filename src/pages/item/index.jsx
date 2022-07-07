import { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../customer/style"
import NavBar from "../../components/common/navBar/index"
import CommonBtn from "../../components/common/button";
import { TextField } from "@mui/material";

class ItemPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <NavBar/>
                <div className={classes.bodyContainer}>
                    <div className={classes.formContainer}>
                        <div className={classes.txtFieldContainer}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Code"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Description"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Qty"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Buying Price"
                                defaultValue=""
                                className={classes.txtFieldLastTwo}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Unit Price"
                                defaultValue=""
                                className={classes.txtFieldLastTwo}
                            />
                        </div>
                    </div>
                    <div className={classes.btnContainer}>
                        <div className={classes.childContainerInBtn}>
                            <CommonBtn
                                variant="contained"
                                label="Save"
                                className={classes.btns}
                            />
                            <CommonBtn
                                variant="contained"
                                label="Update"
                                className={classes.btns}
                            />
                            <CommonBtn
                                variant="contained"
                                label="Delete"
                                className={classes.btns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(ItemPage)