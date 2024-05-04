let body = document.getElementsByTagName("body")[0];
let dropdown = document.getElementsByClassName("dropdown")[0];
dropdown.addEventListener("click", function(){
    if(body.id != "id-0")
        {
            body.id = "id-0";
        }
    else{
        body.id = "id-1";
    }
});
let s1 = document.getElementsByClassName("s-1")[0];
let s2 = document.getElementsByClassName("s-2")[0];
let s3 = document.getElementsByClassName("s-3")[0];
let s4 = document.getElementsByClassName("s-4")[0];
s1.addEventListener("click", function(){
    if(body.id != "id-1"){
        body.id = "id-1";
    }
});
s2.addEventListener("click", function(){
    if(body.id != "id-2"){
        body.id = "id-2";
    }
});
s3.addEventListener("click", function(){
    if(body.id != "id-3"){
        body.id = "id-3";
    }
});
s4.addEventListener("click", function(){
    if(body.id != "id-4"){
        body.id = "id-4";
    }
});
let h1 = document.getElementsByClassName("h-1")[0];
let h2 = document.getElementsByClassName("h-2")[0];
let h3 = document.getElementsByClassName("h-3")[0];
let h4 = document.getElementsByClassName("h-4")[0];
h1.addEventListener("click", function(){
    if(body.id != "id-1"){
        body.id = "id-1";
    }
});
h2.addEventListener("click", function(){
    if(body.id != "id-2"){
        body.id = "id-2";
    }
});
h3.addEventListener("click", function(){
    if(body.id != "id-3"){
        body.id = "id-3";
    }
});
h4.addEventListener("click", function(){
    if(body.id != "id-4"){
        body.id = "id-4";
    }
});