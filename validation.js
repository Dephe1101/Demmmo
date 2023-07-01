

getELE = (id) => {
    return document.getElementById(id)
}

function validationPlus() {
    this.testValueMinus = function (value) {
        if (value <= 2000000) {
            alert("Min: 2.000.000")
        }
    }
    this.testValuePlus = function (value) {
        if (value >= 100000000) {
            alert("Max: 100.000.000")
        }
    }
    this.testTimePlus = function (value) {
        if (value >= 24) {
            alert("Max: 24")
        }
    }
    this.testTimeMinus = function (value) {
        if (value <= 9) {
            alert("Max: 9")
        }
    }
}
