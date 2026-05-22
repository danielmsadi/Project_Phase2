function Home() {
  return (
    <main className="main-box">
      <div className="wrap">
        <section className="banner">
          <h2>Welcome to LIU</h2>
          <p>
            Lebanese International University offers quality education and
            supports students in building successful futures.
          </p>
          <a href="/programs" className="button">
            View Programs
          </a>
        </section>

        <section className="title-box">
          <h2>Why Choose LIU?</h2>
        </section>

        <section className="cards">
          <div className="card">
            <h3>Modern Education</h3>
            <p>LIU provides updated academic programs for students.</p>
          </div>

          <div className="card">
            <h3>Multiple Programs</h3>
            <p>Students can choose from different majors and schools.</p>
          </div>

          <div className="card">
            <h3>Student Support</h3>
            <p>The university supports students during their academic journey.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;