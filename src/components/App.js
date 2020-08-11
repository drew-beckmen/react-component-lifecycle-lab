import React from 'react';
import TweetWall from './TweetWall';

import { getTweets } from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  componentWillUnmount() {
    this.cleanUpInterval()
  }

  //Set up timer/interval to display new tweets
  //Start interval when component is mounted and clean it up when unmounted.
  componentDidMount() {
    this.startInterval()
  }
  
  
  //Call method to fetch external data in componentWillMount
  //Now deprecated in React 16.3
  //***Better place to fetch data is componentDidMount***
  componentWillMount() {
    this.fetchTweets()
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
