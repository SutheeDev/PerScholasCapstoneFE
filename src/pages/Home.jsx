import { Logo, Search, NavigationIcon, Card } from "../components/index";

const Home = () => {
  return (
    <main>
      <nav>
        <div className="nav-container">
          <Logo />
          <Search />
        </div>
      </nav>

      <div>
        <aside>
          <div className="sidebar-container">
            <NavigationIcon />
            <NavigationIcon />
            <NavigationIcon />
          </div>
        </aside>

        <section>
          <div className="cards-container">
            <h1>Welcome Pete!</h1>
            <section className="cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Home;
