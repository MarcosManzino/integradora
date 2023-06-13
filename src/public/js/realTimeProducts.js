console.log('Hola soy el cliente')

const socket = io()

socket.on('wellcome', (data)=>{
    console.log(data)
})
socket.on('newData', (data)=>{
    render(data)
})

function render(data) {
    const html = data.map(prod=>{
        return (`
        <div class="card" style="width: 15rem;">
            <img src="https://via.placeholder.com/180x180" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p class="card-text">Description:${prod.description}</p>
                <p class="card-text">Price: $<strong>${prod.price}</strong> || ID: ${prod.id}</p>
            </div>
            <div class="card-body">
                <button id="${prod.id}" class="btn btn-primary">Go somewhere</button>
            </div> 
        </div>
        `)
    }).join(' ') 
    document.getElementById('z-cards').innerHTML = html
}

function addProduct(){
    const newProduct={
            title: document.getElementById('title').value,
            description:document.getElementById('description').value,
            price: document.getElementById('price').value,
            thumbnail: document.getElementById('thumbnail').value,
            code:document.getElementById('code').value,
            stock:document.getElementById('stock').value,
            category:document.getElementById('category').value,
            status:true,    
    }
    socket.emit('addProduct', newProduct) 
return false
}
function delProduct(){
    let pId= {
        id:document.getElementById('id').value
    }
    socket.emit('delProduct', pId)
    return false
}