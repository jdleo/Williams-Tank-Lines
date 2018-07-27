import React from 'react';
import Layout from '../components/Layout';
import {Image, Container, Statistic, Card, Divider} from 'semantic-ui-react';

const description = [
  (
    <p>
      <b>Service</b> is all that we have to market. We will always strive to provide the best service available and continue to improve upon our service as we grow.
    </p>
  ),
  (
    <p>
      <b>Dependability</b> starts with the employees and the equipment we give them to do their job. Our employees are highly trained professionals that are constantly educated on changes in the industry. We strive to operate the newest and only the most reliable equipment available. All of the tractors are late model Peterbilt models that are outfitted to give the employees the best tools for the job.
    </p>
  )
]

export default () => {
  return (
    <Layout>
      <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/aboutusImg.png'/>
      <Container style={{'marginTop':'40px'}}>
        <Card.Group centered>
          <Statistic.Group centered>
            <Statistic>
              <Statistic.Value>100+</Statistic.Value>
              <Statistic.Label>units</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>11</Statistic.Value>
              <Statistic.Label>locations</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>300+</Statistic.Value>
              <Statistic.Label>customers</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value text>42 <br/>years</Statistic.Value>
              <Statistic.Label>of service</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Card.Group>
        <Divider/>
        Williams Tank Lines is one of the largest for hire bulk petroleum carriers in California. The company operates over 100 units out of 9 different locations in California and 2 locations in Nevada.<br/><br/>
        The corporate office is located at 1477 Tillie Lewis Drive in Stockton, California. This location handles all operations for the company including dispatch and billing operations for all of the outside locations.<br/><br/>
        Williams Tank Lines provides their customers with 24-hour delivery service of all types of petroleum products. The company also operates a fleet of ICC licensed vehicles which transport bulk products throughout the Western United States.<br/><br/>
        The company was founded in April of 1976 by Michael and Marlys Williams. Mike Williams has been involved in the transportation industry for over 40 years. Prior to starting Williams Tank Lines, Mike was a delivery driver for a major oil company. This particular oil company eliminated their transportation entity, opening up the opportunity for Mike to pursue his dream of his own business.<br/><br/>
        In the beginning, support for Williams Tank Lines came from a small group of independent jobbers. Today, Williams Tank Lines serves over 300 customers ranging from independent jobbers to major oil companies, to any individual who is in need of our transportation services.<br/><br/>
        Williams Tank Lines is committed to our customers needs and strives to provide service and dependability with every transportation movement.<br/><br/>
      </Container>
      <div style={{
          'margin':'auto',
          'width': '100%',
          'height': '300px',
          'position': 'relative',
          'marginTop': '50px',
          'background': '#373b44',  /* fallback for old browsers */
          'background': '-webkit-linear-gradient(to right, #373b44, #4286f4)',  /* Chrome 10-25, Safari 5.1-6 */
          'background': 'linear-gradient(to right, #373b44, #4286f4)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }}>
          <p style={{
              'position': 'relative',
              'float': 'left',
              'top': '50%',
              'margin-left': '50%',
              'transform': 'translate(-50%, -50%)',
               'color': 'white',
               'line-height': '5px',
               'font-size': '16px'
            }}>
            {description}
        </p>
      </div>
    </Layout>
  );
};
