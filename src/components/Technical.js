import React, { Component } from "react";

export default class Technical extends Component {
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
                    <h1>Technical</h1>
                    <p>Home / Technical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section pb-0">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-4 mb-3 text-center">
                  <span className="caption">Technical</span>
                  <h2 className="title-with-line mb-2 text-center">Firebase</h2>
                </div>
              </div>
              <div className="row">
                <h2 className="text-center title">
                  Firebase là gì? Cách "deploy" website lên firebase?
                </h2>
                <div className="intro-text">
                  <p>
                    Chào các bạn đến với web của nhóm chúng mình. Hôm nay mình
                    sẽ hướng dẫn cho các bạn các deploy{" "}
                    <strong>
                      <a href="https://www.w3schools.com/" target="_blank">
                        "HTML-CSS-JS"
                      </a>
                    </strong>{" "}
                    lên firebase với{" "}
                    <strong>
                      <a href="https://www.w3schools.com/" target="_blank">
                        "ReactJS"
                      </a>
                    </strong>{" "}
                    luôn nhé.
                  </p>
                  <p>
                    <strong>Lưu ý: </strong>Do ReactJS bổ sung thêm một số bước
                    nên các bạn xem trước một lượt rồi làm theo nhé!!!
                    <br />
                  </p>
                  <h3>
                    <strong>Bắt đầu thôi!!!</strong>
                  </h3>
                  <p />
                </div>
                <div className="tutorial-text">
                  <div className="part1-text">
                    <h4 className="subtitle">
                      <strong>Phần 1: Firebase là gì?</strong>
                    </h4>
                    <p>
                      Trước khi bắt đầu vào công việc chính thì chúng ta sẽ tìm
                      hiểu sơ qua khái niệm, ưu điểm,...
                    </p>
                    <p>
                      <strong>Khái niệm: </strong> Firebase là một dịch vụ cơ sở
                      dữ liệu thời gian thực được cung cấp bởi Google và hoạt
                      động trên nền tảng đám mây nhằm hỗ trợ việc tạo ra các web
                      application, mobile application với chất lượng cao.
                      <br />
                      Với việc sử dụng Firebase, developer có thể tập trung vào
                      việc phát triển application mà không cần lo về việc sản
                      phẩm của mình sẽ hoạt động và được quản lý thể nào ở phía
                      Backend.
                    </p>
                    <strong>Ưu điểm</strong> của firebase là gì tại sao chúng ta
                    nên dùng nó?
                    <br /> Ở khái niệm đã nói một cách tổng quát về ưu điểm của
                    firebase, mình sẽ liệt kê lại một số ưu điểm sau:
                    <ul>
                      <li>Tạo tài khoản và sử dụng dễ dàng</li>
                      <li>Tốc độ phát triển nhanh</li>
                      <li>Firebase không có máy chủ</li>
                      <li>Tập trung vào phát triển giao diện người dùng </li>
                      <li>Tạo lưu lượng truy cập</li>
                      <li>Theo dõi lỗi</li>
                      <li>Học máy (Machine Learning)</li>
                      <li>....</li>
                    </ul>
                    <p />
                    <p>
                      Tìm hiểu sơ sơ vậy thôi, mình nghĩ các bạn cũng chưa chắc
                      đã đọc phần này đâu.
                      <br />
                      Để tránh mất thời gian thì chúng ta vào phần chính thôi!!
                    </p>
                  </div>
                  <div className="part2-text">
                    <h4 className="subtitle">
                      <strong>Phần 2: Deploy web lên Firebase</strong>{" "}
                    </h4>
                    <p>
                      Bước 1: Các bạn truy cập vào trang firebase{" "}
                      <a href="https://firebase.google.com/" target="_blank">
                        tại đây
                      </a>{" "}
                      <br />Ở bước này các bạn đăng nhập vào tài khoản google
                      sau đó chọn vào{" "}
                      <strong>"Truy cập bảng điều khiển"</strong> or{" "}
                      <strong>"Go to console"</strong>
                    </p>
                    <img
                      src="images/img-firebase/1.png"
                      alt="Go to console"
                      className="img-tech"
                    />
                    <p>
                      Các bạn chọn <strong>"Add project"</strong> và{" "}
                      <strong>tạo tên project</strong>
                    </p>
                    <img
                      src="images/img-firebase/2.png"
                      alt="add project"
                      className="img-tech"
                    />
                    <img
                      src="images/img-firebase/3.png"
                      alt="create"
                      className="img-tech"
                    />
                    <br />
                    Các bạn làm tiếp theo các ảnh sau:
                    <br />
                    <img
                      src="images/img-firebase/4.png"
                      alt=""
                      className="img-tech"
                    />
                    <img
                      src="images/img-firebase/5.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Bước 2: Sau khi <strong>Create project</strong>, các bạn
                      tiếp tục tạo tên{" "}
                      <a href="http://www.dot.tk/" target="_blank">
                        miền .tk
                      </a>{" "}
                      <br />
                      Kiểm tra xem tên miền đã tồn tại hay chưa và{" "}
                      <strong>checkout</strong>
                    </p>
                    <img
                      src="images/img-firebase/6.png"
                      alt="domain tk"
                      className="img-tech"
                    />
                    <p>
                      Các bạn chọn số tháng sử dụng miền phí tên miền &amp;{" "}
                      <strong>Chọn continue</strong>{" "}
                    </p>
                    <img
                      src="images/img-firebase/7.png"
                      alt="continue"
                      className="img-tech"
                    />
                    <p>Sau đó sẽ xuất hiện bảng sau:</p>
                    <img
                      src="images/img-firebase/8.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Các bạn đăng nhập và nhập đầy đủ thông tin nó sẽ xuất hiện
                      bảng tiếp theo và chọn <strong>Complete Order</strong>
                    </p>
                    <img
                      src="images/img-firebase/9.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Bước 3: Các bạn dùng  {" "}
                      <a href="https://code.visualstudio.com/" target="_blank">
                      VSCode
                      </a>{" "}
                      để chạy lệnh command or dùng command prompt của Window (
                      <strong>khuyến khích dùng VSCode</strong> )
                    </p>
                    <p>
                      Trước khi thực hiện thao tác dưới đây các bạn cài{" "}
                      <a href="https://nodejs.org/en/" target="_blank">
                        NodeJS
                      </a>{" "}
                      trước nhé!!!!!!
                    </p>
                    <p>
                      Dưới đây sẽ là hướng dẫn cho <strong>React</strong> trước
                      các bạn deploy <strong>"HTML-CSS-JS" </strong>
                      có thể bỏ qua bước này
                    </p>
                    <p>Bước 3.1: Tạo react-app và chạy run build</p>
                    <p>
                      <strong>npm install -g create-react-app</strong> <br />
                      <strong>create-react-app "Ten"</strong> <br />
                      Các bạn nhớ dùng lệnh <span>cd "Ten"</span> để chuyển vị
                      trí thư mục nhé rồi mới chạy được lệnh
                      <strong> npm run build</strong>
                    </p>
                    <img
                      src="images/img-firebase/10.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Bước 3.2: Các bạn làm theo để tạo firebase (áp dụng cho cả
                      "HTML-CSS-JS" luôn nhé)
                    </p>
                    <p className>
                      <strong>npm i -g firebase-tools</strong> <br />
                    </p>
                    <strong>firebase login</strong>
                    <p>
                      Các bạn tiến hành đăng nhập vào tài khoản Google đã tạo ở{" "}
                      <strong>bước 1</strong> nhé
                    </p>
                    <img
                      src="images/img-firebase/11.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Lệnh <strong>firebase init</strong>{" "}
                    </p>
                    <p>
                      Các bạn sử dụng <strong>PageUp &amp; PageDown</strong> để
                      di chuyển, nhấn <strong>Space</strong> để khóa &amp;{" "}
                      <strong>Enter</strong> để chọn{" "}
                    </p>
                    <img
                      src="images/img-firebase/12.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Ở phần{" "}
                      <strong>
                        Select a default Firebase project for this directory
                      </strong>{" "}
                      các bạn chọn vào{" "}
                      <strong>
                        tên project đã tạo ở <strong>bước 1</strong>
                      </strong>
                    </p>
                    <img
                      src="images/img-firebase/13.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Ở dòng{" "}
                      <strong>
                        What do you want to use as your public directory?{" "}
                      </strong>
                      <br /> ở đây các bạn đang thao tác với{" "}
                      <strong>"HTML-CSS-JS"</strong> thì tạo folder
                      <strong> public</strong> sau đó chuyển hết file vào trong
                      public và <strong>Enter</strong>
                    </p>
                    <p>
                      Còn các bạn thao tác với <strong>ReactJS</strong> thao tác
                      như hình
                    </p>
                    <img
                      src="images/img-firebase/14.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Sau khi các bạn chạy lệnh<strong> firebase deploy</strong>{" "}
                      nó đã được cập nhập lên firebase
                    </p>
                    <p>
                      Bước 4: Các bạn truy cập vào trang{" "}
                      <a
                        href="https://my.freenom.com/clientarea.php"
                        target="_blank"
                      >
                        freenom
                      </a>{" "}
                      để liên kết firebase với tên miền .tk
                    </p>
                    <p>
                      Sau khi các bạn đăng nhập sẽ xuất hiện bảng dưới đây. Các
                      bạn chọn vào <strong>"My domains"</strong>{" "}
                    </p>
                    <img
                      src="images/img-firebase/15.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Chọn vào <strong>Manage Domain</strong>
                    </p>
                    <img
                      src="images/img-firebase/16.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Sau đó các bạn đăng nhập vào{" "}
                      <a href="https://firebase.google.com/" target="_blank">
                        firebase
                      </a>{" "}
                      và ở giao diện các bạn chọn vào phần{" "}
                      <strong>hosting</strong> chọn{" "}
                      <strong>Add custom domain</strong>
                    </p>
                    <img
                      src="images/img-firebase/22.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Các bạn nhập vào địa chỉ đã tạo từ trước và chọn{" "}
                      <strong>continue</strong>
                    </p>
                    <img
                      src="images/img-firebase/17.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>Các bạn copy value và làm như bên dưới</p>
                    <img
                      src="images/img-firebase/18.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Sau khi làm xong bước <strong>Save Changes</strong> các
                      bạn đợi khoảng 5-10p để nó tạo liên kết
                    </p>
                    <img
                      src="images/img-firebase/19.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Sau khi đợi 5-10p các bạn f5 lại trang và chuyển qua tab
                      firebase chọn <strong>Verify</strong> sẽ xuất hiện tab sau
                    </p>
                    <img
                      src="images/img-firebase/20.png"
                      alt=""
                      className="img-tech"
                    />
                    <p>
                      Sau khi bạn nhấn finish thì bạn đã hoàn thành các bạn có
                      thể truy cập được web bình thường rồi nhé
                    </p>
                    <img
                      src="images/img-firebase/23.png"
                      alt=""
                      className="img-tech"
                    />
                    <h4>
                      Nếu các bạn làm đến đây mà không được thì các bạn hãy liên
                      hệ với mình qua{" "}
                      <a href="mailto:dothanhbinhdev@gmail.com">email</a> nhé
                    </h4>
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
