import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { textReveal, titleReveal } from "./Animations";

export default function Home() {
  let subtitle = useRef(null);
  let desc = useRef(null);
  let readmore = useRef(null);
  let title = useRef(null);

  useEffect(() => {
    textReveal([subtitle, desc, readmore]);
    titleReveal(title);
  }, []);

  return (
    <section className="homePage">
      <div className="first">
        <div class="text">
          <div>
            <p ref={(el) => (subtitle = el)} class="subtitle">
              The Authority In
            </p>
            <h1 ref={(el) => (title = el)} class="title">
              <span>
                Fashion <br /> Culture
              </span>
            </h1>
            <p ref={(el) => (desc = el)} class="desc">
              <b>HALIMRT.</b> is the cultural phenomenon surrounding <br />{" "}
              Beauty and Fashion culture.
            </p>
            <Link ref={(el) => (readmore = el)} to="/" class="readmore">
              Click For More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}