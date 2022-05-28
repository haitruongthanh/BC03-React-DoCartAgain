import React, { Component } from "react";
import { dataShoeShop } from "./dataShoeShop";
import ProductList from "./ProductList";
import "../BaiTapShoeShop/style.css";
import Cart from "./Cart";

export default class BaiTapShoeShop extends Component {
  state = {
    productList: dataShoeShop,
    gioHang: [],
  };

  handleAddToCart = (sanPham) => {
    let gioHangClone = [...this.state.gioHang];
    let index = gioHangClone.findIndex((item) => {
      return item.id === sanPham.id;
    });

    if (index === -1) {
      let newProduct = { ...sanPham, soLuong: 1 };
      gioHangClone.push(newProduct);
    } else {
      gioHangClone[index].soLuong++;
    }

    this.setState(
      { gioHang: gioHangClone } /* , () => {
      console.log("Main", this.state.gioHang);
    } */
    );

    // console.log("Clone", gioHangClone);
  };

  handleDelProduct = (idProduct) => {
    let cartClone = [...this.state.gioHang];
    let index = cartClone.findIndex((item) => {
      return item.id === idProduct;
    });

    if (index !== -1) {
      cartClone.splice(index, 1);
      this.setState({ gioHang: cartClone });
    }
  };

  count = () => {
    let cartClone = [...this.state.gioHang];
    let tongSoLuong = 0;
    cartClone.forEach(function (item) {
      tongSoLuong += item.soLuong;
    });
    console.log("tong so luong", tongSoLuong);
    return tongSoLuong;
  };

  render() {
    return (
      <div className="mt-5 row">
        <div className="col-8">
          <ProductList
            productList={this.state.productList}
            handleAddToCart={this.handleAddToCart}
          />
        </div>
        <div className="col-4">
          {" "}
          <h4>Giỏ hàng</h4>
          {this.state.gioHang.length > 0 && (
            <Cart
              gioHang={this.state.gioHang}
              data={this.state.gioHang}
              delProduct={this.handleDelProduct}
              count={this.count}
            />
          )}
        </div>
      </div>
    );
  }
}
