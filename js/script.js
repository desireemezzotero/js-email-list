const endopoint = "https://flynn.boolean.careers/exercises/api/random/mail"; 

let email;
axios.get(endopoint)
.then (response => { 
  for (let i = 0; i < 10; i++) {
    email += response.data.response;
    const li = document.createElement('li');
    li.append = `${email} `
  }
  console.log(email)
})
.catch (error => {
 console.log(error)
}) 
 