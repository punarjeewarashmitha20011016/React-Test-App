import { Component } from "react";
import Customer from "../../components/customer/index"

class CustomerPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <Customer/>
            </div> 
        )
    }
}
export default CustomerPage;