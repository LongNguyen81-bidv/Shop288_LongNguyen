// const urlServer = `http://127.0.0.1:8080`;
// const urlServer = `https://hephucvu-dmo6.onrender.com`;
const urlServer = 'https://server-js288-shop.onrender.com'; //Server from private repository on github

const urlImage = `https://res.cloudinary.com/do1s1zzdh/image/upload/v1/images`;

const apiCuahang = () => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "Cuahang"
        http.onload = () => {
            var obj = JSON.parse(http.responseText)
            resolve(obj);
        }
        http.open("GET", `${urlServer}/${thamso}`)
        http.send()
    })
}

const apiTivi = () => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "dsTivi"
        http.onload = () => {
            var obj = JSON.parse(http.responseText)
            resolve(obj);
        }
        http.open("GET", `${urlServer}/${thamso}`)
        http.send()
    })

}
const apiDienthoai = () => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "dsDienthoai"
        http.onload = () => {
            var obj = JSON.parse(http.responseText)
            resolve(obj)
        }
        http.open("GET", `${urlServer}/${thamso}`)
        http.send()
    })

}
const apiMathang = () => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "dsMathang"
        http.onload = () => {
            var obj = JSON.parse(http.responseText)
            resolve(obj)
        }
        http.open("GET", `${urlServer}/${thamso}`)
        http.send()
    })

}

const apiLienhe = (thongTin) => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "Lienhe";
        http.onload = () => {
            var obj = JSON.parse(http.responseText);
            resolve(obj);
        }
        http.open("POST", `${urlServer}/${thamso}`);
        http.send(JSON.stringify(thongTin));
    })
}

const apiDathang = (donDathang) => {
    return new Promise((resolve,) => {
        let http = new XMLHttpRequest()
        let thamso = "Dathang";
        http.onload = () => {
            var obj = JSON.parse(http.responseText);
            resolve(obj);
        }
        http.open("POST", `${urlServer}/${thamso}`);
        http.send(JSON.stringify(donDathang));
    })
}





