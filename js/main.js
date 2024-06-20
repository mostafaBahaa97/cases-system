
var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn')
var caseName = document.getElementById('caseName');
var caseAge = document.getElementById('caseAge');
var productDesc = document.getElementById('productDesc');
var caseList = []
addBtn.onclick = add;
resetBtn.onclick = resetForm;
if (localStorage.getItem('product') !== null) {
    caseList = JSON.parse(localStorage.getItem('product'))
    disply();

} else {
    caseList
}
function add() {
    var product = {
        pName: caseName.value,
        price: caseAge.value,
        desc: productDesc.value
    }
    console.log(product);
    if (document.getElementById('addBtn').innerHTML === ('Add')) {

        caseList.push(product);
    } else {
        caseList.splice(currentIndex, 1, product)
        document.getElementById('addBtn').innerHTML = ('Add')

    }
    localStorage.setItem('product', JSON.stringify(caseList))
    disply()

    resetForm();
    console.log(caseList)
}
function resetForm() {
    caseName.value = null,
        caseAge.value = null,
        productDesc.value = null
}

var currentIndex;
function update(index) {
    currentIndex = index;
    console.log(caseList[index].desc)
    caseName.value = caseList[index].pName;
    caseAge.value = caseList[index].price;
    productDesc.value = caseList[index].desc;
    document.getElementById('addBtn').innerHTML = "Update"

}

function disply() {
    var box = ``;
    for (var i = 0; i < caseList.length; i++) {
        box += `
        <div class="col-lg-12 mb-5 shadow rounded-5">
                <div class=" border rounded-5 border-2 my-3">
                    <div class=" p-3">
                        <h2 class="h4">${caseList[i].pName} </h2>
                        <p><span class="fw-bold"> السن : </span><span>${caseList[i].price} </span></p>
                        <p class="text-secondary border-top border-bottom py-3 overflow-auto">${caseList[i].desc} </p>
                        <div class="text-center">
        <button onclick="deletProduct(${i})" class="btn btn-outline-danger w-75 my-2">Delete<i class="me-2 fa fa-trash"></i></button>
        <button onclick="update(${i})" class="btn btn-outline-warning w-75 my-2">Update<i class="me-2 fa fa-edit"></i></button>
    </div>
                    </div>
                </div>
            </div>`}
    document.getElementById('rowBody').innerHTML = box;
}
var searchInput = document.getElementById('search')
function search1() {
    console.log(searchInput.value);
    var inputValue = searchInput.value;
    var box = ``;
    for (var i = 0; i < caseList.length; i++) {
        if (caseList[i].pName.toLowerCase().includes(inputValue.toLowerCase()) === true) {
            box += `
            <div class="col-lg-12 mb-5 shadow rounded-5">
                    <div class=" border rounded-5 border-2 my-3">
                        <div class=" p-3">
                            <h2 class="h4">${caseList[i].pName} </h2>
                            <p><span class="fw-bold"> السن : </span><span>${caseList[i].price} </span></p>
                            <p class="text-secondary border-top border-bottom py-3 overflow-auto">${caseList[i].desc} </p>
                            <div class="text-center">
            <button onclick="deletProduct(${i})" class="btn btn-outline-danger w-75 my-2">Delete<i class="me-2 fa fa-trash"></i></button>
            <button onclick="update(${i})" class="btn btn-outline-warning w-75 my-2">Update<i class="me-2 fa fa-edit"></i></button>
        </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
    document.getElementById("rowBody").innerHTML = box
}
function deletProduct(index) {
    console.log(index)
    caseList.splice(index, 1)
    disply()
    localStorage.setItem("product", JSON.stringify(caseList))
    console.log(caseList)

}