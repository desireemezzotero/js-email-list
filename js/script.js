const endopoint = "https://flynn.boolean.careers/exercises/api/random/mail"; 

let email = [ ]

for(let i= 0; i < 10; i++) {
  axios.get(endopoint)
  .then (response => { 
    email.push(response.data.response);
    const li = document.createElement('li');
    li.append = `${email}`
  console.log(email)
  })

  .catch (error => {
    console.log(error)
   })
}