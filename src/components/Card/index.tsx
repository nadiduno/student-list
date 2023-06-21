import './styles.css'
export interface StudentType{
    id: string
    name: string
    time: Date
}
interface StudentProps{
    student: StudentType
}
export function Card({ student }: StudentProps){
    return(
        <div className='card'>
            <strong>{student.name}</strong>
            <span>{student.time}</span>
        </div>
    )
}