
function SimpleCalculator() {
    
    var first = document.getElementById("num1").value;
    var opr = document.getElementById("opr").value;
    var second = document.getElementById("num2").value;

    if (opr == "+") {
        var res = parseInt(first) + parseInt(second);

    }else if (opr == "-") {
        var res = parseInt(first) - parseInt(second);

    }else if (opr == "*") {
        var res = parseInt(first) * parseInt(second);

    }else if (opr == "/") {
        var res = parseInt(first) / parseInt(second);

    }else if (opr == "**") {
        var res = parseInt(first) ** parseInt(second);

    }else if (opr == "avg") {
        var res = (parseInt(first) + parseInt(second))/2;

    }

    document.getElementById("ans").value = res;

}
