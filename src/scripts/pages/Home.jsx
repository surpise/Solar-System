import '@styles/pages/Home.css';

import MenuBar from '@components/common/MenuBar';
import Sun from '@components/planetary-system/Sun';

const Home = () => {
  return (
    <main className="home">
      <MenuBar />
      <Sun />
    </main>
  );
};

export default Home;
