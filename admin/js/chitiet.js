
// var capNhat = true;
const ChiTiet = (ds, tag) => {
    // console.log(ds);
    let html = ``;
    // ds.sort((a, b) => a.Ten.localeCompare(b.Ten))
    console.log(ds[0].Danh_sach_Phieu_Dat);
    for (i = 0; i < ds[0].Danh_sach_Phieu_Dat.length; i++) {
        // console.log(ds[i].Ma_so);
        html += `
        <tr>
            <td scope="row" class="text-center">${ds[0].Ma_so}</td>

            <td>${ds[0].Ten}</td>

            <td class="text-right">${ds[0].Don_gia_Ban.toLocaleString()}<sup>đ</sup></td>
            <td class="text-right">${ds[0].Danh_sach_Phieu_Dat[i].Khach_hang.Ho_ten}</td>
            <td class="text-right">${ds[0].Danh_sach_Phieu_Dat[i].Khach_hang.Dien_thoai}</td>
            <td class="text-right">${ds[0].Danh_sach_Phieu_Dat[i].Khach_hang.Email}</td>
            <td class="text-right">${ds[0].Danh_sach_Phieu_Dat[i].Ngay_Dat_hang}</td>
            <td class="text-right">${ds[0].Danh_sach_Phieu_Dat[i].Ngay_Giao_hang}</td>
        </tr>
        `



    }

    console.log(html);
    tag.innerHTML = html;

}














