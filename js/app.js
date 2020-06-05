'use strict';
// Array contain the pictures
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
//Array contain clicks of the chart
var clicks1 = [];
//Array contain views of the chart
var views1 = [];
// Total clicks on on the pictures
var totalClicks = 0;
//Git the elemants byId form Html File 
var imagesSection = document.getElementById('imagesSection');
var leftImage = document.getElementById('leftImage');
var medelImage = document.getElementById('medelImage');
var rightImage = document.getElementById('rightImage');
// Array of Objects
Pruducts.all = [];
//Constructor to the Prducts 
function Pruducts(name) {
    this.productName = name;
    this.productImgPath = `images/${name}.jpg`;
    Pruducts.all.push(this);
    this.clicks = 0;
    this.view = 0;
}
//Create Objects from the constructor
for (var i = 0; i < productsNames.length; i++) {
    new Pruducts(productsNames[i]);
}
//Path of pectures
var productImgPath1 = '.png';
var productImgPath2 = '.gif';

// Array to Stor first itiration
var firstProducts = [];
//Vareabils to store the products
var leftProduct, medelProduct, rightProduct;
//Function to git the images and make sure they are not same in each prduct
function generateImages() {
    
    console.log(firstProducts);
    leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];

    while (leftProduct === rightProduct || leftProduct === medelProduct || rightProduct === medelProduct) {

        leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
        rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    }

    comparImagies();
}
// function to make new products in each iteration
function comparImagies() {

    while (leftProduct === medelProduct || leftProduct === rightProduct || firstProducts.includes(leftProduct.productName)) {

        leftProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    }
    
    while (rightProduct === medelProduct || rightProduct === leftProduct || firstProducts.includes(rightProduct.productName)) {
        rightProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    }

    while (medelProduct === leftProduct || medelProduct === rightProduct || firstProducts.includes(medelProduct.productName)) {
        medelProduct = Pruducts.all[randomNumber(0, Pruducts.all.length - 1)];
    }

    firstProducts.push(leftProduct.productName);
    firstProducts.push(medelProduct.productName);
    firstProducts.push(rightProduct.productName);
    
    console.log(firstProducts);
    while (firstProducts.length > 3) {
        firstProducts.shift();
    }
    console.log(firstProducts);
}

// function to render the emages
function renderImages() {

    generateImages();

    //If statments to change the path of the pectures if there is need

    if (leftProduct.productName === 'sweep') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath1;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        leftProduct.view++;

    } else if (leftProduct.productName === 'usb') {
        leftImage.src = 'images/' + leftProduct.productName + productImgPath2;
        leftImage.alt = leftProduct.productName;
        leftImage.title = leftProduct.productName;
        leftProduct.view++;

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

    } else if (medelProduct.productName === 'usb') {
        medelImage.src = 'images/' + medelProduct.productName + productImgPath2;
        medelImage.alt = medelProduct.productName;
        medelImage.title = medelProduct.productName;
        medelProduct.view++;
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

    } else if (rightProduct.productName === 'usb') {
        rightImage.src = 'images/' + rightProduct.productName + productImgPath2;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        rightProduct.view++;

    }
    else {
        rightImage.src = rightProduct.productImgPath;
        rightImage.alt = rightProduct.productName;
        rightImage.title = rightProduct.productName;
        rightProduct.view++;
    }
}
renderImages();

//Add event listener to render the images when a user click on the images and claculate the number of clicks and views  
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
//Helper function to stop the clicks after 25 clicks
function cancelHandelClick() {
    if (totalClicks == 25) {
        imagesSection.removeEventListener('click', handleClick);
    }
}
//Function to render the result as a list aftr 25 clicks
function renderResult() {
    var ul1 = document.getElementById('sumry');

    for (var i = 0; i < Pruducts.all.length; i++) {
        var li1 = document.createElement('li');
        ul1.appendChild(li1);
        li1.textContent = `${Pruducts.all[i].productName} has clicked ${Pruducts.all[i].clicks} Times and viewed ${Pruducts.all[i].view} Times`;
    }
}
//Helper function to calculate random numbers
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to render the chart that show the result of prducts
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

// function to stor the objets in the LocalStorage
function setObj() {
    var setProducts = JSON.stringify(Pruducts.all);
    localStorage.setItem('prduct', setProducts);
}

// function to retrive the objects from the LocalStorage
function getObj() {
    var getProducts = localStorage.getItem('prduct');
    Pruducts.all = JSON.parse(getProducts);
}

getObj();