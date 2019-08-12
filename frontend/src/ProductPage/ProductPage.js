import React from 'react';
import MainPricingTable from "./MainPricingTable";
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import image from '../HomePage/ProductList/image.jpeg'
import image2 from "../HomePage/ProductList/image2.jpg";
import MainListRow from "../HomePage/ProductList/MainListRow";
import ProductPic from "./ProductPic";
import StarRatingComponent from 'react-star-rating-component';
import Reviews from "./Reviews";

const tileDataArray = [
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
];

const useStyles = makeStyles(theme => ({
    parentContainer:{
        display:'flex',
        border:'0px solid red',
        paddingBottom:'2%',
        paddingTop:'1%',
        width:'80%%'
    },
    productPic: {
        display:'flex',
        height: '400px',
        width: '25%',
        maxWidth:'400px',
        border:'0px solid blue',
    },
    priceTable: {
        height: '100%',
        width: '50%',
        border:'0px solid orange',
    },
    customerReview: {
        height: '50%',
        width: '90%',
        marginLeft:'2%',
        marginRight:'4%',
        border:'0px solid green',
    },
    relativeProducts: {
        display:'flex',
        height: '50%',
        maxWidth: '90%',
        border:'0px solid yellow',
        marginBottom:'5%',
        marginLeft:'2%',
        marginRight:'2%',
    },
    productInfo: {
        height: '30%',
        width: '100%',
        border:'0px solid Gray',
    },
    extras: {
        height: '50%',
        width: '100%',
        border:'0px solid purple',
    },
    image:{
        display:'flex',
        border:'0px solid Gray',
    },
    productList:{
        paddingBottom:5,
    },
    productName:{
        paddingTop:'2%',
        textDecoration:'bold',
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    headings:{
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    productDescription:{
        height: '50%',
        width: '80%',
        border:'0px solid blue',
        textAlign:'center',
    },
    details:{
        marginLeft:'0%',
        marginRight:'0%',
    },
    rating:{
        display:'flex',
        border:'0px solid black',
        justifyContent:'center',
        width:'100%',
    },
    mainPage:{
        display:'block',
        marginLeft:'15%',
        marginRight: '15%',
        marginBottom:'3%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
}));

function ProductPage(){
    const classes = useStyles();
    return (
        <div className={classes.mainPage}>
            <h1 className={classes.productName}>Name Of Product</h1>
            <div>
                <Grid container direction="column" alignItems="center" justify="center" className={classes.parentContainer} spacing='2'>
                    <Grid key='productInfo' item className={classes.productInfo}>
                        <Grid container direction="row" alignItems="center" justify="center" spacing='2'>
                            <Grid key='productPic' item className={classes.productPic}>
                                <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                                    <Grid item key='picture' style={{display: 'block'}}>
                                        <ProductPic className={classes.image} />
                                    </Grid>
                                    <Grid item key='rating' className={classes.rating}>
                                        <StarRatingComponent name='productRating' starCount={5} value={3} editing={false} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid key='priceTable' item className={classes.priceTable} >
                                <MainPricingTable />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid key='extras' item className={classes.extras}>
                        <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                            <Grid key='productDescription' item className={classes.productDescription}>
                                <h1 className={classes.headings}>Details</h1>
                                <p className={classes.details}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida.
                                    Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat
                                    blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a
                                    scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adi
                                </p>
                            </Grid>
                            <Grid key='customerReview' item className={classes.customerReview}>
                                <h1 className={classes.headings}> Customer Review </h1>
                                <Reviews/>
                            </Grid>
                            <Grid key='relatedProducts' item className={classes.relativeProducts}>
                                <MainListRow className={classes.productList} object={{tileData : tileDataArray, listTitle:'Related Objects', color:'rgba(0,11,206,0.3)'}} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default ProductPage;
