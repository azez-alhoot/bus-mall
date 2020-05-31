'use strict'

var productsNames = ['bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'
];

var totalClicks = 0;

var imagesSection = document.getElementById('imagesSection');
var leftImage = document.getElementById('leftImage');
var medelImage = document.getElementById('medelImage');
var rightImage = document.getElementById('rightImage');

Pruducts.all = [];

function Pruducts(name) {
    this.productName = name;
    this.productImgPath = `images/${name}.jpg`;
    Pruducts.all.push(this);
    this.clicks = 0;
    this.view = 0;
}

for (var i = 0; i < productsNames.length; i++) {
    new Pruducts(productsNames[i]);
}

var productImgPath1 = '.png';
var productImgPath2 = '.gif';

var leftProduct, medelProduct, rightProduct;
function renderImages() {
    leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    console.log(leftProduct, medelProduct, rightProduct);

    if (leftProduct.productName === medelProduct.productName && medelProduct.productName === rightProduct.productName) {
        leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        console.log(leftProduct, medelProduct, rightProduct);

    } else if (leftProduct.productName === medelProduct.productName) {
        leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        // medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        // rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        console.log(leftProduct, medelProduct, rightProduct);

    } else if (leftProduct.productName === rightProduct.productName) {
        // leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        // medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        console.log(leftProduct, medelProduct, rightProduct);

    } else if (rightProduct.productName === medelProduct.productName) {
        // leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        // rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        console.log(leftProduct, medelProduct, rightProduct);
    }


    if (leftProduct.productName === 'sweep') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath1;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        console.log(leftProduct.productName);

    } else if (leftProduct.productName === 'usb') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath2;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        console.log(leftProduct.productName);
    
    } else {

        leftImage.src = leftProduct.productImgPath;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
    }

    if (medelProduct.productName === 'sweep') {
        medelImage.src = 'images/' + medelProduct.productName + productImgPath1;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        console.log(medelProduct.productName);

    } else if (medelProduct.productName === 'usb') {
        medelImage.src = 'images/' + medelProduct.productName + productImgPath2;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        console.log(medelProduct.productName);
    }
    else {
        medelImage.src = medelProduct.productImgPath;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
    }

    if (rightProduct.productName === 'sweep') {
        rightImage.src = 'images/' + rightProduct.productName + productImgPath1;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        console.log(rightProduct.productName);

    } else if (rightProduct.productName === 'usb') {
        rightImage.src = 'images/' + rightProduct.productName + productImgPath2;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        console.log(rightProduct.productName);
    }
    else {
        rightImage.src = rightProduct.productImgPath;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
    }


}

renderImages();

imagesSection.addEventListener('click', handleClick)

function handleClick(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'imagesSection') {
            totalClicks++;
        }
        if (event.target.id === 'leftImage') {
            leftProduct.clicks++;
        }
        if (event.target.id === 'medelImage') {
            medelProduct.clicks++;
        }
        if (event.target.id === 'rightImage') {
            rightProduct.clicks++;
        }
        renderImages();
    } else {
        renderResult();
    }
}

// renderResult();
cancelHandelClick();

function cancelHandelClick() {
    if (totalClicks == 25) {
        imagesSection.removeEventListener('click', handleClick);
    }
}


function renderResult() {
    var ul1 = document.getElementById('sumry');

    for (var i = 0; i < Pruducts.all.length; i++) {
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        li1.textContent = `${Pruducts.all[i].productName} has ${Pruducts.all[i].clicks}`;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
