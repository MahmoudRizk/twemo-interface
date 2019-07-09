import React, { Component } from 'react';
import './BrowseHashtag.css';

import { Container, Row, Col, Card } from 'react-bootstrap';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer } from "mdbreact";

import Tweet from '../tweet/Tweet';
import Chart from '../data_visualizer/Chart';

const dataApi = {
  "positiveScore": "60",
  "negativeScore": "-40",
  "tweets" : [
              {
                "body": "abcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkarabcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkarabcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkarabcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkar",
                "positiveScore": "10",
                "negativeScore": "90"
              },
              {
                "body": "abcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkar",
                "positiveScore": "30",
                "negativeScore": "70"
              },
              {
                "body": "abcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkarabcdefglenrgfefknae;lrfnerafserkjgn;kjergbekjrgfne,mrfnvvvnlksejbgflvkjsergjbek;afvb;kjeabgesgbhavflkar",
                "positiveScore": "60",
                "negativeScore": "40"
              },


  ],
};

export class BrowseHashtag extends Component {
  constructor(props) {
        super();
        this.state = {
            name : "",
            data: dataApi,

        };
    console.log(this.props);
    }

    componentDidMount() {
      const { handle } = this.props.match.params;
      this.setState({name: handle});
 }


  render() {
    const tweets =  this.state.data.tweets.map((it) => {
      return <Tweet data={it}/>;
    })

    return(
          <Container>
            <Row>
              <Col lg={6}>
                <div className="tweets">
                  <Card className="mainCard scrollbar-primary">
                    <Card.Header>
                      <h5>{this.state.name}</h5>
                    </Card.Header>
                    <Card.Body>
                          {tweets}
                    </Card.Body>
                  </Card>

                </div>
              </Col>
              <Col lg={6}>
                <div className="graph">
                  <Chart data={
                    [{"hashTag": this.state.name,
                      "positiveScore": this.state.data.positiveScore,
                      "negativeScore": this.state.data.negativeScore
                    }]}
                  />
                </div>
              </Col>
            </Row>
          </Container>
    );
  }
}

export default BrowseHashtag
