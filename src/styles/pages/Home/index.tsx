import { Card } from '../../../components/Card'
import './styles.css'

// const students: StudentType[] = [
//   {
//     id: 1,
//     name: 'Nadi Duno',
//     time: '2023-06-21 10:34:00'
//   },
//   {
//     id: 2,
//     name: 'Rodrigo Goncalves',
//     time: '2023-06-21 10:36:00'
//   },
// ]
export function Home(){
    return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite seu nome" />
      <button type="button">Adicionar</button>
      <Card />
      <Card />
    </div>
    )
}