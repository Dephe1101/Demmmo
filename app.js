let validate = new validationPlus()

resultToTal = () => {

}

rangeFunction = () => {
    let x = document.getElementById("myRange").value;
    document.getElementById("vayRange").innerHTML = x;
    xeMayRender()
}

rangeTraFunction = () => {
    let x = document.getElementById("myRange1").value;
    document.getElementById("traRange").innerHTML = x;
    xeMayRender()

}

getEle = (id) => {
    return document.getElementById(id)
}


plusButton = () => {
    let x = parseInt(getEle("myRange").value, 10)
    validate.testValuePlus(x)
    if (x < 100000000) {
        x += 1000000
        getEle("myRange").value = x
        getEle("vayRange").innerHTML = x
    }
    xeMayRender()
}
minusButton = () => {
    let x = parseInt(getEle("myRange").value, 10)
    validate.testValueMinus(x)
    if (x > 2000000) {
        x -= 1000000
        getEle("myRange").value = x
        getEle("vayRange").innerHTML = x
    }
    xeMayRender()
}
plusButtonTime = () => {
    let x = parseInt(getEle("myRange1").value, 10)
    validate.testTimePlus(x)
    if (x < 24) {
        x += 1
        getEle("myRange1").value = x
        getEle("traRange").innerHTML = x

    }
    xeMayRender()
}
minusButtonTime = () => {
    let x = parseInt(getEle("myRange1").value, 10)
    validate.testTimeMinus(x)
    if (x > 9) {
        x -= 1
        getEle("myRange1").value = x
        getEle("traRange").innerHTML = x
    }
    xeMayRender()
}

xeMayRender = () => {
    let vay = getEle("myRange").value
    let thoiGian = getEle("myRange1").value
    let x = (vay / thoiGian).toFixed()
    console.log(x)
    getEle("demo").innerHTML = x
}
dienMayRender = () => {
    let vay = getEle("myRange").value
    let thoiGian = getEle("myRange1").value
    let x = ((vay / thoiGian) * 2).toFixed()
    console.log(x)
    getEle("demo").innerHTML = x
}
