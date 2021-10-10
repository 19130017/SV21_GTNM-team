import React, { Component } from "react";

export default class Groupdiary extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="intro-section small"
            style={{ backgroundImage: 'url("images/background.jpeg")' }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-md-7 mx-auto text-center"
                  data-aos="fade-up"
                >
                  <div className="intro">
                    <h1>Group diary</h1>
                    <p>Home / Group diary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section pb-0">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-4 mb-3 text-center">
                  <span className="caption">Group diary</span>
                  <h2 className="title-with-line mb-2 text-center" />
                </div>
              </div>
              <div>
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      data-toggle="tab"
                      href="#nav-week1"
                      role="tab"
                      aria-controls="nav-week1-tab"
                      aria-selected="true"
                    >
                      Week 1
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week2"
                      role="tab"
                      aria-controls="nav-week2-tab"
                      aria-selected="false"
                    >
                      Week 2
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week3"
                      role="tab"
                      aria-controls="nav-week3-tab"
                      aria-selected="false"
                    >
                      Week 3
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week45"
                      role="tab"
                      aria-controls="nav-week45-tab"
                      aria-selected="false"
                    >
                      Week 4-5
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week67"
                      role="tab"
                      aria-controls="nav-week67-tab"
                      aria-selected="false"
                    >
                      Week 6-7
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week89"
                      role="tab"
                      aria-controls="nav-week89-tab"
                      aria-selected="false"
                    >
                      Week 8-9
                    </a>
                  </div>
                </nav>
                <div
                  className="tab-content py-3 px-3 px-sm-0"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="nav-week1"
                    role="tabpanel"
                    aria-labelledby="nav-week1-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>Lên ý tưởng cho web nhóm</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>Tìm hiểu firebase</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>Tạo tên miền ".tk"</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>Tìm kiếm template</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>Design trên giấy</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 2 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week2"
                    role="tabpanel"
                    aria-labelledby="nav-week2-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>
                            Lên ý tưởng cho project nhóm <br />
                            Tạo trang web cá nhân
                          </td>
                          <td>
                            <a href="http://19130002.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>
                            Tìm hiểu về giao diện và các chức năng của project
                            <br />
                            Tạo trang web cá nhân
                          </td>
                          <td>
                            <a href="http://19130003.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>
                            Tạo &amp; cập nhật trang Group diary
                            <br />
                            Tạo trang web cá nhân
                          </td>
                          <td>
                            <a href="http://hci2021group02.tk/groupDiary">
                              <i className="fa fa-link" /> Group diary
                            </a>
                            <br />
                            <a href="http://19130017.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>
                            Tìm kiếm template project
                            <br />
                            Tạo trang web cá nhân
                          </td>
                          <td>
                            <a href="http://19130021.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>
                            Tìm hiểu về giao diện và các chức năng của project
                            <br />
                            Tạo trang web cá nhân
                          </td>
                          <td>
                            <a href="http://19130022.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 3 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week3"
                    role="tabpanel"
                    aria-labelledby="nav-week3-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>
                            Cập nhật groupdiary &amp; tìm hiểu chức năng của
                            project
                          </td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>
                            Lên ý tưởng xây dựng trang Home và About của nhóm
                          </td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>Hoàn thiện trang Technical của web nhóm</td>
                          <td>
                            <a href="http://hci2021group02.tk/technical">
                              <i className="fa fa-link" /> Technical
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>Hoàn thiện trang About của web nhóm</td>
                          <td>
                            <a href="http://hci2021group02.tk/about">
                              <i className="fa fa-link" /> About
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>
                            <ul>Hoàn thiện trang Home của web nhóm</ul>
                          </td>
                          <td>
                            <a href="http://hci2021group02.tk/">
                              <i className="fa fa-link" /> Home
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 4-5 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week45"
                    role="tabpanel"
                    aria-labelledby="nav-week45-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>
                            Thiết kế chức năng blog của project
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk/blog_details">
                              <i className="fa fa-link" /> Blog project
                            </a>
                            <br />
                            
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>
                            Thiết kế trang Home của project &amp; chức năng tìm
                            kiếm
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Home project
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>
                            Chuyển web nhóm sang react <br />
                            Hiện thực chức năng login của project
                          </td>
                          <td>
                            <a href="https://hci2021group02.tk">
                              <i className="fa fa-link" /> Web nhóm
                            </a>
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/login">
                              <i className="fa fa-link" /> Login
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>
                            Lên ý tưởng cho project: màu sắc, font chữ, bố cục
                            <br />
                            Tìm kiếm hình ảnh &amp; thiết kết trang category
                          </td>
                          <td>
                            Hoàn thành
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/category">
                              <i className="fa fa-link" /> Category
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>
                            Hiện thực trang anime-details của project
                            <br />
                            Hiện thực trang anime-watching của project
                          </td>
                          <td>
                            
                            <a href="https://quanlyanimehci21g2.tk/anime_watches">
                              <i className="fa fa-link" /> Watching
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 6-7 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week67"
                    role="tabpanel"
                    aria-labelledby="nav-week67-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>Hoàn thiện trang result của web nhóm</td>
                          <td>
                            <a href="https://hci2021group02.tk/result">
                              <i className="fa fa-link" /> Result
                            </a>
                          </td>

                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>
                            Điều hướng các trang, chia Header, Footer cho web
                            nhóm
                            <br />
                            Điều hướng các trang, chia Header, Footer cho
                            project nhóm
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Web project
                            </a>
                            <br />
                            <a href="https://hci2021group02.tk">
                              <i className="fa fa-link" /> Web nhóm
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>
                            Cập nhật group diary <br />
                            Hiện thực chức năng register của project
                          </td>
                          <td>
                            Hoàn thành
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/signup">
                              <i className="fa fa-link" /> Register
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>
                            Thiết kế project trên giấy &amp; tổng hợp file
                          </td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>
                            Thiết kế project trên giấy &amp; tổng hợp file
                          </td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 8-9 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week89"
                    role="tabpanel"
                    aria-labelledby="nav-week89-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="Mã số sinh viên">
                            MSSV
                          </th>
                          <th>Họ tên</th>
                          <th>Công việc được giao</th>
                          <th>Kết quả</th>
                          <th>Tiến độ</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Huỳnh Hữu Ân</td>
                          <td>
                            Chức năng liên hệ của project <br />
                            Chức năng quên mật khẩu của project
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk/contact">
                              <i className="fa fa-link" /> Contact
                            </a>
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/forgotPass">
                              <i className="fa fa-link" /> Forgot Pass
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Huỳnh Văn Hữu Ân</td>
                          <td>Trang project của nhóm</td>
                          <td>
                            <a href="https://hci2021group02.tk/project">
                              <i className="fa fa-link" /> Project
                            </a>
                          </td>

                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>Đỗ Thanh Bình</td>
                          <td>Chuyển project nhóm sang react</td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Web project
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>Lê Minh Chánh</td>
                          <td>Tổng hợp, sửa trang project, web nhóm</td>
                          <td>Hoàn thành</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguyễn Minh Châu</td>
                          <td>Hoàn thiện trang Style Guide của web nhóm</td>
                          <td>
                            <a href="https://hci2021group02.tk/styleGuide">
                              <i className="fa fa-link" /> Style Guide
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
