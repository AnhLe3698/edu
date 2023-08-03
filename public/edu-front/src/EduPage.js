import React, { useState } from 'react';
import './style.css';

const EduPage = () => {
    const [activeSection, setActiveSection] = useState('questions');

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <Header showSection={showSection} />
            <Main activeSection={activeSection} />
            <Footer />
        </div>
    );
};

const Header = ({ showSection }) => {
    return (
        <header>
            <h1>Edu Page: Kinematics</h1>
            <button className="nav-btn" onClick={() => showSection('questions')}>Questions</button>
            <button className="nav-btn" onClick={() => showSection('wiki-entries')}>Wiki Entries</button>
            <button className="nav-btn" onClick={() => showSection('videos')}>Videos</button>
            <button className="nav-btn" onClick={() => showSection('strategies-tips')}>Strategies and Tips</button>
        </header>
    );
};

const Main = ({ activeSection }) => {
    return (
        <main>
            <QuestionsSection active={activeSection === 'questions'} />
            <WikiEntriesSection active={activeSection === 'wiki-entries'} />
            <VideosSection active={activeSection === 'videos'} />
            <StrategiesTipsSection active={activeSection === 'strategies-tips'} />
        </main>
    );
};

const QuestionsSection = ({ active }) => {
  return (
      <section className={active ? 'active' : ''} id="questions">
          <h2>Question 1: What is Kinematics?</h2>
          <ul>
              <li><input type="radio" name="answer1" value="wrong" /> Study of forces</li>
              <li><input type="radio" name="answer1" value="correct" /> Study of motion without considering the forces</li>
              <li><input type="radio" name="answer1" value="wrong" /> Study of heat</li>
              <li><input type="radio" name="answer1" value="wrong" /> Study of light</li>
          </ul>
          <h2>Question 2: What is displacement?</h2>
          <ul>
              <li><input type="radio" name="answer2" value="wrong" /> The total distance travelled</li>
              <li><input type="radio" name="answer2" value="correct" /> The shortest distance from the initial to the final position</li>
              <li><input type="radio" name="answer2" value="wrong" /> The speed of an object</li>
              <li><input type="radio" name="answer2" value="wrong" /> The force applied on an object</li>
          </ul>
          <h2>Question 3: What does velocity measure?</h2>
          <ul>
              <li><input type="radio" name="answer3" value="wrong" /> The displacement of an object</li>
              <li><input type="radio" name="answer3" value="correct" /> The rate of change of displacement</li>
              <li><input type="radio" name="answer3" value="wrong" /> The force applied on an object</li>
              <li><input type="radio" name="answer3" value="wrong" /> The heat of an object</li>
          </ul>
          <h2>Question 4: What is the difference between speed and velocity?</h2>
          <ul>
              <li><input type="radio" name="answer4" value="wrong" /> Speed is a scalar, velocity is not</li>
              <li><input type="radio" name="answer4" value="wrong" /> Speed can be negative, velocity cannot</li>
              <li><input type="radio" name="answer4" value="correct" /> Speed is a scalar quantity, velocity is a vector quantity</li>
              <li><input type="radio" name="answer4" value="wrong" /> There is no difference</li>
          </ul>
          <h2>Question 5: What is acceleration?</h2>
          <ul>
              <li><input type="radio" name="answer5" value="wrong" /> The distance travelled by an object</li>
              <li><input type="radio" name="answer5" value="wrong" /> The speed of an object</li>
              <li><input type="radio" name="answer5" value="correct" /> The rate of change of velocity</li>
              <li><input type="radio" name="answer5" value="wrong" /> The change in displacement</li>
          </ul>
          <button onClick={() => {/* logic for checking answers */ }}>Submit</button>
          <p id="feedback"></p>
      </section>
  );
};


const WikiEntriesSection = ({ active }) => (
  <section className={active ? 'active' : ''} id="wiki-entries">
      <h2>Wiki Entries</h2>
      <h3>Kinematics: An Introduction</h3>
      <p>Kinematics is the branch of physics that describes the motion of points, objects, and systems of bodies without considering the forces that caused the motion.</p>
      <h3>Equations of Motion</h3>
      <p>Equations of motion are mathematical formulas that describe how an object moves, taking into account its initial velocity, acceleration, and time traveled.</p>
      {/* ... other content */}
  </section>
);

const VideosSection = ({ active }) => (
  <section className={active ? 'active' : ''} id="videos">
      <h2>Videos</h2>
      <div className="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dHjWVlfNraM" title="Kinematics Video" frameBorder="0" allowFullScreen></iframe>
      </div>
      {/* ... other videos */}
  </section>
);


const StrategiesTipsSection = ({ active }) => (
  <section className={active ? 'active' : ''} id="strategies-tips">
      <h2>Strategies and Tips</h2>
      <p>Strategy 1: Start by understanding the basics of Kinematics before moving on to more advanced concepts.</p>
      <p>Strategy 2: Use visual aids like diagrams and videos to understand the concepts better.</p>
      <p>Strategy 3: Practice solving problems and apply the equations of motion in real-world scenarios.</p>
      {/* ... other content */}
  </section>
);


const Footer = () => {
    return (
        <footer>
            &copy; 2023 Edu Page
        </footer>
    );
};

export default EduPage;
