import React from 'react';
import movie1Image from '../../src/styled/Images/Intestellar2.jpg';
import movie2Image from '../../src/styled/Images/Inception.jpg';
import movie3Image from '../../src/styled/Images/H2UD.jpg';
import movie4Image from '../../src/styled/Images/Fast.jpg';
import movie5Image from '../../src/styled/Images/Avatr.jpeg';
import movie6Image from '../../src/styled/Images/watcher.jpeg';
import movie7Image from '../../src/styled/Images/conjur2.jpeg';
import movie8Image from '../../src/styled/Images/jowick2.jpg';
import movie9Image from '../../src/styled/Images/kongss.jpg';
import movie10Image from '../../src/styled/Images/looper.jpeg';
import movie11Image from '../../src/styled/Images/oblivin.jpeg';
import movie12Image from '../../src/styled/Images/pocidu.jpg';
import movie13Image from '../../src/styled/Images/Revenentkskj.jpeg';
import movie14Image from '../../src/styled/Images/Shutterisland.jpeg';
import movie15Image from '../../src/styled/Images/Spiderman.jpeg';
import movie16Image from '../../src/styled/Images/batman.jpeg';

const App = () => {
  const styles = {
    root: {
      
    },
    movieContainer: {
      padding: '20px',
      textAlign: 'center',
    },
    movieGrid: {
      display: 'grid',
      gridGap: '20px',
      gridTemplateColumns: 'repeat(4, 1fr)', 
    },
    movie: {
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden', 
      width: '300px', 
    },
    movieImage: {
      width: '100%',
      borderRadius: '5px 5px 0 0',
    },
    movieTitle: {
      fontSize: '14px', 
      fontWeight: 'bold',
      margin: '10px 0',
      color:'white',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
  }

  return (
    <div style={styles.root}>
      <div><h1 style={{paddingTop:'10px',fontSize:'30px'}}>Trending Movies</h1></div>
      {/*be empty*/}
      <section style={styles.movieContainer}>
        {/* Movies Section */}
        <div style={styles.movieContainer}>
          <h2>Movies</h2>
          <div style={styles.movieGrid}>
            {/* Movie 1 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/interstellar-2014-720" style={styles.link}>
                <img src={movie1Image} alt="Movie 1" style={styles.movieImage} />
                <div style={styles.movieTitle}>Interstellar</div>
              </a>
            </div>
            {/* Movie 2 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/inception_522" style={styles.link}>
                <img src={movie2Image} alt="Movie 2" style={styles.movieImage} />
                <div style={styles.movieTitle}>Inception</div>
              </a>
            </div>
            {/* Movie 3 */}
            <div style={styles.movie}>
              <a href="https://www.moviefone.com/movie/how-to-train-your-dragon/28118/where-to-watch/" style={styles.link}>
                <img src={movie3Image} alt="Movie 3" style={styles.movieImage} />
                <div style={styles.movieTitle}>How to Train Your Dragon</div>
              </a>
            </div>
            {/* Movie 4 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/the.fast.and.the.furious.-2001.1080p-dual-lat_202108" style={styles.link}>
                <img src={movie4Image} alt="Movie 4" style={styles.movieImage} />
                <div style={styles.movieTitle}>Fast and Furious</div>
              </a>
            </div>
            {/* Movie 5 */}
            <div style={styles.movie}>
              <a href="https://www.moviefone.com/movie/avatar-2/20076604/where-to-watch/" style={styles.link}>
                <img src={movie5Image} alt="Movie 5" style={styles.movieImage} />
                <div style={styles.movieTitle}>Avatar</div>
              </a>
            </div>
            {/* Movie 6 */}
            <div style={styles.movie}>
              <a href="https://youtu.be/CrhrNS0JFyg" style={styles.link}>
                <img src={movie6Image} alt="Movie 6" style={styles.movieImage} />
                <div style={styles.movieTitle}>Watchers</div>
              </a>
            </div>
            {/* Movie 7 */}
            <div style={styles.movie}>
              <a href="https://www.moviefone.com/movie/the-conjuring-2/20070947/where-to-watch/" style={styles.link}>
                <img src={movie7Image} alt="Movie 7" style={styles.movieImage} />
                <div style={styles.movieTitle}>Conjuring 2</div>
              </a>
            </div>
            {/* Movie 8 */}
            <div style={styles.movie}>
              <a href="https://www.moviefone.com/movie/john-wick-chapter-2/20079352/where-to-watch/" style={styles.link}>
                <img src={movie8Image} alt="Movie 8" style={styles.movieImage} />
                <div style={styles.movieTitle}>John Wick 2</div>
              </a>
            </div>
            {/* Movie 9 */}
            <div style={styles.movie}>
              <a href="https://www.dailymotion.com/video/x5h2k07" style={styles.link}>
                <img src={movie9Image} alt="Movie 9" style={styles.movieImage} />
                <div style={styles.movieTitle}>Kong Skull Island</div>
              </a>
            </div>
            {/* Movie 10 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/looper.-2012.1080p.-blu-ray.x-264.-yify_202310" style={styles.link}>
                <img src={movie10Image} alt="Movie 10" style={styles.movieImage} />
                <div style={styles.movieTitle}>Looper</div>
              </a>
            </div>
            {/* Movie 11 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/MoviesMoviesMoviesMoviesMoviesMoviesMoviesMoviesMoviesMoviesMoviesMovies" style={styles.link}>
                <img src={movie11Image} alt="Movie 11" style={styles.movieImage} />
                <div style={styles.movieTitle}>Obliviant</div>
              </a>
            </div>
            {/* Movie 12 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/pirates.of.the.caribbean.the.curse.of.the.black.pearl.-2003.1080p-dual-lat_202011" style={styles.link}>
                <img src={movie12Image} alt="Movie 12" style={styles.movieImage} />
                <div style={styles.movieTitle}>Pirates Of The Carabian</div>
              </a>
            </div>
            {/* Movie 13 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/WatchFullMovieStreaming" style={styles.link}>
                <img src={movie13Image} alt="Movie 13" style={styles.movieImage} />
                <div style={styles.movieTitle}>The Revenant</div>
              </a>
            </div>
            {/* Movie 14 */}
            <div style={styles.movie}>
              <a href="https://www.moviefone.com/movie/shutter-island/31787/where-to-watch/" style={styles.link}>
                <img src={movie14Image} alt="Movie 14" style={styles.movieImage} />
                <div style={styles.movieTitle}>Shutter Island</div>
              </a>
            </div>
            {/* Movie 15 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/spider-man-homecoming-hd-720p-936749" style={styles.link}>
                <img src={movie15Image} alt="Movie 15" style={styles.movieImage} />
                <div style={styles.movieTitle}>Spider Man Home Coming</div>
              </a>
            </div>
            {/* Movie 16 */}
            <div style={styles.movie}>
              <a href="https://archive.org/details/darkknighttrilog0000unse" style={styles.link}>
                <img src={movie16Image} alt="Movie 16" style={styles.movieImage} />
                <div style={styles.movieTitle}>Batman</div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END OF MAIN CONTAINER */}
    </div>
  );
};

export default App;
