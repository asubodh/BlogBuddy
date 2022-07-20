document.getElementById('reversetxt').addEventListener("click", reverseString_fun); 
document.getElementById('downloadtxt').addEventListener("click", Downloadtxt_fun); 
document.getElementById('copytxt').addEventListener("click", caseconvertcopy_fun); 


function reverseString_fun(){
    var s = document.getElementById('caseconvert').value
    document.getElementById('caseconvert').value = s.split("").reverse().join("");
}

function caseconvertcopy_fun() {
    var copyText = document.getElementById("caseconvert");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
};

function Downloadtxt_fun() {
    var l = document.createElement("a");
    l.href = "data:text/plain;charset=UTF-8," + document.getElementById("caseconvert").value;
    const name = document.getElementById("caseconvert").value.split(' ').slice(0, 2).join(' ');
    l.setAttribute("download", (name + " (BlogBuddy_ext).txt"));
    l.click();
  }