import { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "../item/style"
import CommonBtn from "../../components/common/button";
import { TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

class Item extends Component{
    itemArr = []
    constructor(props){
        super(props);
        this.state={
            itemArr: [],
            itemObj:{
                code:"",
                description:"",
                qty:"",
                buyingPrice:"",
                unitPrice:""
            }
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
                            <TextField
                                required
                                id="outlined-required"
                                label="Code"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                                onChange={(e)=>{
                                    this.state.itemObj.code=e.target.value;
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Description"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                                onChange={(e)=>{
                                    this.state.itemObj.description=e.target.value;
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Qty"
                                defaultValue=""
                                className={classes.txtFieldFirstThree}
                                onChange={(e)=>{
                                    this.state.itemObj.qty=e.target.value;
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Buying Price"
                                defaultValue=""
                                className={classes.txtFieldLastTwo}
                                onChange={(e)=>{
                                    this.state.itemObj.buyingPrice=e.target.value;
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Unit Price"
                                defaultValue=""
                                className={classes.txtFieldLastTwo}
                                onChange={(e)=>{
                                    this.state.itemObj.unitPrice=e.target.value;
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.btnContainer}>
                        <div className={classes.childContainerInBtn}>
                            <CommonBtn
                                variant="contained"
                                label="Save"
                                className={classes.btns}
                                onClick={(e)=>{
                                    this.itemArr.push(this.state.itemObj)
                                    this.setState({
                                        itemArr:this.itemArr
                                    })
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
                                            <StyledTableCell>{'Code'}</StyledTableCell>
                                            <StyledTableCell align="right">{'Description'}</StyledTableCell>
                                            <StyledTableCell align="right">{'Qty'}</StyledTableCell>
                                            <StyledTableCell align="right">{'Buying Price'}</StyledTableCell>
                                            <StyledTableCell align="right">{'Unit Price'}</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.itemArr.map((row) => (
                                            <StyledTableRow key={row.code}>
                                                <StyledTableCell component="th" scope="row">
                                                {row.description}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                                <StyledTableCell align="right">{row.buyingPrice}</StyledTableCell>
                                                <StyledTableCell align="right">{row.unitPrice}</StyledTableCell>
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
export default withStyles(styleSheet)(Item)