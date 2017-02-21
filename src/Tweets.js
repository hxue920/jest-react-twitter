import React from 'react';

const Tweets = ({tweets, action}) => {
  return (
    <div>
      {tweets.sort((a, b) => b.user.followers_count - a.user.followers_count)
        .map((tweet, i) => {
        return (
          <div key={tweet.id_str} onClick={action.bind(null, i)}>
            <span><b>{tweet.user.name}({tweet.user.followers_count}): </b></span>
            {tweet.text}
          </div>
        )
      })}
    </div>
  )
}

export default Tweets;
