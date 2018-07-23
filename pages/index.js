import React from 'react';
import Layout from '../components/Layout';
import {Image, Card, Header} from 'semantic-ui-react';

const description = [
  "The purpose of Williams Tank Lines is to create the most responsive, reliable customer focused transportation service organization available.",
  " It is the company's desire to provide service and dependability and to consistently maintain positive experiences for both customers and employees, promoting safety, profitability, and loyalty."
]

export default () => {
  return (
    <Layout>
      <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/homeImg.png' rounded />

      <Card fluid color='red'>
        <Card.Content description={description} />
      </Card>

      <Header as='h4' color='yellow'>
        Services
      </Header>

      <Image.Group size='tiny'>
        <Image src={src} rounded/>
        <Image src={src} rounded/>
        <Image src={src} rounded/>
      </Image.Group>
    </Layout>
  );
};
