function submitForm() {
    var fw = document.getElementById('fw').value;
    var sw = parseInt(document.getElementById('sw').value);

    if (sw >= fw) {
        document.getElementById('fw').focus();
        return;
    }

    var warm = (fw - sw) / 4;
    var a = fw - warm;
    var b = a - warm;
    var c = b - warm;
    document.getElementById('first').innerHTML= sw;
    document.getElementById('second').innerHTML= parseInt(c / 5) * 5;
    document.getElementById('third').innerHTML = parseInt(b / 5) * 5;
    document.getElementById('fourth').innerHTML = parseInt(a / 5) * 5;
    document.getElementById('final').innerHTML = fw;
    var av1 = (fw * 90) / 100;
    var av2 = (fw * 95) / 100;
    var av3 = (av1 + av2) / 2;
    var av4 = (fw * 60) / 100;
    var av5 = (fw * 80) / 100;
    var av6 = (av4 + av5) / 2;
    document.getElementById('90').innerHTML = parseInt(av1 / 5) * 5;;
    document.getElementById('95').innerHTML = parseInt(av2 / 5) * 5;;
    document.getElementById('avg').innerHTML = parseInt(av3 / 5) * 5;;
    document.getElementById('60').innerHTML = parseInt(av4 / 5) * 5;;
    document.getElementById('80').innerHTML = parseInt(av5 / 5) * 5;;
    document.getElementById('avg2').innerHTML = parseInt(av6 / 5) * 5;
}