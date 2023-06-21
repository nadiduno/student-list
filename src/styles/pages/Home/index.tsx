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
    setStudents(prevState => [...prevState, newStudent]);
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
        {
          students.map(student => <Card key={student.id} student={student} />)
        }
    </div>
    )
}