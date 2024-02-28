import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "playing my keyboard",
  "making music",
  "searching for project ideas",
  "bar hopping with friends",
  "pretending to be busy",
  "hiking",
  "listening to audio books",
  "taking photos around the city",
  "cooking persian food",
  "writing poetry",
  "playing indie video games",
  "surfing the website formerly known as twitter",
  "trying (haphazardly) to learn math",
  "learning jiu-jitsu",
  "breaking code lol",
];

const space = [
  "piece",
  "fragment",
  "pocket",
  "pouch",
  "section",
  "portion",
  "cut",
  "shard",
  "bit",
  "edge",
  "thread",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "mani's home";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>i'm mani!</h2>
      <p>
        welcome to my little{" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>{" "}
        of the internet!
      </p>
      
      <img src="/images/room.png" alt="it's me!" style={{ maxWidth: '100%', height: 'auto' }}/>

      <p>
        i'm a student based in Guelph Ontario &#127809; where i study system's
        engineering and computing. i'm a developer, producer and futurist. whenever
        im not slouched over my laptop you can find me {" "}
        <a class="clickable" id="hobbies" onClick={handleHobbyClick}>
          {currentHobby}
        </a>
        .
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:manirash94@gmail.com" class="clickable">
          manirash94@gmail.com
        </a>
        .
        <br />
        
      </p>
      <div class="box">
        i'm looking for 2024 summer co-op positions! shoot me an{" "}
        <a href="mailto:manirash94@gmail.com" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring :){" "}
      </div>
    </div>
  );
}

export default Home;
