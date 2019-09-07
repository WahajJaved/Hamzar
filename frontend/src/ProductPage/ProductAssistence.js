import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import {Collapse} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    fab: {
        alignItems: 'flex-start',
        border:'0px solid Gray',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    new:{
        display:'flex',
        border:'0px solid Gray',
        maxHeight: 500,
        paddingBottom: '3%',
    },
    used:{
        display:'flex',
        paddingTop:'3%',
        border:'0px solid pink',
    },
    divider:{
        height:'3px',
        overflow:'auto',
        border:'0px solid violet',
    },
    objectPrice:{
        display:'inline',
        float:'right',
        border:'0px solid blue',
    },
    info:{
        display:'block',
        width: '100%',
        alignContent:'center',
        border:'0px solid purple',
    },
    listPrice:{
        display:'block',
        border:'0px solid red',
        width:'100%',
        overflow:'auto',
    },
    save :{
        display:'block',
        border:'0px solid Green',
        width:'100%',
        overflow:'auto',
    },
    innerInformation:{
        display:'block',
        border:'0px solid black',
        overflow:'hidden',
        height:'100%',
        width:'100%',
    },
    toRight:{
        float:'right',
        border:'0px solid blue',
    },
    cartButton:{
        float:'right',
    },
    cartOption:{
        paddingTop:'2%',
        display:'block',
        width:'100%',
        overflow:'auto',
    },
    buyNow:{
        paddingTop:'1%',
        display:'block',
        width:'100%',
        overflow:'auto',
        paddingBottom:'1%',
    },
    buyButton:{
        float:'right',
    }
}));
var OldAddress = null
var NewAddress = null
var OldPrice = null
var NewPrice = null

export default function ProductAssistence(props) {
    const classes = useStyles();
    const styles={visibility: 'collapse'}
    const [thisState,setThisState]=React.useState({New: null,Old:null, toCheck:null})
    const [controlSwitch, setControlSwitch] = React.useState(true);


    function handleChangeTable() {
        setControlSwitch (prevState => {
            return !prevState
        })
    }
    function checkDetails(){
        props.data.child.map(data=>{
            data.attributes.map(info=>{
                if (info.name === 'Type' && info.value === props.data.childObject ){
                    data.attributes.map(resul=>{
                        if(resul.name ==='Condition' && resul.value === 'New' ){
                            NewAddress = data.price
                        }
                        if(resul.name ==='Condition' && resul.value === 'Old' ){
                            OldAddress = data.price
                        }
                    })
                }
            })
        })
        dataFetchN()
        console.log(OldPrice)
        console.log(NewPrice)
        setThisState({New:NewPrice, Old: OldPrice})
    }
    const dataFetchN = async () => {
        const product = await fetch(NewAddress , {
            method: 'Get',
            withCredentials: true,
            cache: 'default',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>NewPrice = json)
        const product2 = await fetch(OldAddress , {
            method: 'Get',
            withCredentials: true,
            cache: 'default',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>OldPrice = json)
        const resp2 = product2;
        const resp = product;

    }

    useEffect(()=>{
        checkDetails()
    },[controlSwitch])

    return (
        <div>
            <Grid container className={classes.new} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={handleChangeTable} className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                      New
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>{thisState.New ? thisState.New.excl_tax + "  pkr" : 'nothing to show'} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={controlSwitch} className={classes.info}>

                        {
                            thisState.New ?
                            <div className={classes.innerInformation} >
                                <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{thisState.New ? thisState.New.incl_tax : 'nothing to show'}</b></Typography></div>
                                <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{thisState.New ? thisState.New.tax : 'nothing to show'}</b> (30%)</Typography> </div>
                                <div className={classes.cartOption}>
                                    <Button variant='contained' color='primary' className={classes.cartButton}>
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className={classes.buyNow}>
                                    <Button variant='contained' color='secondary' className={classes.buyButton}>
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                                :
                                <Typography variant='h5' className={classes.innerInformation}>
                                    'Sorry No Details Available'
                                </Typography>
                        }
                    </Collapse>
                </Grid>
            </Grid>
            <Divider className={classes.divider}/>
            <Grid container className={classes.used} direction='column' justify='center' alignItems='stretch'>
                <Grid item className={classes.info} >
                    <Fab variant="extended" aria-label="Delete" onClick={handleChangeTable} className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon} />
                        Used
                    </Fab>
                    <Typography variant='h5' className={classes.objectPrice}><b>{thisState.Old ? thisState.Old.excl_tax + "  pkr" : 'nothing to show'} </b></Typography>
                </Grid>
                <Grid item className={classes.info}>
                    <Collapse in={!controlSwitch} className={classes.info}>
                        {
                            thisState.Old ?
                            <div className={classes.innerInformation} >
                                <div className={classes.listPrice}><Typography className={classes.toRight}>List Price : <b>{thisState.Old ? thisState.Old.incl_tax : 'nothing to show'}</b></Typography></div>
                                <div className={classes.save}><Typography className={classes.toRight}>Save : <b>{thisState.Old ? thisState.Old.tax : 'nothing to show'}</b> (30%)</Typography> </div>
                                <div className={classes.cartOption}>
                                    <Button variant='contained' color='primary' className={classes.cartButton}>
                                        Add to Cart
                                    </Button>
                                </div>
                                <div className={classes.buyNow}>
                                    <Button variant='contained' color='secondary' className={classes.buyButton}>
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                                :
                                <Typography variant='h5' className={classes.innerInformation}>
                                    'Sorry No Details Available'
                                </Typography>
                        }
                    </Collapse>
                </Grid>
            </Grid>
        </div>
    );
}