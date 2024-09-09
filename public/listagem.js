  document.addEventListener("DOMContentLoaded",()=>{
    const url= "/users";
    const option={method: "GET", headers:{"Content-Type":"application/json"}}
    fetch(url,option)
        .then(response=>response.json())
        .then(response=>{
           const tableBody=document.getElementById("bodytables");
           for (let index = 0; index < response.users.length; index++) {
            const row = document.createElement("tr");
            row.innerHTML=`
                <td> ${response.users[index].nome}</td>
                <td> ${response.users[index].email}</td>
                <td> <div> <button> editar </button><button> apagar </button></div></td>
            `
            tableBody.appendChild(row);
           }
        })
 })