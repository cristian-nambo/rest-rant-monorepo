
function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
        <img height="300" width="500" src="http://localhost:5000/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",}}>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
      </div>
    </main>
  );
}

export default Home;
