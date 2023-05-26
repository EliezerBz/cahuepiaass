const product = [
    {
        id: 0,
        img: 'img/rtx.png',
        title: 'GeForce RTX 3060',
        price: 9540,
    },
    {
        id: 1,
        img: 'img/astroaudifnos.png',
        title: 'Audifonos Astro a50',
        price: 7890,
    },
    {
        id: 2,
        img: 'img/camara.png',
        title: 'Camara Canon 550D',
        price: 15540,
    },
    {
        id: 3,
        img: 'img/impresora.png',
        title: 'Impresora EPSON',
        price: 6234,
    },
    {
        id: 4,
        img: 'img/laptop.png',
        title: 'Laptop Gaming Asus ROG',
        price: 10540,
    },
    {
        id: 5,
        img: 'img/monitor.png',
        title: 'Monitor GIGABYTE',
        price: 6781,
    },
    {
        id: 6,
        img: 'img/mouse.png',
        title: 'Logitech G502 LIGHTSPEED',
        price: 1510,
    },
    {
        id: 7,
        img: 'img/procesador.png',
        title: 'Procesador Ryzen 5 3600',
        price: 4540,
    }
];
const categorias = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;

document.getElementById('root').innerHTML = categorias.map((item)=>
{
    var {img, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${img}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Agregar Al Carrito</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categorias[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu Carrito está Vacío";
        document.getElementById("total").innerHTML = "$ "+0+".00 "
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {img, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${img}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style'font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='basura' onclick='delElement("+ (j++) +")'><img src=img/basura.png></i></div>"
            );
        }).join('')
    }
}