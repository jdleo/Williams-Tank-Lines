import React from 'react';
import Layout from '../components/Layout';
import {Image, Container, Card, Icon} from 'semantic-ui-react';

export default () => {
  return (
    <Layout>
      <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png'/>
      <Container style={{'marginTop': '40px'}}>
        <Image.Group size="medium">
          <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/serviceImg1.png" rounded/>
          <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/serviceImg2.png" rounded/>
        </Image.Group>
      </Container>
    </Layout>
  );
};
