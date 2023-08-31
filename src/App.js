import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { theme: "light" };
  }

  // create handler function here
  handleThemeLight = () => {
    this.setState({
      theme : 'dark'
    })
  }
  handleThemeDark = () => {
    this.setState({
      theme : 'light'
    })
  }

  render() {
    const {theme} = this.state;
    return (
      // Add dynamic classes with state to the div below

      <div className = {theme === 'light' ? 'light' : 'dark'}>
        {/* Add the button element here */}
        <div className = "btn">
          {theme === 'light' ? <button onClick = {this.handleThemeLight} className = 'white'>Dark Theme</button> : <button onClick = {this.handleThemeDark} className = 'black'>Light Theme</button>}
        
        
        </div>
        
        <h2 className={theme === 'light' ? 'black-text' : 'white-text'}>Why We Explore - NASA</h2>
        <div className='nasa'>
        <img
          src="https://res.cloudinary.com/dl26pbek4/image/upload/v1671686299/launch-pad-67650_1920_p6izup.jpg"
          alt="space shuttle"
        />
        <p className={theme === 'light' ? 'black-text' : 'white-text'}>
          Humans are driven to explore the unknown, discover new worlds, push
          the boundaries of our scientific and technical limits, and then push
          further. The intangible desire to explore and challenge the boundaries
          of what we know and where we have been has provided benefits to our
          society for centuries.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
