let sidebar=document.querySelector("#sidebar");
let sidebar_button=document.querySelector("#sidebar_button");
let sidebar_back=document.querySelector("#sidebar_back");
sidebar_button.onclick=()=>{
    sidebar.classList.toggle("open");
}
sidebar_back.onclick=()=>{
    sidebar.classList.toggle("open");
}