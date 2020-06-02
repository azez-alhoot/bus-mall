'use strict';

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
var arr1 = [];
var arr2 = [];
var clicks1 = [];
var views1 = [];
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
function generateImages() {

    leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];

    while (leftProduct === medelProduct || leftProduct === rightProduct || medelProduct === rightProduct) {
        leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    }

    arr1 = [leftProduct, medelProduct, rightProduct];
    console.log(arr1);

}


function renderImages() {

    generateImages();

    if (leftProduct.productName === 'sweep') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath1;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        leftProduct.view++;
        // console.log(leftProduct.productName);

    } else if (leftProduct.productName === 'usb') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath2;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        leftProduct.view++;
        // console.log(leftProduct.productName);

    } else {

        leftImage.src = leftProduct.productImgPath;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        leftProduct.view++;
    }

    if (medelProduct.productName === 'sweep') {
        medelImage.src = 'images/' + medelProduct.productName + productImgPath1;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        medelProduct.view++;
        // console.log(medelProduct.productName);

    } else if (medelProduct.productName === 'usb') {
        medelImage.src = 'images/' + medelProduct.productName + productImgPath2;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        medelProduct.view++;
        // console.log(medelProduct.productName);
    }
    else {
        medelImage.src = medelProduct.productImgPath;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        medelProduct.view++;
    }

    if (rightProduct.productName === 'sweep') {
        rightImage.src = 'images/' + rightProduct.productName + productImgPath1;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        rightProduct.view++;
        // console.log(rightProduct.productName);

    } else if (rightProduct.productName === 'usb') {
        rightImage.src = 'images/' + rightProduct.productName + productImgPath2;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        rightProduct.view++;
        // console.log(rightProduct.productName);
    }
    else {
        rightImage.src = rightProduct.productImgPath;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        rightProduct.view++;
    }
}
renderImages();

imagesSection.addEventListener('click', handleClick);
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
        // compareImages();
        
        renderImages();
        setObj();
    } else {

        for (var i = 0; i < productsNames.length; i++) {
            var cli = Pruducts.all[i].clicks;
            clicks1.push(cli);
            var vie = Pruducts.all[i].view
            views1.push(vie);
        }
        renderChart();
        cancelHandelClick();
        renderResult();
    }
}

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
        li1.textContent = `${Pruducts.all[i].productName} has clicked ${Pruducts.all[i].clicks} Times and viewed ${Pruducts.all[i].view} Times`;
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function renderChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productsNames,
            datasets: [{
                label: '# of Votes clicks',
                data: clicks1,
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 3,
            },
            {
                label: '# of views',
                data: views1,
                backgroundColor: 'red',
                borderColor: 'blue',
                borderWidth: 3,
            }]
        },

        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}


function setObj(){
    var setProducts = JSON.stringify(Pruducts.all);
    localStorage.setItem('prduct',setProducts);
}


function getObj(){
    var getProducts = localStorage.getItem('prduct');
    Pruducts.all = JSON.parse(getProducts);
}

getObj();