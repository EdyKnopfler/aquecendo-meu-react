import { useState } from 'react';

export default function Form() {
  // Quero tratar o conteúdo do formulário como um objeto
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    /*
    Usando o ... no tratador de onChange para mudar
    um único atributo e preservar os outros.
    
    NÃO FUNCIONA para objetos aninhados, teria que ter
    um tratador próprio, ex.:
    
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value
      }
    });
    */
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <h1>Updating form objects</h1>
      <div className="formField">
        <label>First name:</label>
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="formField">
        <label>Last name:</label>
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="formField">
        <label>Email:</label>
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </div>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
