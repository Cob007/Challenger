import ChallengeCard from '../../component/ChallengeCard/ChallengeCard';
import ChallengeList from '../../component/ChallengeList/ChallengeList';
import Searchbar from '../../component/SearchBar/SearchBar';
import './HomePage.scss'
const HomePage = () => {

    const data = [{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6}]

    return (
        <main className='homepage'>
            <Searchbar />
            <ChallengeList data={data}/>
        </main>
    )
}

export default HomePage;