import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = "mani's about";
  }, []);

  return (
    <div>
      {/* <img src="/images/me.png" alt="it's me!" width="200" height="auto" /> */}
      <p>
        <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>
      </p>
      <hr class="dashed" />
      <p>
        hey! i'm someone who's tried his hand at anything you can think of!
        i've been an athlete, builder, painter, musician, salesman, coder, and currently 
        trying to be an engineer! i embrace any opportunity to challenge myself at learning
        new skills, and am intensly interested in the intersection of tech + art.
        <br />
        <br />
        i spent the first 20 years of my life in my home country of Iran, before i decided
        to pursue my love for technology overseas, here in Canada. My happiest state of being 
        i've found out, is when i challenge myself to get out of my comfort zone, and absorb
        new experiences with the amazing people i encounter everyday :D
      </p>
      <p> </p>
      <p>
        <b>currently</b>
      </p>
      <p>
        i'm a sophomore at{" "}
        <a href="https://www.uoguelph.ca/" target="_blank" class="clickable">
          University of Guelph. 
        </a>
        besides my regular courseload i am currently learning data science, web design, and circuit design
        <br />
        <br />
      </p>
      <p> </p>
      <p>
        <b>previously</b>
      </p>
      {/* <p></p> */}
      <ul>
        <li>
          worked with a traditionally ran business in Tehran to centralize all bookkeeping operations on a server. 
        </li>
        <li>
          taught a class of middle schoolers in an underpreviliged school in my hometown how to code in C
        </li>
        <li>
          worked on the UI of (
          <a
            href="https://github.com/captaindpt/CineFile"
            class="clickable"
            target="_blank"
          >
            CineFile
          </a>
          ), a project for organizing movie archives on windows file systems. 
        </li>
      </ul>
      <p></p>
      <p>did some clubs:</p>
      <ul>
        <li>
          wrote some code for{" "}
          <a
            href="https://gryphonracing.org/"
            target="_blank"
            class="clickable"
          >
            UofG's FSAE club
          </a>
        </li>
        <li>
          currently acting as the financial management lead of the University of Guelph's branch of{" "}
          <a
            href="https://www.stemfellowship.org/"
            class="clickable"
            target="_blank"
          >
            STEM Fellowship
          </a>
        </li>
      </ul>
      <p>and some other stuff:</p>
      <ul>
        in the past as a part time or a summber job i've also worked as:
        <li>
          painter
        </li>
        <li>
          line cook
        </li>
        <li>
          door-to-door salesman
        </li>
        <li>
          accountant
        </li>
        <li>
          content creator
        </li>
        
      </ul>
    </div>
  );
}

export default About;
