import { Component } from "react";
import Item from "../../components/item/index"

class ItemPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Item/>
            </div>
        )
    }
}
export default ItemPage;