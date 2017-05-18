const personForm = document.querySelector('form')

const rendercolor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.height = `50px`
  colorDiv.style.width = `100px`
  colorDiv.style.bacgroundcolor = haircolor
  return colorDiv
}
  
const renderListItem = (name, value) => {
  const li = document.createElement(`li`)
  li.textstatement = `${name}:  ${value}`
  return li
}

const renderList = () => HTMLUListElement
  const list = documetn.createElement(`ul`)
  return list
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  const colorDiv = `
    <div style="height: 50px; width: 100px; background-color: ${hairColor}"></div>
  `
/* const list = document.createElement ("UL")
const name = document.createElement ("IL")
const HairColor = document.createElement ("IL")
const Age = document.createElement ("IL")
const Birthplace = document.createElement ("IL")

name.innerHTML = `Name: ${personName}`
HairColor.innerHTML = `Hair Color: ${colorDiv}`
Age.innerHTML = `Age: ${age}}`
Birthplace.innerHTML = `Birthplace: ${birthplace}`

details.appendChild(list)
ul.appendChild(name)
ul.appendChild(HairColor)
ul.appendChild(Age)
ul.appendChild(Birthplace) */

    details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDivrendercolor(haircolor).outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
     </ul> 
  `
}

personForm.addEventListener('submit', handleSubmit)