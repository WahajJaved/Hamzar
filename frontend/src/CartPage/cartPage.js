import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import CartStepper from "./cartStepper";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
    },
}));

export default function CartPage() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <CartStepper/>
            </Paper>
        </div>
    )
}