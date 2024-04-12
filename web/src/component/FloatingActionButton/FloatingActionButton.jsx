import './FloatingActionButton.scss'
import AddIcon from '../../assets/svg/add.svg';

const FloatingActionButton = () => {

    return (
        <div className='fab'>
            <img className='fab__icon' src={AddIcon} alt="Floating action button"
              />
        </div>
    )
}

export default FloatingActionButton;