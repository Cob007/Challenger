import ChallengeCard from "../../component/ChallengeCard/ChallengeCard";
import ChallengeList from "../../component/ChallengeList/ChallengeList";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Searchbar from "../../component/SearchBar/SearchBar";
import "./HomePage.scss";
const HomePage = () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <main className="homepage">
      <section className="homepage__view">
        <Searchbar placeholderText={`Find Challenges by title`}/>
        <ChallengeList data={data} />
      </section>

      <section className="homepage__fab">
        <FloatingActionButton />
      </section>
    </main>
  );
};

export default HomePage;
