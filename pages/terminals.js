import React from 'react';
import Layout from '../components/Layout';
import {Image, Card, Icon, Container} from 'semantic-ui-react';

export default () => {
  const items = [
        {
          header: 'Stockton, California',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
          meta: 'Manager: Mark Sperling',
        },
        {
          header: 'San Jose / Martinez, California',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'Manager: Jeffrey Williams',
        },
        {
          header: 'Sacramento, California',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
          meta: 'Manager: Rod Hindman',
        },
        {
          header: 'Chico, California',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'Manager: Debbie Holmby',
        },
        {
          header: 'Las Vegas, Nevada',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
          meta: 'Manager: Charlotte Slagle',
        },
        {
          header: 'Sparks, Nevada',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'Manager: Lee Sizemore',
        },
        {
          header: 'Bakersfield, California',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
          meta: 'Manager: Steve Bailey',
        },
        {
          header: 'Fresno, California',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
          meta: 'Manager: Larry Ames',
        },
        {
          header: 'Long Beach, California',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
          meta: 'Manager: Adriana Ramirez',
        }
  ]
  return (
    <Layout>
        <Image src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminalsImg.png'/>
      <Container style={{'marginTop':'40px'}}>
          <Card.Group centered items={items} />
        </Container>
    </Layout>
  );
};
