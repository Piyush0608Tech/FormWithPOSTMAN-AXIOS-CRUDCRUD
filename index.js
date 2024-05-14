const form = document.getElementById('myform');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const userDetails = {
        username,
        email,
        phone
    };
    axios.post("https://crudcrud.com/api/1323122d90804c33ab07f513e11f319e/PiyushData" , userDetails )
        .then((response)=>{
            console.log(response)
            alert('User details submitted successfully!');
            show(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    });
    axios.get("https://crudcrud.com/api/1323122d90804c33ab07f513e11f319e/PiyushData")
    .then((response)=>{
        console.log(response)
        for (var i = 0;  i< response.data.length; i++){
            show(response.data[i])
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(data);
    
function show(userDetails){
    const cre = document.getElementById("userList");
    const list = document.createElement("li");
    list.textContent = userDetails.username+' _ '+userDetails.email+' _ '+userDetails.phone;
    const del = document.createElement("button");
    del.textContent= "delete";
    del.onclick = () =>{
        axios.delete(`https://crudcrud.com/api/1323122d90804c33ab07f513e11f319e/PiyushData/${userDetails._id}`)
        .then((response)=>{
            console.log(response)
            cre.removeChild(list);
        })
        .catch((err)=>{
            console.log(err)
        })
    }    
    const edit = document.createElement("button");
    edit.textContent="edit";
    edit.onclick = () =>{
      axios.delete (`https://crudcrud.com/api/1323122d90804c33ab07f513e11f319e/PiyushData/${userDetails._id}`);
        cre.removeChild(list);
        document.getElementById("username").value=userDetails.username;
        document.getElementById("email").value=userDetails.email;
        document.getElementById("phone").value=userDetails.phone;
    }
    list.appendChild(del);
    list.appendChild(edit);
    cre.appendChild(list);
}