import '@styles/pages/Home.css';

import MenuBar from '@components/Home/MenuBar';
import Display from '@components/Home/Display';

const Home = () => {
  return (
    <main className="home">
      <MenuBar />
      <Display />
    </main>
  );
};

export default Home;
