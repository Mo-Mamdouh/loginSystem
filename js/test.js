var signup = document.getElementById('signup');
var db;
if(localStorage.getItem('link') == null){
    db=[
        {
            name: 'admin',
            email: 'admin@test',
            pass: 'admin'
           
        }
    ];
}
else{
    db=JSON.parse(localStorage.getItem('link'));
}
signup.addEventListener('submit', function (e) {
    e.preventDefault();
    var temp={
        name:document.getElementById('Name').value,
        email:document.getElementById('Email').value,
        pass:document.getElementById('Password').value
    };
    // for (var index = 0; index < db.length; index++) {
    //     if(temp.email === db[index].email){
    //         alert('Email already exists');    
    //         break;    
    //     }
    //     else{
           
    //         break;
    //     }
    // }
    db.push(temp);
    localStorage.setItem('link',JSON.stringify(db));
    clear();
})
function clear() {
    document.getElementById('Name').value= null
    document.getElementById('Email').value= null
    document.getElementById('Password').value =null
}
