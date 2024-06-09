var db=JSON.parse(localStorage.getItem('link'));
var login = document.getElementById('login');
login.addEventListener('submit', function (e) {
    e.preventDefault();
    var ltemp={
        loginEmail:document.getElementById('Email1').value,
        loginPass:document.getElementById('Password1').value
    }
    for (var i = 0; i < db.length; i++) {
        if (ltemp.loginEmail==db[i].email && ltemp.loginPass==db[i].pass) {
            window.location.href="home.html";
        }
        else{
            var feedback=`
                <div class="my-2 text-danger">
                        <i class="fa fa-warning"></i> email or password might be wrong.
                </div>`
            document.getElementById('feedback').innerHTML=feedback;
        }
    }
})
