export const styleSheet={
    container:{
        display:'flex',
        flexDirection:'column',
        width:"100vw",
        height:"100vh",
        backgroundColor:"#E1DEDD",
        margin:"unset"
    },
    navBarContainer:{
        display:'flex',
        flexDirection:"row",
        width:"100%",
        height:"8%",
        backgroundColor:"#B6AFAD",
        alignItems:"center",
        justifyContent:"center",
        position:"relative"
    },
    navTitle:{
        position:'absolute',
        left:"1%",
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        width:"20%",
        height:"100%",
        top:"0",
        bottom:"0",
        margin:"auto",
    },
    listOfNavBars:{
        position:"absolute",
        display:"flex",
        flexDirection:"row",
        right:"0",
        width:"50%",
        height:"100%",
        alignItems:'center',
        justifyContent:"center",
        transition:'all 1s',
    },
    navBtns:{
        display:"flex",
        flexDirection:"row",
        height:"80%",
        width:"40%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#CCD4B0",
        borderRadius:"5px",
        marginLeft:"2%",
        marginRight:"2%",
    },
    listInNav:{
        display:"flex",
        textDecoration:"none"
    },
    bodyContainer:{
        display:'flex',
        flexDirection:"column",
        flexWrap:'wrap',
        width:"100%",
        height:"92%",
        justifyContent:"center",
        alignItems:"center",
    },
    cardContainer:{
        display:'flex',
        flexDirection:"row",
        flexWrap:'wrap',
        width:"90%",
        height:"78%",
        border:"1px solid black",
        justifyContent:"center",
        alignItems:"center",
        boxShadow:"10px 5px 50px -10px"
    },
    cards:{
        display:'flex',
        marginLeft:"1%",
        marginRight:"1%",
        height:"40%",
        marginTop:"2%",
        marginBottom:"2%",
    }
}