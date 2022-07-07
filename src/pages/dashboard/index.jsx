import { Component } from "react";
import { styleSheet } from "../dashboard/style";
import { withStyles} from "@mui/styles";
import NavBar from "../../components/common/navBar/index";
import CardsInDashBoard from "../../components/common/cards";

class DashboardPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                
                <NavBar/>

                <div className={classes.bodyContainer}>
                    <div className={classes.cardContainer}>
                        <CardsInDashBoard
                            image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/114800--01--1623926473.jpeg"
                        />

                        <CardsInDashBoard
                            image="data:image/jpeg;base64,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"
                        />

                        <CardsInDashBoard
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRet16sk9XtR5fsjfWXA0qWkGKgR15jHauiA0lXzQdDYkm2g-Ahw6ceKoUF8rDvehiLZ-Q&usqp=CAU"
                        />

                        <CardsInDashBoard
                            image="https://cdn11.bigcommerce.com/s-9hthnt/images/stencil/1280x1280/products/347/852/cream_crackers_190g__07129.1396679038.jpg?c=2"
                        />

                        <CardsInDashBoard
                                image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/116462--01--1597747748.jpeg"
                        />

                        <CardsInDashBoard
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhlcIUyz296kvPNhIg4ygtiuHulklmvhaUg&usqp=CAU"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styleSheet)(DashboardPage);