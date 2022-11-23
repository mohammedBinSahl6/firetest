import { addDoc, collection,  deleteDoc,  getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';

function App() {
 const [people,setPeople] = useState([]);
 const [newName , setNewName] = useState('')
 const [newAge , setNewAge] = useState(0)
 const peopleCol = collection(db, 'people')
 useEffect(()=>{
  const getPeople = async ()=>{
    const datat = await getDocs(peopleCol)
    // setPeople(data.docs.map((doc)=>(
    //   {...doc.data , id : doc.id}
    // )));
    setPeople(datat.docs.map((doc)=>(
      {... doc.data() , id : doc.id,}
    )))
    console.log(people)
  }
  getPeople();
 },[]);

 const createPerson = async (e)=>{
  e.preventDefault(e)
  await addDoc(peopleCol , {
    name : newName,
    age : newAge
  })
 }

 const deletePerson = async (id) =>{
  await deleteDoc(peopleCol, id)
 }
 
  return (
    <div className='container-fluid bg-primary'>
      <ul className='list-group'>
        {people.map((person ,index)=>{
         return (
      
           <div  key={index} className='list-group-item list-group-item-primary'>
          Name : {person.name} , age : {person.age} , {person.job}
            <button className='btn btn-danger'>Delete</button>
          </div>

          )
        })}
        
      </ul>


      <form onSubmit={createPerson} >
        <div className='mt-3 mb-3'>
          <input className='form-control'placeholder='new name' value={newName} onChange={(e)=> setNewName(e.target.value)} />
        </div>
        <div className='mt-3 mb-3'>
          <input className='form-control'placeholder='new age' value={newAge} type='number' onChange={(e)=> setNewAge(e.target.value)} />
        </div>
        <button className='btn btn-danger my-5' type='submit' onClick={deletePerson}>Add</button>
      </form>
    </div>
  );
}

export default App;
