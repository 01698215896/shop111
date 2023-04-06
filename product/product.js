let laydulieu = localStorage.getItem("product");
let product = JSON.parse(laydulieu);
console.log(product.name);
let bao = document.querySelector(".bao");

let pro = `<div class="fashion_img">
<div class="fashion_img-chinh">
  <img src="${product.img}" alt="" id="o" />
</div>
</div>
<div class="fashion_content">
<div class="tensanpham">
  <p class="donu">${product.name}</p>
</div>
<div class="danhgia">
  <div class="danhgia1">
    <span class="n">Đánh giá</span>
    <span class="m"> Đã bán</span>
  </div>
  <div class="tocao">
    <span class="l">Tố cáo</span>
  </div>
</div>
<div class="fashion_price">
  <p class="price-now">${product.price}</p>
  <p class="size">Kích thước:</p>
 
  <div class="gioithieusanpham">
    <h2>Mô Tả:</h2>
    <p>
      Chất liệu: vải tổng hợp cao cấp <br />
      Kiểu dáng: chân váy bút chì cạp cao, tone màu đỏ đô, cạp đính
      khuy ngọc<br />
      Giá ưu đãi chỉ áp dụng khi đặt hàng online
    </p>
  </div>
  <div class="sl_buynow">
    <div class="lsv">
      <button class="btn1 short1">-</button>
      <input type="text" name="" id="" value="1" class="sl sl1" />
      <button class="btn1 long1">+</button>
    </div>
    <div class="themgiohang1">
      <button class="themvaogiohang">Thêm vào giỏ hàng</button>
    </div>
    <div class="buynow1">
      <button class="buynow_1">Buy Now</button>
    </div>
  </div>
</div>
</div>`;

bao.innerHTML += pro;
