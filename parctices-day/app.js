
const getId = (id) => {
    
    return document.getElementById(id);
}

document.getElementById('add').addEventListener('click', function(event){

    const productName = getId('product-name');
    const qty = getId('qty');
    const price = getId('price');

  

    addToList();
    setLoacalStorage();


    
    
    
    
});


const setLoacalStorage = () => {

    let cart = 0;

    if(localStorage.getItem('cart')){
        console.log(localStorage.getItem('cart'));
    } else{
       localStorage.setItem('cart', JSON.stringify([{productName: 'abc', qty:2, price:10}]));
    }
}

const addToList = (productName, qty, price) => {

    const tbody = getId('tbody-add-item');

    const tr = document.createElement('tr');

    tr.innerHTML = `<td> dfasd </td> <td>2 </td> <td>3000</td> <td>6000</td>`;

    tbody.appendChild(tr);




}