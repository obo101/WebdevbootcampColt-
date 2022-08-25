// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const inputP = document.querySelector('#product')
const inputQ = document.querySelector('#qty')
const ulcontainer = document.querySelector('#list')
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const productInput = inputP.value
    const quantityInput = inputQ.value 
    addStuff(productInput, quantityInput)
    productInput = '';
    quantityInput = '';

    
});

const addStuff = ( product, quantity) => {
    const newInfo = document.createElement('li');
    newInfo.append(product)
    newInfo.append(quantity)
    ulcontainer.append(newInfo)

}

