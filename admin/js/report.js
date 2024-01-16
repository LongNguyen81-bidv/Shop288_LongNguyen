
// var capNhat = true;
let ms_sp = ``;

const Xuat_Danh_sach = (ds) => {

    let html = ``;

    // ds.sort((a, b) => a.Ten.localeCompare(b.Ten))
    ds.forEach((item, index) => {

        html += `
        <tr>
            <td scope="row" class="text-center">${item.Ma_so}</td>
            <td class="text-center">
                <img src='${Dia_chi_Img}/${item.Ma_so}.png' class="" />
            </td>
            <td>${item.Ten}</td>
            
            <td class="text-right">$${item.Don_gia_Ban.toLocaleString()}<sup>đ</sup></td>
            <td class="text-center">${item.Nhom.Ma_so}</td>
            <td class="text-center">${item.Danh_sach_Phieu_Dat.length}</td>
            <td class="text-center"><a href="javaScript:void(0)" class="text-danger" onclick="chiTietDathang('${item.Ma_so}')">Chi tiết</a></td>
            
        </tr>
        `
        // onclick="window.location='chitiet.html'; 
        // chiTietDathang('${item.Ma_so}'); 
    })

    document.querySelector("#Th_Danhsach").innerHTML = html;
}

const KeyCode = (event) => {
    if (event.keyCode != 0 || event.keyCode == 13) {
        let gtTim = event.target.value.trim()
        let ds = dsBan.filter(x => x.Ten.toLowerCase().includes(gtTim.toLowerCase()))
        Xuat_Danh_sach(ds)

    }
}

// const chiTietDathang = (msp) => {
//     ms_sp = msp;
//     window.location = 'chitiet.html'
// }


let dsChiTiet = [];
async function chiTietDathang(msp) {
    ms_sp = msp;
    console.log(ms_sp);

    console.log(Nhom_sp(msp))
    if (Nhom_sp(msp) == 'DienThoai') {
        apiDienthoai().then(result => {
            dsChiTiet = result.noiDung.filter(item => item.Ma_so == ms_sp);
            console.log(dsChiTiet);
            // lưu dsChiTiet vao sessionStorage
            sessionStorage.setItem('dsChiTiet', JSON.stringify(dsChiTiet));
            // chuyển trang
            window.location = 'chitiet.html'
        })
    } else if (Nhom_sp(msp) == 'Tivi') {
        apiTivi().then(result => {
            dsChiTiet = result.noiDung.filter(item => item.Ma_so == ms_sp);
            console.log(dsChiTiet);
            // lưu dsChiTiet vao sessionStorage
            sessionStorage.setItem('dsChiTiet', JSON.stringify(dsChiTiet));
            // chuyển trang
            window.location = 'chitiet.html'
        })
    } else {
        apiFood().then(result => {
            dsChiTiet = result.noiDung.filter(item => item.Ma_so == ms_sp);
            console.log(dsChiTiet);
            // lưu dsChiTiet vao sessionStorage
            sessionStorage.setItem('dsChiTiet', JSON.stringify(dsChiTiet));
            // chuyển trang
            window.location = 'chitiet.html'
        })
    }

}

// Hàm tạo nhóm sp Điện thoại, Tivi, Mon ăn dự trên ms_sp. Bắt đầu = ANDROID, IPHONE: Điện thoại; Tivi: Tivi, còn lại là Món ăn
const Nhom_sp = (msp) => {
    // if msp begin Android or iphone
    if (msp.includes('ANDROID') || msp.includes('IPHONE')) {
        return 'DienThoai'
    } else if (msp.includes('TIVI')) {
        return 'Tivi'
    } else {
        return 'MonAn'
    }
}













