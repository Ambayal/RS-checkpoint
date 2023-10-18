import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'I am a React developer.',
      imgSrc: 'https://example.com/image.jpg', // Replace with the actual image source
      profession: 'Web Developer',
    },
    show: false,
    interval: null,
    lastMountTime: null,
  };

  componentDidMount() {
    this.setState({ lastMountTime: new Date() });
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  startInterval() {
    const interval = setInterval(() => {
      this.setState({ lastMountTime: new Date() });
    }, 1000); // Update every second
    this.setState({ interval });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, lastMountTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>
          Toggle Profile
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Component Mount Time: {lastMountTime ? lastMountTime.toLocaleTimeString() : 'N/A'}</p>
      </div>
    );
  }
}

export default App;
