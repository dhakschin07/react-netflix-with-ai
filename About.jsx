import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "whitesmoke", padding: "20px" }}>
      <div>
        <center>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            About Netflix
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – all accessible on thousands of internet-connected devices.
            <br /><br />
            With Netflix, you can enjoy unlimited ad-free viewing of our extensive library of content for one low monthly price. Whether it's binge-watching your favorite TV series, discovering new movies, or exploring captivating documentaries, there's always something for everyone on Netflix.
            <br /><br />
            Our library includes feature films, documentaries, TV shows, anime, and award-winning Netflix originals. You have the flexibility to watch as much as you want, anytime you want.
            <br /><br />
            Additionally, Netflix offers a dedicated Kids experience, providing parents with control over what their children watch. Kids profiles come with PIN-protected parental controls, allowing you to manage the maturity rating of content and block specific titles.
          </p>
        </center>
      </div>
    </div>
  );
}

export default About;
