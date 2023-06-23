import './styles.css'
export interface StudentProps{
    id?: number
    name: string
    time: string
}

export function Card( props: StudentProps){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <span>{props.time}</span>
        </div>
    )
}