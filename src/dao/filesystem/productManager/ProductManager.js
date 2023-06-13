const fs = require("fs");
class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
  }
  addProduct(prodNew) {
    let archive = fs.existsSync(this.path);
    if (!archive) {
            let id = Math.floor(Math.random() * 100);
            prodNew["id"] = id;
            prodNew["status"] = true;
            this.products.push(prodNew);
            fs.writeFileSync(this.path,JSON.stringify(this.products, null, 2),"utf-8");
            console.log(`Product added successfully`);
    } 
    else {
            let read = fs.readFileSync(this.path, "utf-8");
            let parse = JSON.parse(read);
            let id = Math.floor(Math.random() * 100);
            prodNew["id"] = id;
            prodNew["status"] = true;
            parse.push(prodNew);
            fs.writeFileSync(this.path, JSON.stringify(parse, null, 2), "utf-8");
            console.log(`Product added successfully`);
    }
  }
  async upDateProduct(arr, id) {
    try {
        let read = await fs.promises.readFile(this.path, "utf-8");
        let parse = JSON.parse(read);
        let IndexProduct = parse.findIndex((prod) => prod.id == id);
        let update = Object.assign({}, parse[IndexProduct], arr);
        parse[IndexProduct] = update;
        await fs.promises.writeFile(this.path,JSON.stringify(parse, null, 2),"utf-8");
        console.log(update);
    } 
    catch {
        console.log("ERROR: ---> upDateProduct");
    }
  }
  deleteProduct(id) {
    
        let read = fs.readFileSync(this.path, "utf-8");
        let parse = JSON.parse(read);
        let productoFiltrado = parse.filter((i) => i.id !== id);
        fs.writeFileSync(this.path,JSON.stringify(productoFiltrado, null,2),"utf-8");
        console.log(`Product id: ${id} Deleted`)      
  }
  getProducts() {
    let archive = fs.existsSync(this.path);
    if (!archive) {
      console.log(this.products);
    }
    else{
      let read = fs.readFileSync(this.path, "utf-8");
        let parse = JSON.parse(read);
        return parse
    }
  }
  async getProductById(id) {
    try {
        let read = await fs.promises.readFile(this.path, "utf-8");
        let parse = JSON.parse(read);
        let productoFiltrado = parse.find((prod) => prod.id == id);
        if (productoFiltrado == undefined) {
            console.log(`Product id: ${id}, dont exist`);
        } 
        else {
            console.log(productoFiltrado);
        }
    } 
    catch {
        console.log("ERROR: ---> getProductById");
    }
  }
}

let producto1 = {
  title: "tv",
  description: "Electrodomestico",
  price: 100,
  thumbnail: "thumbnail",
  code: "aaa1",
  category:"",
  status:true,
  stock: 20,
};
let producto2 = {
  title: "Mouse",
  description: "Electrodomestico",
  price: 100,
  thumbnail: "thumbnail",
  code: "aaa1",
  category:"",
  status:true,
  stock: 20,
};
let producto3 = {
  title: "Led",
  description: "Electricidad",
  price: 100,
  thumbnail: "Sin imagen",
  code: "C1",
  category:"",
  status:true,
  stock: 20,
};
let producto4 = {
  title: "Reloj",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E1",
  category:"",
  status:true,
  stock: 20,
};
let producto5 = {
  title: "Headphone",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E2",
  category:"",
  status:true,
  stock: 20,
};
let producto6 = {
  title: "Microphone",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E3",
  category:"",
  status:true,
  stock: 20,
};
let producto7 = {
  title: "WebCam",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E4",
  category:"",
  status:true,
  stock: 20,
};
let producto8 = {
  title: "CPU",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E5",
  category:"",
  status:true,
  stock: 20,
};
let producto9 = {
  title: "PenDrive",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E6",
  category:"",
  status:true,
  stock: 20,
};
let producto10 = {
  title: "Cable HDMI",
  description: "Elect",
  price: 100,
  thumbnail: "Sin imagen",
  code: "E7",
  category:"",
  status:true,
  stock: 20,
};
// let product = new ProductManager("./Products.json");
// product.getProducts()
// product.addProduct(producto9);
// product.upDateProduct({title:'Cell',price:800, stock:10, description:'Movil'},41)
// product.getProductById(70)
// product.deleteProduct(69)
module.exports = ProductManager