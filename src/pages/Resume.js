import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "mani's resume";
  }, []);

  return (
    <div>
      <p>here's my resume :)</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1xKMX4g0sD5RdmyJopKNO5CLsqnuOZoE2/preview"
        width="640"
        height="825"
        allow="autoplay"
      ></iframe>

      <a
        href="/Resume_Mani_Rashahmadi.pdf"
        download="Resume_Mani_Rashahmadi.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
