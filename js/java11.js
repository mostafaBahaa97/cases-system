// var obj={
// اكتب جوا صفات الحاجه اللى انا عايزها 
// سواء صفات بنى ادم او كتاب 
// }
//  لما بحتاج الزق ثابت ف متغير 
// console.log( `hi ${اسم المتغير اللى انا عايز اطبعو بعد هاى}`)


// var student ={
//     sName:'ali',
//     age:15,
//     gender:'male',
//     isGrad:false,
//     welcome:function(){
//         console.log(`hi ${student.sName}`)
//     },
//     adress:{code:'4564',street:"dasdda355"}

// }
// console.log( student.welcome())

// var x = Math.floor(1.5)بتقرب للصغير مهما كان الكسر كام
// var x = Math.ceil(1.1)بتقرب للكبير مهما كان الكسر كام
// var x = Math.round(1.1)بتقرب لاقرب رقم بقى سواء كبير او صغير
// لازم كلمه ماث اولها كابيتال زى ما مكتوبه


// function getRandomNumber() {
//     var num = Math.round(Math.random()*100)
//     document.getElementById('demo').innerHTML=num;

// }

// index    0              1                      2        3           4
// var mix=[[1,2,3],function(){console.log('hi')},"Mostafa",true,{age:27,phone:"012"}]
// console.log(mix[0][1])
// mix[1]()
// console.log(mix[4].phone)

// var students =[
//     {studentName:"ali",age:20,gender:"male"},
//     {studentName:"hend",age:20,gender:"female"},
//     {studentName:"ahmed",age:20,gender:"male"},
//     {studentName:"amr",age:20,gender:"male"},
//     {studentName:"amera",age:20,gender:"female"},
// ]
// // for(var i=0;i<students.length;i++){
// //     if( students[i].gender==="female"){
// //         console.log(students[i].studentName)
// //     }
// // }
// var box =``
// for(var i=0;i<students.length;i++){
//     box+=`
//     <div class="container d-flex justify-content-center align-items-center flex-wrap">
//         <div class="row">
//             <img src="photos/bagels.jpg" class="w-25" alt="">
//             <h2>${students[i].studentName }</h2>
//             <h4> ${students[i].age} </h4>
//             <p> ${students[i].gender} </p>
//         </div>
//     </div>
//     `
// }
// document.getElementById('demo').innerHTML=box;



// var colors =['red','green','blue','green','tomato','black','green']
// function getIndex(term) {
//     var result =[]
//     for ( var i=0; i<colors.length;i++){
//         if(colors[i]==term){
//             result.push(i)
//         }
//     }
//     return result
// }
// var finalResult = getIndex('green')
// console.log(finalResult)

var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn')
var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productDesc = document.getElementById('productDesc');
var productImage = document.getElementById('productImage');
var productList = []
addBtn.onclick = addProduct;
resetBtn.onclick = resetForm;
if (localStorage.getItem('product')!==null) {
    productList = JSON.parse(localStorage.getItem('product'))
    disply();
    
}else{
    productList
}
function addProduct() {
    var product = {
        pName: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productDesc.value,

        img: 'img.jpg'
    }
    console.log(product);
    if (document.getElementById('addBtn').innerHTML===('Add Product')) {
        
        productList.push(product);
    }else{
        productList.splice(currentIndex,1,product)
        document.getElementById('addBtn').innerHTML=('Add Product') 
        
    }
    localStorage.setItem('product',JSON.stringify(productList))
    disply()

    resetForm();
    console.log(productList)
}
function resetForm() {
    productName.value = null,
        productPrice.value = null,
        productCategory.value = null,
        productDesc.value = null
}

var currentIndex ;
function updateProduct(index) {
    currentIndex = index;
    console.log(productList[index].desc)
    productName.value = productList[index].pName;
    productPrice.value = productList[index].price;
    productCategory.value = productList[index].category;
    productDesc.value = productList[index].desc;
    document.getElementById('addBtn').innerHTML="Update Product"
    
}

function disply() {
    var box = ``;
    for (var i = 0; i < productList.length; i++) {
        box += `
        <div class="col-md-3 col-sm-6">
                <div class="product border">
                    <img src="photos/cake.jpg" class="w-100" alt="">
                    <div class="product-details p-3">
                        <h2 class="h4">${productList[i].pName} </h2>
                        <p class="text-secondary border-bottom pb-3">${productList[i].desc} </p>
                        <p><span class="fw-bold">Price</span><span>${productList[i].price} </span></p>
                        <p><span class="fw-bold">category</span><span>${productList[i].category} </span></p>
                        <div class="text-center">
        <button onclick="deletProduct(${i})" class="btn btn-outline-danger w-75 my-2">Delete<i class="fa fa-trash"></i></button>
        <button onclick="updateProduct(${i})" class="btn btn-outline-warning w-75 my-2">Update<i class="fa fa-edit"></i></button>
    </div>
                    </div>
                </div>
            </div>
        `
    }
    document.getElementById('rowBody').innerHTML = box;
}
var searchInput = document.getElementById('search')
function search1(){
    console.log(searchInput.value);
    var inputValue = searchInput.value;
    var box = ``;
    for (var i =0 ; i<productList.length;i++){
        if (productList[i].pName.toLowerCase().includes(inputValue.toLowerCase())===true ) {
            box += `
            <div class="col-md-3 col-sm-6">
                    <div class="product border">
                        <img src="photos/cake.jpg" class="w-100" alt="">
                        <div class="product-details p-3">
                            <h2 class="h4">${productList[i].pName} </h2>
                            <p class="text-secondary border-bottom pb-3">${productList[i].desc} </p>
                            <p><span class="fw-bold">Price</span><span>${productList[i].price} </span></p>
                            <p><span class="fw-bold">category</span><span>${productList[i].category} </span></p>
                            <div class="text-center">
            <button onclick="deletProduct(${i})" class="btn btn-outline-danger w-75 my-2">Delete<i class="fa fa-trash"></i></button>
            <button onclick="updateProduct(${i})" class="btn btn-outline-warning w-75 my-2">Update<i class="fa fa-edit"></i></button>
        </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
    document.getElementById("rowBody").innerHTML=box
}
function deletProduct(index) {
    console.log(index)
    productList.splice(index, 1)
    disply()
    localStorage.setItem("product", JSON.stringify(productList))
    console.log(productList)

}









// Array.from(document.getElementsByTagName('img'))//html collectio
// document.getElementsByTagName('')
// document.getElementsByName('')//NodeList
// document.getElementsByClassName('hello')//HTML Collection
// document.querySelector('.demo p')
// document.querySelectorAll('.demo p')

var demo = document.getElementById('demo')


demo.addEventListener('click',function () {
    welcome()
})

function welcome() {
    console.log('hi')
}

var btn = document.querySelector('button')

btn.addEventListener('click',function () {
    // btn.classList.toggle('bg-danger') دى بتضيف كلاسات 
    // btn.style.color='red' دى بتضيف ان لاين ستايل مش كلاسات
})