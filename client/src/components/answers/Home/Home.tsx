import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

function Home(): JSX.Element {
  const [themes, setThemes] = useState<string[]>([]);

  const url = process.env.REACT_APP_URL!;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setThemes(data));
  }, [url]);

  return (
    <ul className={style.list}>
      {themes.length ? (
        themes.map((theme) => (
          <Link to={theme.split('_')[0].toLowerCase()} key={theme}>
            <li className={style.card}>{theme}</li>
          </Link>
        ))
      ) : (
        <li>
          Start the local server from the "server" folder to form the initial menu.
          <br />
          Use command: 'npm run dev'.
        </li>
      )}
    </ul>
  );
}

export default Home;
