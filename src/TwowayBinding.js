import {useState} from 'react'


function TwowayBinding() {
  /* const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = () => {
    //Call API
    console.log({
      name,
      email
    })
  }
  return (
      <div>
        <input
          value = {name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Change</button>
      </div>
  ) */

  const courses = [
    {
      id: 1,
      name: 'Javascript'
    },
    {
      id: 2,
      name: 'ReactJS'
    },
    {
      id: 3,
      name: 'VueJS'
    }
  ]
  const [checked, setChecked] = useState();
  const handleSubmit = () => {
    console.log({id: checked})

  }
  return (
    <div>
      {
        courses.map(course => (
            <div key = {course.id}>
              <input 
                type="radio"
                checked = {checked === course.id}
                onChange={() => setChecked(course.id)}
              />
              {course.name}
            </div>
        ))
      }

      <button onClick={handleSubmit}>Register</button>
    </div>
  ) 
}

export default TwowayBinding