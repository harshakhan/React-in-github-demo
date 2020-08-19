window.onload=function(){
  let btn=document.getElementById('submit')
  btn.addEventListener('click',handle_login)
}

function handle_login(){
  event.preventDefault()
  let username=document.getElementById('email').value
  let password=document.getElementById('password').value

  let payload={
      password:password,
      username:username,
  }
   payload=JSON.stringify(payload)
  fetch("https://reqres.in/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  payload,
    }).then(res => res.json())

    .then(data=>{
      let params=new URLSearchParams(data)
      let token=data.token
      let url=`dashboard.html`
      window.location.assign(url+`?token=`+token)


    })
    .catch(error => console.log(error))
  
}