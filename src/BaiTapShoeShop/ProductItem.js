/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    // console.log(this.props.data);
    let { name, image, shortDescription, alias, price } = this.props.data;
    return (
      <div className="col-4 mx-auto my-3">
        <div className="card m-3" /* style={{ width: "23rem" }} */>
          <img className="card-img-top" src={image} alt={alias} />
          <div className="card-body">
            <h4 className="card-title text-primary">{name}</h4>
            <h5 className="card-title text-danger">$ {price}</h5>
            <p className="card-text">{shortDescription}</p>
            <a
              className="btn btn-info"
              onClick={() => {
                this.props.handleThemSanPham(this.props.data);
              }}
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
