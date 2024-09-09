   const form=document.getElementById("formUsers")
   form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nome=document.getElementById("username").value;
    const email=document.getElementById("useremail").value;
    const password=document.getElementById("userpassword").value;
    const status=document.getElementById("userstatus").value;
    const url= "/users";
    const option={method: "POST", headers:{"Content-Type":"application/json"},body:JSON.stringify({nome, email, password, status})}
    fetch(url,option)
        .then(response=>response.json())
        .then(response=>{
            alert("Usuário cadastrado com sucesso!")
            form.reset()
        })
        .catch(error=>alert("Falha ao cadastrar usuário"))
   })
