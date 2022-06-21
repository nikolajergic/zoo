import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  
  const animal = [
    {vrsta:'Konj',ime:'Cezar',datumRodjenja:''},
    {vrsta:'Pas',ime:'Kliford',datumRodjenja:( new Date() )},
    {vrsta:'Macka',ime:'Senka',datumRodjenja:( new Date() )},
    {vrsta:'Krava',ime:'Ana',datumRodjenja:( new Date() )},
    {vrsta:'Bik',ime:'Crni',datumRodjenja:''},
  ]
  
  const [animallist, setList] = React.useState(animal);

  function handleRemove(index) {
    const newList = animallist.filter((animal, i) => i !== index);

    setList(newList);
  }

  function MoveToTop(index) {
    const newList = animallist.filter((animal, i) => i !== index);
    
    const moveList = animallist[index];

   setList([moveList, ...newList]); 
  }
  

  return (
    <div className="App">
<table>
  <thead>
  </thead>
<tbody className="table-body">
{animallist.map((animal, index) => (
  <tr key={index}>
      <td>{animal.vrsta}</td>
      <td>{animal.ime}</td>
      <td>
        {animal.datumRodjenja
            ? animal.datumRodjenja.toLocaleDateString()
            : "Nepoznat"}
    </td>
    <td className="table-actions">
    <button onClick={() => handleRemove(index)}>   
        Ukloni
    </button>

    <button onClick={() => MoveToTop(index)}>
          Pocetak
      </button>  
    </td>                  
  </tr>
))}
 </tbody>
 </table>
</div> );
}
  
  
export default App;
  
