const input=document.getElementById("name")
const Name=localStorage.getItem("name") || ""
input.value=Name
input.addEventListener("change",function (e){

    localStorage.setItem("name",e.target.value)
    
})