import { Component } from "react";
import DashBoard from "../../components/dashboard/index"

class DashboardPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
                <DashBoard/>
            </div>
        )
    }
}
export default DashboardPage;