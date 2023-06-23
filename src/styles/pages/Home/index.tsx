import { useEffect, useState } from 'react'
import { Card, StudentProps } from '../../../components/Card'
import './styles.css'

interface UserAPI  {
  name: string
  avatar_url: string
}

export function Home(){
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<StudentProps[]>([]);
  const [user, setUser] = useState<UserAPI>({} as UserAPI);

  function handleAddStudent(){
    const newStudent: StudentProps = {
      id: Math.random(),
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/nadiduno');
      const data = await response.json();
      // console.log(data);
      setUser({
        name: data.name,
        avatar_url: data.avatar_url,
      });
    }
    fetchData();
  },[]);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar_url} alt="" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite seu nome"
        onChange={e => setStudentName(e.target.value)}
      />
      <button 
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>
        {
          students.map(student => 
            <Card 
              key={student.id} 
              name={student.name} 
              time={student.time}
            />)
        }
    </div>
    )
}