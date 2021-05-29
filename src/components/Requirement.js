import React, { Component } from "react";

export default class Requirement extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Chức năng</th>
              <th>Người đề xuất</th>
              <th>Người thiết kế</th>
              <th>Người thực hiện</th>
              <th>Thời gian dự kiến</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Đăng ký</td>
              <td>Đỗ Thanh Bình <br /> &amp; Huỳnh Văn Hữu Ân</td>
              <td>Lê Minh Chánh</td>
              <td>Đỗ Thanh Bình</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Đăng nhập</td>
              <td>Đỗ Thanh Bình <br /> &amp; Huỳnh Văn Hữu Ân</td>
              <td>Lê Minh Chánh</td>
              <td>Đỗ Thanh Bình</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Quên mật khẩu</td>
              <td>
                Đỗ Thanh Bình <br /> &amp; Lê Minh Chánh
              </td>
              <td>Lê Minh Chánh</td>
              <td>Huỳnh Hữu Ân</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
            <tr>
              <td scope="row">4</td>
              <td> Chức năng comment</td>
              <td>
                Nguyễn Minh Châu <br /> &amp; Huỳnh Văn Hữu Ân
              </td>
              <td>Lê Minh Chánh</td>
              <td>Huỳnh Hữu Ân</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
            <tr>
              <td scope="row">5</td>
              <td>Chức năng blog comment</td>
              <td>Huỳnh Văn Hữu Ân</td>
              <td>Lê Minh Chánh</td>
              <td>Huỳnh Hữu Ân</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
            <tr>
              <td scope="row">6</td>
              <td>Chức năng liên hệ</td>
              <td>
                Nguyễn Minh Châu <br /> &amp; Huỳnh Văn Hữu Ân
              </td>
              <td>Lê Minh Chánh</td>
              <td>Huỳnh Hữu Ân</td>
              <td>
                26/4/2021 đến <br /> 29/4/2021
              </td>
              <td>Hoàn thành</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
