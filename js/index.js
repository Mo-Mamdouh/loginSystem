var db=JSON.parse(localStorage.getItem('link'));
var login = document.getElementById('login');
login.addEventListener('submit', function (e) {
    e.preventDefault();
    var ltemp={
        loginEmail:document.getElementById('Email1').value,
        loginPass:document.getElementById('Password1').value
    }
    let emailCheck =false;
    for (var i = 0; i < db.length; i++) {
        if (ltemp.loginEmail==db[i].email && ltemp.loginPass==db[i].pass) {
            emailCheck=true;
        }
        }
        if (emailCheck) {  
            window.location.href="home.html";
        }
        else{
            var cartona=`
            <div class="alert alert-danger my-3" role="alert">
            email or password might be wrong
            </div>
        `
        document.getElementById('feedback').innerHTML=cartona;
        }
       
    }
)
