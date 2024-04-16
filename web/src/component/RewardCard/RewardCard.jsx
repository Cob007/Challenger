import { useEffect } from 'react'
import './RewardCard.scss'
const RewardCard = (props) => {
    const { data } =props
    return (
        <main className='rcard'>
            <img className='rcard__img' src={data?.posturl} alt='post image url'/>
            <div className='rcard__body'> 
                <span className='rcard__span'>You won the 
                <h3 className='rcard__title'>{data?.title}</h3> 
                - challenge
                </span>
                <p className='rcard__likes'>with {data?.likes} votes </p>
            </div>
        </main>
    )
}

export default RewardCard