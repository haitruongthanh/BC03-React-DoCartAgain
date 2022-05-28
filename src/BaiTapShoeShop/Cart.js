import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div className="container">
        <h2>Giỏ hàng</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.soLuong}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.delProduct(item.id);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
