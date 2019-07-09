import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Trends.css'

import { Container, Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer } from "mdbreact";

import Chart from '../data_visualizer/Chart'
import BrowseHashtag from './BrowseHashtag'


const dataApi = [
                 {"hashTag": "abc", "positiveScore": "76", "negativeScore": "-24"},
                 {"hashTag": "def", "positiveScore": "90", "negativeScore": "-10"},
                 {"hashTag": "ghi", "positiveScore": "70", "negativeScore": "-30"},
                 {"hashTag": "jkl", "positiveScore": "60", "negativeScore": "-40"},
                 {"hashTag": "mno", "positiveScore": "10", "negativeScore": "-90"},
                ]


export class Trends extends Component {
  constructor(props) {
        super();
        this.state = {
            data: dataApi,

        };
    }


  render() {

    const hashTags = this.state.data.map((d) => {
        const path = "/BH/" + d.hashTag;
        return <li><Link to={path}>{d.hashTag}</Link></li>
    })

    return(
      <MDBContainer>
          <Container>
            <Row>
              <Col lg={3}>
                <MDBCard className="trending">
                  <MDBCardBody>
                    <MDBCardTitle tag="h5">Trending hashtags</MDBCardTitle>
                    <MDBCardText>
                      <ul>
                        {hashTags}
                      </ul>
                    </MDBCardText>
                    <MDBCardText small muted>
                      Last updated 3 mins ago
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col lg={9}>
                <Chart data={this.state.data}/>
              </Col>
            </Row>
          </Container>
      </MDBContainer>
    );
  }
}

export default Trends
