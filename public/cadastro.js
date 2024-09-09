   const form=document.getElementById("formUsers")
   form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nome=document.getElementById("username").value;
    const email=document.getElementById("useremail").value;
    const password=document.getElementById("userpassword").value;
    const status=document.getElementById("userstatus").value;
    const btnSubmit=document.getElementById("btnsend");
    const url= "/users";
    const option={method: "POST", headers:{"Content-Type":"application/json"},body:JSON.stringify({nome, email, password, status})}
    const element = document.getElementsByClassName('mb');
    let hasError = false;

    if (nome.length < 3 || nome.length > 150) {
        const error = document.createElement('span');
        error.innerText = "O nome deve conter entre 3 a 150 caracteres."
        error.classList.add("error");
        element[0].appendChild(error);
        btnSubmit.disabled = true;
        hasError = true;
        setTimeout(() => {
            element[0].removeChild(error);
            btnSubmit.disabled = false;
        }, 3000);
    }

    if (email.length < 3 || email.length >= 20){
        const error = document.createElement('span');
        error.innerText = "O email deve conter até 20 caracteres."
        error.classList.add("error");
        element[1].appendChild(error);
        btnSubmit.disabled = true;
        hasError = true;
        setTimeout(() => {
            element[1].removeChild(error);
            btnSubmit.disabled = false;
        }, 3000);
    }

    if (password.length !== 8){
        const error = document.createElement('span');
        error.innerText = "A senha deve conter 8 caracteres."
        error.classList.add("error");
        element[2].appendChild(error);
        btnSubmit.disabled = true;
        hasError = true;
        setTimeout(() => {
            element[2].removeChild(error);
            btnSubmit.disabled = false;
        }, 3000);
    }

    if (!hasError) {
        fetch(url,option)
        .then(response=>response.json())
        .then(response=>{
            alert("Usuário cadastrado com sucesso!")
            form.reset()
        })
        .catch(error=>alert("Falha ao cadastrar usuário"))
    }
   })
