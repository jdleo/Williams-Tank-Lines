import React from 'react';
import Layout from '../components/Layout';
import {Image, Container, Card, Icon} from 'semantic-ui-react';

export default () => {
  return (
    <Layout>
      <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png'/>
      <Container style={{'marginTop': '40px'}}>
        <Image.Group size='large'>
          <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg2.png" rounded/>
          <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg3.png" rounded/>
        </Image.Group>
      </Container>
    </Layout>
  );
};
