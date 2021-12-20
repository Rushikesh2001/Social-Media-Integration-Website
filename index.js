//Requesting data from Facebook
let fetchfb  = document.getElementById('getfacebook');
fetchfb.addEventListener('click', fbhandler);

function fbhandler(){
    let xhr = new XMLHttpRequest();

    //opening the xhr
    xhr.open('GET', 'https://graph.facebook.com/me?fields=name,gender,birthday,age_range,hometown,email&access_token=EAANnLZAWjO7MBACtgp9kQgeU1vqJTY1OMOrVs69CbRhACvGbt0ejuevJMBvURODA2syFl3U3qTZBPzJhGhCkjP69SsPXWKAfH9FZBPFP3I81tUxq3YvaPZCF3ZCJZCbjIOZC0akle2fxuXeIbIZB5hLT0NkgidQpiSrTueiF4gYaoFNDaUyWLKkmrmCemeE1XCZAx0ZARcJVDzL1H817RnvNKZAga1F5pOVOwOkPFbQZC7bGGu0k6iWJhSyJ', true);

    //what to do on ready
    xhr.onprogress = function(){
        console.log(this.responseText);
        localStorage.setItem('fbprofile',this.responseText);
    }

    //send request
    xhr.send();

}


//Requesting data from Google

let fetchgoogle = document.getElementById('getgoogle');
fetchgoogle.addEventListener('click', googlehandler);

function googlehandler(){
    let xhr = new XMLHttpRequest();

    //open the xhr
    xhr.open('GET','https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.A0ARrdaM8EQWrcP1lliKct0l7C7HM096GAevi1scZi-nIZai993VTR7ICrsmWUhBLAobW053rY2OmzCtsH0TWdIvPZ1quZ7LxAJaNmP-eKXHMG_Nv7NDX07g6JlO_OkZpaAipoXtTbr-Q61CezDTp5OjOsjEkG',true);

    //what to do on ready
    xhr.onprogress = function(){
        console.log(this.responseText);
        localStorage.setItem('googleprofile',this.responseText);
    }

    //send request
    xhr.send();

}