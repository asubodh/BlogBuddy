document.getElementById('wordcounter').addEventListener("keyup", wordcounter); 
document.getElementById('downloadtxt').addEventListener("click", Downloadtxt_fun); 
document.getElementById('copytxt').addEventListener("click", caseconvertcopy_fun); 

function caseconvertcopy_fun() {
    var copyText = document.getElementById("wordcounter");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
};

function Downloadtxt_fun() {
    var l = document.createElement("a");
    l.href = "data:text/plain;charset=UTF-8," + document.getElementById("wordcounter").value;
    const name = document.getElementById("wordcounter").value.split(' ').slice(0, 2).join(' ');
    l.setAttribute("download", (name + " (smalltechtools.com).txt"));
    l.click();
  }

  function wordcounter() {
    var str = document.getElementById('wordcounter').value
    if(str)
    {
    document.getElementById('words').innerHTML = 'Words: ' + str.match(/\w+/g).length;
    document.getElementById('characters').innerHTML = 'Characters: ' + str.length;
    document.getElementById('lines').innerHTML = 'Lines: ' + str.split(/\n/).length;
    document.getElementById('sentences').innerHTML = 'Sentences: ' + str.split(/[.!?]+\s/).filter(Boolean).length;
    }
}