import React, { Component } from 'react';
import Tweets from './Tweets';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      tweets: [],
      savedTweets: []
    }
  }

  getTweets = () => {
    const baseUrl = 'http://localhost:5555/api/tweets';
    const queryUrl = baseUrl + '?query=' + this.state.query;
    const request = new Request(queryUrl, {
      method: 'GET'
    })
    fetch(request).then(res => res.json())
    .then(json => this.setState({tweets: json.statuses}))
    .catch(error => console.log(error))
  }

  updateSearch = (e) => {
    this.setState({ query: e.target.value });
  }

  save = (index) => {
    const newState = this.state;
    newState.savedTweets.push(this.state.tweets[index]);
    this.setState(newState);
  }

  remove = (index) => {
    const newState = this.state;
    newState.savedTweets.splice(index, 1);
    this.setState(newState)
  }

  render() {
    const { flexContainer, tweetBox, header } = styles;
    return (
      <div>
        Search: <input onChange={this.updateSearch} />
        <button onClick={this.getTweets}>Search</button>
        <div style={flexContainer}>
          <div style={tweetBox}><span style={header}>Search Results</span>
            <Tweets tweets={this.state.tweets} action={this.save} />
          </div>
          <div style={tweetBox}><span style={header}>Saved Tweets</span>
            <Tweets tweets={this.state.savedTweets} action={this.remove} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  header: {
    fontSize: '1.5em',
    color: '#4099FF'
  },
  tweetBox: {
    border: '1px solid black',
    minWidth: '400px',
    padding: '5px'
  }
};

export default App;
