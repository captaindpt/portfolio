import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

function Projects() {
  const donutRef = useRef(null);

  const [fontSize, setFontSize] = useState('12px');
  useEffect(() => {
    document.title = "mani's projects";
    let x = 1760, z = 0, y = 0;
    const interval = setInterval(() => {
      z += 0.07;
      y += 0.03;
      const a = [...new Array(x)].map((_, r) => r % 80 === 79 ? "\n" : " ");
      const r = new Array(x).fill(0);
      const t = Math.cos(z), e = Math.sin(z);
      const n = Math.cos(y), o = Math.sin(y);
      for (let s = 0; s < 6.28; s += 0.07) {
        const c = Math.cos(s), h = Math.sin(s);
        for (let s = 0; s < 6.28; s += 0.02) {
          const v = Math.sin(s), M = Math.cos(s);
          const i = c + 2, l = 1 / (v * i * e + h * t + 5);
          const p = v * i * t - h * e, d = 0 | 40 + 30 * l * (M * i * n - p * o);
          const m = 0 | 12 + 15 * l * (M * i * o + p * n);
          const f = 0 | 8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o);
          const y = d + 80 * m;
          if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > r[y]) {
            r[y] = l;
            a[y] = ".,-~:;=!*#$@"[f > 0 ? f : 0];
          }
        }
      }
      donutRef.current.innerHTML = a.join("").split("\n").map(line => line.startsWith('            ') ? line.substring(5) : line).join("\n");
      
    }, 50);

    const adjustFontSize = () => {
      const width = window.innerWidth;
      if (width >= 1500) {
        setFontSize('12px');
      } else if (width <= 600) {
        setFontSize('5px');
      } else {
        // Calculate font size for widths between 1500px and 600px
        const newSize = 12 - ((1500 - width) * (7 / 900));
        setFontSize(`${newSize}px`);
      }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    // Clear interval on component unmount
    return () => {
      window.removeEventListener('resize', adjustFontSize);
      clearInterval(interval);
    }; 
  }, []);



  return (
    <div className="">
        <p>
          some projects, find the rest on my{" "}
          <a href="https://github.com/captaindpt" className="clickable" target="_blank" rel="noopener noreferrer">
            github
          </a>
        </p>

        <div style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', maxWidth: 'auto' }}>
  <p style={{ fontFamily: 'monospace', fontSize: fontSize, margin: 'auto', textAlign: 'center' }}>Here's a math donut for you</p>
  <br></br>
  <pre ref={donutRef} className="donut" style={{ fontFamily: 'monospace', fontSize: fontSize, margin: 'auto' }}></pre>
</div>

      <hr class="dashed" />
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      <p>
        <a
          href="https://github.com/captaindpt/CineFile"
          class="clickable"
          target="_blank"
        >
          <b>CineFile</b>
        </a>{" "}
        <br />
        your movie archive assistant
      </p>
      <p>
        <a
          href="https://github.com/captaindpt/x86-assembly-projects"
          class="clickable"
          target="_blank"
        >
          <b>x86 assembly practice</b>
        </a>{" "}
        <br />rev eng project to learn assembly
      </p>
      <br></br>
      <br></br>
      <p>
        <i>(this page is a work in progress, more projects coming soon!)</i>
      </p>
    </div>
  );
}

export default Projects;
