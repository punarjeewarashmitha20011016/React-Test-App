import { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../customer/style"
import CommonBtn from "../../components/common/button";
import { TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
class Customer extends Component{
    cusArr=[]
    constructor(props){
        super(props);
        this.state={
            options:[{ label: 'Male'},
            { label: 'Female'}],
            cusData:{
                id:"",
                name:"",
                contactNo:"",
                gender:'',
                nic:"",
                address:""
            },
            cusArr:[]
        }
    }
    
    render(){
        const {classes} = this.props;
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
              backgroundColor: theme.palette.common.black,
              color: theme.palette.common.white,
            },
            [`&.${tableCellClasses.body}`]: {
              fontSize: 14,
            },
          }));
          
          const StyledTableRow = styled(TableRow)(({ theme }) => ({
            '&:nth-of-type(odd)': {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }));
        return(
                <div className={classes.bodyContainer}>
                    <div className={classes.formContainer}>
                        <div className={classes.txtFieldContainer}>
                            <div className={classes.txtField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Id"
                                    defaultValue=""
                                    className={classes.fieldContainer}
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.id = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>
                            <div className={classes.txtField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Name"
                                    defaultValue=""
                                    className={classes.fieldContainer}
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.name = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>
                            <div className={classes.txtField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Contact No"
                                    defaultValue=""
                                    className={classes.fieldContainer}
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.contactNo = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>
                            <div className={classes.txtField}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={this.state.options}
                                    className={classes.fieldContainer}
                                    renderInput={(params) =>
                                        <TextField {...params} 
                                            label="Gender"
                                        />
                                    }
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.gender = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>
                            <div className={classes.txtField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="NIC"
                                    defaultValue=""
                                    className={classes.fieldContainer}
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.nic = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>

                            <div className={classes.txtField}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Address"
                                    defaultValue=""
                                    className={classes.fieldContainer}
                                    onChange={(e)=>{
                                        let cusData = this.state.cusData
                                        cusData.address = e.target.value;
                                        this.setState(cusData)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.btnContainer}>
                        <div className={classes.childContainerInBtn}>
                            <CommonBtn
                                variant="contained"
                                label="Save"
                                className={classes.btns}
                                onClick={(e)=>{
                                    this.cusArr.push(this.state.cusData);
                                    this.setState({cusArr:this.cusArr})
                                }}
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
                    <div className={classes.tableContainer}>
                        <div className={classes.tableChildContainer}>
                            <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>{'id'}</StyledTableCell>
                                            <StyledTableCell align="right">{'name'}</StyledTableCell>
                                            <StyledTableCell align="right">{'contact No'}</StyledTableCell>
                                            <StyledTableCell align="right">{'gender'}</StyledTableCell>
                                            <StyledTableCell align="right">{'nic'}</StyledTableCell>
                                            <StyledTableCell align="right">{'address'}</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.cusArr.map((row) => (
                                            <StyledTableRow key={row.id}>
                                                <StyledTableCell component="th" scope="row">
                                                {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.contactNo}</StyledTableCell>
                                                <StyledTableCell align="right">{row.gender}</StyledTableCell>
                                                <StyledTableCell align="right">{row.nic}</StyledTableCell>
                                                <StyledTableCell align="right">{row.address}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                    </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
        )
    }
}
export default withStyles(styleSheet)(Customer)