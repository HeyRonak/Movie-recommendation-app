import { useState } from "react";
import "./styles.css";

var genreList = {
  Horror: [
    {
      name: "Old",
      description:
        "A vacationing family discovers that the secluded beach where they're relaxing for a few hours is somehow causing them to age rapidly, reducing their entire lives into a single day.",
      rating: "6/10"
    },

    {
      name: "Candyman",
      description:
        "A sequel to the horror film Candyman (1992) that returns to the now-gentrified Chicago neighborhood where the legend began.",
      rating: "8/10"
    },

    {
      name: "Don't Breathe 2",
      description:
        "The sequel is set in the years following the initial deadly home invasion, where Norman Nordstrom (Stephen Lang) lives in quiet solace until his past sins catch up to him.",
      rating: "6.1/10"
    }
  ],

  Action: [
    {
      name: "Dune",
      description:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      rating: "9/10"
    },
    {
      name: "Kate",
      description:
        "A female assassin has 24 hours to get vengeance on her murderer before she dies.",
      rating: "10/10"
    },
    {
      name: "The Suicide Squad",
      description:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
      rating: "7.3/10"
    }
  ],

  Thriller: [
    {
      name: "Se7en",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      rating: "8.6/10"
    },
    {
      name: "Raatchasan",
      description:
        "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally.",
      rating: "8.4/10"
    },
    {
      name: "Shutter Island",
      description:
        "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      rating: "8.3/10"
    }
  ]
};

var list = Object.keys(genreList);

export default function App() {
  const [movieList, setMovie] = useState("Horror");

  function onClickListener(item) {
    setMovie(item);
  }

  return (
    <div className="App">
      <h1> Movie recommendation app</h1>

      <h3> Checkout my favourite Movies.</h3>

      <div style={{ margin: "2rem 0rem" }}>
        {list.map((item) => {
          return (
            <span
              onClick={() => onClickListener(item)}
              style={{
                padding: "1rem",
                margin: "0.5rem",
                backgroundColor: "gray",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <hr />

      <h4 style={{ margin: "2rem" }}>
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {genreList[movieList].map((result) => (
              <li
                key={result.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #9CA3AF",
                  width: "80%",
                  borderRadius: "0.5rem",
                  margin: "1rem auto"
                }}
              >
                {" "}
                <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                  {result.name}
                </div>
                <div style={{ fontSize: "medium", textAlign: "center" }}>
                  {result.description}
                </div>
                <div style={{ fontSize: "medium", textAlign: "center" }}>
                  Rating : {result.rating}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </h4>
    </div>
  );
}
