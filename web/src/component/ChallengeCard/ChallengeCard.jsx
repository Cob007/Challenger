import './ChallengeCard.scss'
import PhotoOfThDay from '../../assets/images/photo2.avif'

const ChallengeCard = (props) => {

    const { challenge } = props

    return (
        <div className='card' >
            <img className='card__image' src={PhotoOfThDay} alt='challenge sample photo'/>

        </div>
    )
}

export default ChallengeCard;