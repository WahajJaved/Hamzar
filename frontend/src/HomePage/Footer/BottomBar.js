import React from "react"
import Grid from "@material-ui/core/Grid";
import BottomAncor from "./BottomAncor";
import BottomBarButtons from "./BottomBarButtons";
import {blueGrey} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { createMuiTheme, withStyles, makeStyles } from "@material-ui/core/styles";
import twwiter from "./twwiter2.svg"
import hamzarIcon from './A6.png'


const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blueGrey[500]),
        backgroundColor: blueGrey[500],
        '&:hover': {
            backgroundColor: blueGrey[700],
        },
    },
}))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),

    },
    footer:{
        backgroundColor:'rgba(5,5,54,0.55)',
        diplay: "flex"
    },
    beforeFooter:{
        backgroundColor:'rgba(21,21,82,0.55)',
    },
    headings:{
        color: 'white',
    },
    logoTable:{
        display:'flex',
        alignItems:'flex-center',
        paddingTop:'35%'
    },
    logoDiv:{

        width: '30%',
        display:'flex',
        alignItems:'flex-center',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }
}));


function BottomBar(){
    const classes= useStyles()
        return (
            <div className="App">
                <div className={classes.beforeFooter}>
                    <Grid
                        container
                        className="BottomBar"
                        direction="column"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.beforeFooter}
                    >
                        <h4 className={classes.headings}>Exclusive Deals and Offers</h4>
                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Sign Up
                        </ColorButton>
                        <h4 className={classes.headings}>Subscribe to get Exclusive Offers</h4>
                    </Grid>
                </div>
                <div className={classes.footer}>
                    <Grid
                        className="BottomBar"
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                        className={classes.footer}
                    >
                        <div className={classes.logoDiv} >
                            <img className={classes.logoTable}  src={hamzarIcon}/>
                        </div>
                        <div>
                            <br/><br/><br/><br/><br/>
                            <h2 className={classes.headings}>Customer Care</h2><br/>
                            <div>
                                <BottomAncor object={{text: "Help Center", lintTo:'/helpCenter'}}/>
                                <BottomAncor object={{text: "Return and Refund"}}/>
                                <BottomAncor object={{text: "Track my Order"}}/>
                                <BottomAncor object={{text: "Delivery System"}}/>
                            </div>
                        </div>
                        <div>
                            <br/><br/><br/><br/><br/>
                            <h2 className={classes.headings}>hamzar</h2><br/>
                            <div>
                                <BottomAncor object={{text: "About Us"}}/>
                                <BottomAncor object={{text: "Payment Methods"}}/>
                                <BottomAncor object={{text: "Career"}}/>
                                <BottomAncor object={{text: "Terms and Condition"}}/>
                                <BottomAncor object={{text: "Privacy"}}/>
                            </div>
                        </div>
                        <div>
                            <br/><br/><br/><br/><br/>
                            <h2 className={classes.headings}>Let us Help you</h2><br/>
                            <BottomAncor object={{text: "Your Account"}}/>
                            <BottomAncor object={{text: "Your Orders"}}/>
                            <BottomAncor object={{text: "Help"}}/>
                            <BottomAncor object={{text: "FAQ's", pathname:'/faqs'}}/>
                        </div>
                        <div>
                            <br/><br/><br/><br/><br/>
                            <h2 className={classes.headings}>Social</h2><br/>
                                <div>
                                    <BottomBarButtons object={{text: "Facebook", src:"https://img.icons8.com/color/48/000000/facebook-circled.png"}}/>
                                    <br/>
                                    <BottomBarButtons object={{text: "Instagram", src:"https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png"}}/>
                                    <br/>
                                    <BottomBarButtons object={{text: "Youtube", src:"https://c866088.ssl.cf3.rackcdn.com/assets/youtube30x30.png"}}/>
                                    <br/>
                                    <BottomBarButtons object={{text: "Twitter", src:twwiter}}/>
                                    <br/>
                                    <BottomBarButtons object={{text: "Google ", src:"https://img.icons8.com/color/48/000000/google-logo.png"}}/>
                                </div>
                        </div>
                    </Grid>
                </div>
            </div>
        );

}

export default BottomBar;
