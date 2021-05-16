import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { TextField, Grid } from '@material-ui/core';
import util from "../../util";
import Button from '@material-ui/core/Button';
// import { localhost } from '../host-location/localhost';
import * as _ from 'lodash';
// import { add } from 'lodash';

import './add-product.scss';

import AdminDashbordHeader from '../admin-dashbord-header/admin-dashbord-header';
import AdminDashbordSitebar from '../admin-dashbord-sidebar/admin-dashbord-sitebar';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            thumbnailImages: [
                {
                    key: util.uuid(),
                }
            ],
            productDetail: [
                {
                    key: util.uuid(),

                    attributes: [
                        {
                            key: util.uuid(),
                        },

                    ]

                }
            ],
            productName: '',
            productPrice: '',
        }

    }

    // product-main-container-add

    productMainContainerAdd = (index) => () => {
        const { productDetail } = this.state;
        productDetail.splice(index + 1, 0, {
            key: util.uuid(),
            fileType: "",
            fileContent: "",
            attributes: [
                {
                    key: util.uuid(),

                },

            ]
        });

        this.setState({
            productDetail:
                [...productDetail]
        });
    }

    // product-main-container-sub

    productMainContainerRemove = (index) => () => {
        const { productDetail } = this.state;
        productDetail.splice(index, 1);
        this.setState({
            productDetail:
                [...productDetail]
        });
    }

    // attribute-add

    attributeAdd = (productIndex, attributeIndex) => () => {

        const attributePerent = this.state.productDetail[productIndex];
        const attributeIncrease = attributePerent.attributes;
        attributeIncrease.splice(attributeIndex + 1, 0, {

            key: util.uuid(),
        });

        this.setState({
            attributeIncrease:
                [...attributeIncrease]
        });

    }

    // attribute-Remove

    attributeRemove = (productIndex, attributeIndex) => () => {
        const attributeRemoveParent = this.state.productDetail[productIndex];
        const attributeRemove = attributeRemoveParent.attributes;
        attributeRemove.splice(attributeIndex, 1);
        this.setState({
            attributeRemove:
                [...attributeRemove]
        })
    }


    // thumnail-img

    addThumbnail = (index) => () => {
        const { thumbnailImages } = this.state;

        thumbnailImages.splice(index + 1, 0, {
            key: util.uuid(),
        });

        this.setState({
            thumbnailImages:
                [...thumbnailImages]
        });
    }

    removeThumbnail = (index) => () => {

        const { thumbnailImages } = this.state;

        thumbnailImages.splice(index, 1);

        this.setState(thumbnailImages);
    }

    productName = (e) => {
        this.setState({ productName: e.target.value });
    };

    productPriceDetail = (e) => {
        this.setState({ productPrice: e.target.value });

    };

    productSubTitleName = (key) => (e) => {
        const { productDetail } = this.state
        const findTitleIndex = _.findIndex(productDetail, function (o) { return o.key == key });
        const productSubTitle = e.target.value
        productDetail[findTitleIndex].productSubTitleName = productSubTitle;
    }

    innerProductName = (key, perandKey) => (e) => {
        const { productDetail } = this.state;
        const perandIndex = _.findIndex(productDetail, function (o) { return o.key == perandKey });

        const attributeTitle = productDetail[perandIndex].attributes;
        const findProductAttributeTitleIndex = _.findIndex(attributeTitle, function (o) { return o.key == key });
        const innerProductTitle = e.target.value;
        productDetail[perandIndex].attributes[findProductAttributeTitleIndex].innerProductTitleDetail = innerProductTitle;

        this.setState({
            productDetail: [...productDetail]
        })
    }

    // innerproduct-value

    innerProductValue = (key, perandkey) => (e) => {
        const { productDetail } = this.state;
        const prandIndex = _.findIndex(productDetail, function (o) { return o.key == perandkey });

        const attributeValue = productDetail[prandIndex].attributes;
        const findProductAttributeValueIndex = _.findIndex(attributeValue, function (o) { return o.key == key });
        const innerProductValue = e.target.value;
        productDetail[prandIndex].attributes[findProductAttributeValueIndex].innerProductValueDetail = innerProductValue;
        this.setState({
            productDetail: [...productDetail]
        })
    }

    // sendPropertyDetail = async () => {

    //     const { thumbnailImages } = this.state;
    //     const { productName } = this.state;
    //     const { productPrice } = this.state;
    //     const { productDetail } = this.state;

    //     const url = `${localhost}/insert-product-detail`;
    //     const res = await fetch(url, {
    //         method: 'POST',
    //         credentials: 'include',

    //         body: JSON.stringify({
    //             productName: productName,
    //             productPrice: productPrice,
    //             productDetail: JSON.stringify(productDetail),
    //             thumbnailImages: thumbnailImages[0].thumbnailImgId

    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    // }

    render() {
        const { productDetail } = this.state;
        const { thumbnailImages } = this.state

        return (
            <div>
                <div className="preloader">
                    <div className="lds-ripple">
                        <div className="lds-pos"></div>
                        <div className="lds-pos"></div>
                    </div>
                </div>


                <div id="main-wrapper" data-navbarbg="skin6" data-theme="light" data-layout="vertical" data-sidebartype="full" data-boxed-layout="full">
                    <AdminDashbordHeader />
                    <AdminDashbordSitebar />
                    <h3 style={{ color: "#03A9F4" }}><b>Create Product</b></h3>
                    <div className="dhash-port">
                        <Container maxWidth="sm" className="dhash-port-container">

                            <Grid
                                style={{ minHeight: '100vh' }}
                            >
                                <Grid item xs={12}>
                                    <Box className="form-root">
                                        <TextField
                                            id="productname"
                                            label="Product Name"
                                            variant="outlined"
                                            color="secondary"
                                            className="productname"
                                            fullWidth={true}
                                            onChange={this.productName}
                                        />

                                        <TextField
                                            id="price"
                                            label="price"
                                            variant="outlined"
                                            color="secondary"
                                            className="price"
                                            fullWidth={true}
                                            onChange={this.productPriceDetail}

                                        />

                                        <div>
                                            <h3 className="thubnail-image-text">images</h3>
                                            {/* <ThumbnailImages /> */}

                                            {
                                                thumbnailImages.map((val, i) =>

                                                    <div
                                                        key={val.key}
                                                    >
                                                        <input type="file"
                                                            placeholder="lorge image"
                                                            className="upload-lorge-img"
                                                            // onChange={this.selectThumnailImg(val.key)}
                                                            multiple
                                                        />



                                                        <button className="add-thubnail-img"
                                                            onClick={this.addThumbnail(i)} >+</button>

                                                        {i !== 0 ?
                                                            <button className="sub-thubnail-img"
                                                                onClick={this.removeThumbnail(i)} >-</button>
                                                            : null}
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </Box>

                                    <h3 className="product-detail-text">Product details</h3>
                                </Grid>



                                {
                                    productDetail.map((productDetailItem, productIndex) => {

                                        return (
                                            <div className="dashbord-product-main-detail-container"
                                                key={productDetailItem.key}

                                            >
                                                <div >
                                                    <form className="product-detail-container-dashbord" >

                                                        <div className="product-main-title">
                                                            <h3 className="subtitle-text">Subtitle :</h3>


                                                            <TextField
                                                                id="productname"
                                                                label="Product Name"
                                                                variant="outlined"
                                                                color="secondary"
                                                                className="productname"
                                                                fullWidth={true}
                                                                onChange={this.productSubTitleName(productDetailItem.key)}
                                                            />
                                                        </div>

                                                        {
                                                            productDetail[productIndex].attributes ? productDetail[productIndex].attributes.map((productAttributesItem, attributeIndex) => {
                                                                return (
                                                                    <div key={productAttributesItem.key}>
                                                                        <div
                                                                            className="subttile-conainer"

                                                                        >

                                                                            <div className="prouct-sub-title-container">
                                                                                <div className="product-detail--dashbord">
                                                                                    <TextField id="outlined-basic"
                                                                                        variant="outlined"
                                                                                        onChange={this.innerProductName(productAttributesItem.key, productDetailItem.key)}
                                                                                    />
                                                                                    <TextField
                                                                                        id="outlined-basic"
                                                                                        variant="outlined"
                                                                                        onChange={this.innerProductValue(productAttributesItem.key, productDetailItem.key)}
                                                                                    />

                                                                                </div>

                                                                            </div>
                                                                            <div className="product-detail-add-sub"
                                                                                style={{ marginTop: "24px" }}
                                                                            >
                                                                                <button className="add-thubnail-img"
                                                                                    type="button"
                                                                                    style={{ marginLeft: "10px" }}
                                                                                    onClick={this.attributeAdd(productIndex, attributeIndex)}
                                                                                >+</button>

                                                                                {attributeIndex > 0 ? <button
                                                                                    className="add-thubnail-img"
                                                                                    style={{ marginLeft: "10px" }}
                                                                                    type="button"
                                                                                    onClick={this.attributeRemove(productIndex, attributeIndex)}
                                                                                >-</button> : null}

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }) : null
                                                        }

                                                    </form>

                                                    <div className="product-main-dhashbord-detail-add-sub">
                                                        <button
                                                            className="add-thubnail-img"
                                                            type="button"
                                                            onClick={this.productMainContainerAdd(productIndex)}
                                                        >+</button>
                                                        {productIndex ? <button
                                                            className="add-thubnail-img"
                                                            style={{ marginLeft: "10px" }}
                                                            type="button"
                                                            onClick={this.productMainContainerRemove(productIndex)}
                                                        >-</button> : null}
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                    })
                                }
                                <div className="submit-btn-container">
                                    <Button variant="contained"
                                        color="primary"
                                        className="submit-btn"
                                        onClick={this.sendPropertyDetail}
                                    >
                                        submit
                        </Button>
                                </div>


                            </Grid>

                        </Container>
                        <img src="add - cart - webcame.jpeg" />
                    </div>
                </div>
            </div>

        );
    }
}

export default AddProduct;


