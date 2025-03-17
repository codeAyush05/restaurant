let a = document.querySelectorAll("P")
for(let i=0 ; i< a.length ; i++){
    a[i].addEventListener("mousemove" , change);
}

function change(){
    this.style.backgroundColor = "BLUE"
    this.innerHTML = "KHANA KHA KE JAIYOOO....."
};

 let b = document.querySelectorAll("h1")
for(let j=0 ; j< b.length ; j++){
    b[j].addEventListener("mousemove" , change2);
}

function change2(){
    this.style.backgroundColor = "BLUE"
    this.innerHTML = "KHANA KHA KE JAIYOOO....."
};