var person = [
    { name: "Ali", gender: true },
    { name: "Vali", gender: true },
    { name: "Nargiz", gender: false },
    { name: "Yulduz", gender: false },
    { name: "Doston", gender: true }
];
function Write() {
    var write = document.getElementById("write");
    var input = document.getElementById("input");
    var text = input.value;
    if (text == "male") {
        console.log("ishladi");
        write.innerHTML = GetAllMales();
    }
    else if (text == "female") {
        write === null || write === void 0 ? void 0 : write.innerHTML = GetAllFemale();
    }
}
function GetAllMales() {
    var males = person.filter(function (x) { return x.gender === true; });
    var data = "";
    males.forEach(function (element) {
        data += "".concat(element.name) + '<br>';
    });
    return data;
}
function GetAllFemale() {
    var males = person.filter(function (x) { return x.gender === false; });
    var data = "";
    males.forEach(function (element) {
        data += "".concat(element.name) + '<br>';
    });
    return data;
}
