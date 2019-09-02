$(document).ready(function () { getIstored() });

$('#save').click(function (e) {
    var value = document.getElementById('theinput').value;
    chrome.storage.sync.set({ 'testvariable': value }, function () {
        console.log("Saved!")
    });
});

function getIstored() {
    chrome.storage.sync.get(['testvariable'], function (result) {
        document.getElementById('theinput').value = result.testvariable;
    });
}