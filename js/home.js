var db=JSON.parse(localStorage.getItem('link'));
for (var i = 0; i < db.length; i++) {
    var cartona=`
    <p class="h3">Welcome , <span class="text-warning">${db[i].name}</span>
`
document.getElementById('content').innerHTML=cartona;
}