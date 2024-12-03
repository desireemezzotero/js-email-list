const endopoint = "https://flynn.boolean.careers/exercises/api/random/mail"; 

let email = [ ]

const ul = document.querySelector('ul')
const btn = document.querySelector('.btn')
const loading = document.querySelector('.loading')



btn.addEventListener('click', again)

function again () {
  if (email.length < 10) {
     ul.classList.remove('d-none')
  }
  
  for(let i= 0; i < 10; i++) {
    axios.get(endopoint)
    .then (response => { 
      email.push(response.data.response);
      const li = document.createElement('li');
      li.append(response.data.response);
      ul.append(li)
      console.log(email)
    })
    
    .catch (error => {
      console.log(error)
    })
  }
  loading.classList.add('d-none')
}