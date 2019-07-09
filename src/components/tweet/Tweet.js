import React, { Component } from 'react';
import './Tweet.css';
import { Card } from 'react-bootstrap';

import { FaRegFrown, FaRegSmile } from 'react-icons/fa';

export class Tweet extends Component{
  render(){
    return(
      <Card className="tweet">
        <Card.Body className="tweet-body">
          <Card.Text>
            {this.props.data.body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <div id="leftbox">
            <div className="cardPosScore">
              <FaRegSmile />
            </div>
            <div className="cardPosScore">
              {this.props.data.positiveScore} %
            </div>
          </div>
          <div id="rightbox">
            <div className="cardNegScore">
              <FaRegFrown />
            </div>
            <div className="cardNegScore">
              {this.props.data.negativeScore} %
            </div>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default Tweet;
