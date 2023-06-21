import React, { useState } from 'react'
import { Card, StudentType } from '../../../components/Card'
import './styles.css'

const students: StudentType[] = [
  {
    id: '',
    name: '',
    time: ''
  },
]
export function Home(){
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handelAddStudent(){
    const newStudent = {
      id: Math.random(),
      name: studentName,
      time: new Date().toLocaleDateString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents([newStudent]);
  }
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        type="button"
        onClick={handelAddStudent}
      >
        Adicionar
      </button>
      
        {/* <main> {students.map((student) => {
          return <Card key={student.id} student={student} />
        })}
        // </main> */}
       {/* { 
        students.map(student => <Card name={student.name} student={student.time}/>)
        } */}
        {
          students.map(student => <Card key={student.id} student={student} />)
        }
    </div>
    )
}