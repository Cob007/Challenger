import './Empty.scss'
import AddPost from '../../assets/svg/addPost.svg'

const Empty = (props) => {
    const {text} = props
    return (
    <main className='empty'>
        <img className='empty__img' src={AddPost} alt='add post svg' />
        <p className='empty__p'>No {text} added yet! <br/>Use the + button to create {text}</p>
    </main>)
}

export default Empty;
