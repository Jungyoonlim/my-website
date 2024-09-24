export default function Home() {
  return (
    <div>
      <header>
        <h1>Jungyoon Lim</h1>
        <p className="subtitle">Design Engineer</p>
      </header>

      <main>
        <div className="section">
          <div className="section-title">About</div>
          <div className="section-content">
            <p>Currently working at the intersection of design, human-computer interface!</p>
            <p>Previously done:</p>
            <ul>
                <li>Applied Math and Philosophy at Brown University</li>
                <li>Ancient Greek and Latin</li>
                <li>Lived in Italy for a year</li>
                <li>Fine Art</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Links</div>
          <div className="section-content">
            <ul>
              <li><a href="https://read.cv/jungyoonlim">CV</a></li>
              <li><a href="https://github.com/Jungyoonlim">GitHub</a></li>
              <li><a href="https://gallery-lime-kappa.vercel.app/">Artwork</a></li>
              <li><a href="/essays">Essays</a></li>
              <li><a href="/books">Books</a></li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <div className="section-title">Contact</div>
          <div className="section-content">
            <p>You can reach me via <a href="https://twitter.com/jungyoonlim">Twitter</a> or <a href="https://www.linkedin.com/in/jungyoonlim/">LinkedIn</a>.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
