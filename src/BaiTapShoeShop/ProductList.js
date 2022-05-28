import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "../BaiTapShoeShop/style.css";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row">
          {this.props.productList.map((item, i) => {
            // console.log(item);
            return (
              <ProductItem
                key={i}
                data={item}
                handleThemSanPham={this.props.handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
