{
const personForm = document.querySelector('form')

personForm.addEventListener(`submit`, handleSubmit)

function handleSubmit(ev) {

    ev.preventDefault()

    const form =ev.target

    const list = document.getElementById('ulList')
    const name = form.personName.value


   const li = document.createElement(`li`)
   li.textContent = name

   list.appendChild(li)
}}