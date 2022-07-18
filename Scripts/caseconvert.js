document.getElementById('uppercaseconvert').addEventListener("click", uppercaseconvert_fun); 
document.getElementById('lowercaseconvert').addEventListener("click", lowercaseconvert_fun); 
document.getElementById('titlecaseconvert').addEventListener("click", titleconvert_fun); 
document.getElementById('sentencecaseconvert').addEventListener("click", Setenceconvert_fun); 
document.getElementById('inversecaseconvert').addEventListener("click", Inverseconvert_fun); 
document.getElementById('downloadtxt').addEventListener("click", Downloadtxt_fun); 
document.getElementById('copytxt').addEventListener("click", caseconvertcopy_fun); 

function uppercaseconvert_fun() {
    var str = document.getElementById('caseconvert').value
    document.getElementById('caseconvert').value = str.toUpperCase();
};

function lowercaseconvert_fun() {

    var s = document.getElementById('caseconvert').value
    document.getElementById('caseconvert').value = s.toLowerCase();
};

function titleconvert_fun() {

    var s = document.getElementById('caseconvert').value
    document.getElementById('caseconvert').value = s.replace(/\b(\w)/g, s => s.toUpperCase());
};

function Setenceconvert_fun() {

    var s = document.getElementById('caseconvert').value
    // eslint-disable-next-line
    document.getElementById('caseconvert').value = s.replace(/\.\s+([a-z])[^\.]|^(\s*[a-z])[^\.]/g, s => s
        .replace(/([a-z])/, s => s.toUpperCase()))
};

function Inverseconvert_fun() {

    var s = document.getElementById('caseconvert').value
    document.getElementById('caseconvert').value = s.replace(/./g, c => c === c.toUpperCase() ? c
    .toLowerCase() : c.toUpperCase());
}
function Downloadtxt_fun() {
    var l = document.createElement("a");
    l.href = "data:text/plain;charset=UTF-8," + document.getElementById("caseconvert").value;
    const name = document.getElementById("caseconvert").value.split(' ').slice(0, 2).join(' ');
    l.setAttribute("download", (name + " (BlogBuddy_ext).txt"));
    l.click();
  }

function caseconvertcopy_fun() {
    var copyText = document.getElementById("caseconvert");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
};

