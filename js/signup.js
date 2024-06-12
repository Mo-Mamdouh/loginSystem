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
    if (temp.email=="" ||temp.name=="" || temp.pass=="") {
        var x=`
        <div class="alert alert-danger my-3" role="alert">
                    enter all fields
        </div>
        `
        document.getElementById('feedback').innerHTML=x;              
    }
    else{
        let emailExists = false;
        for (var i=0 ;i<db.length;i++) {
            if (db[i].email == temp.email) {
                emailExists = true;
            }
            }
            if (emailExists) {
                var cartona=`
                    <div class="alert alert-danger my-3" role="alert">
                    email is already exist
                    </div>
                `
                document.getElementById('feedback').innerHTML=cartona;
            }
            else {
                db.push(temp);
                localStorage.setItem('link', JSON.stringify(db));
                var cartona=`
                <div class="alert alert-success my-3" role="alert">
                sign up successfully
                </div>
            `
            document.getElementById('feedback').innerHTML=cartona;
            clear()

        }
}})
function clear() {
    document.getElementById('Name').value= null
    document.getElementById('Email').value= null
    document.getElementById('Password').value =null
}
