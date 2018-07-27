import React from 'react';
import Layout from '../components/Layout';
import {Image, Card, Icon, Container} from 'semantic-ui-react';

export default () => {

  const items = [
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/stocktonImg.png',
          header: 'Stockton, California',
          description: 'Phone: 209-944-5613',
          extra: '1477 Tillie Lewis Dr. Stockton, CA 95206',
          meta: 'Manager: Mark Sperling',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/martinezImg.png',
          header: 'San Jose, California',
          description: 'Phone: 408-433-0214',
          extra: '2050 Oakland Rd. San Jose, CA 95131',
          meta: 'Manager: Jeffrey Williams',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/martinezImg.png',
          header: 'Martinez, California',
          description: 'Phone: 409-433-0014',
          extra: '5050 Imhoff Dr. Martinez, CA 94553',
          meta: 'Manager: Jeffrey Williams',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/sacramentoImg.png',
          header: 'Sacramento, California',
          description: 'Phone: 916-361-7655',
          extra: '1700 S. River Rd. West Sacramento, CA 95691',
          meta: 'Manager: Rod Hindman',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/chicoImg.png',
          header: 'Chico, California',
          description: 'Phone: 530-894-8581',
          extra: '2266 Park Ave. Chico, CA 95928',
          meta: 'Manager: Debbie Holmby',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/lasvegasImg.png',
          header: 'Las Vegas, Nevada',
          description: 'Phone: 702-399-2800',
          extra: '5530 N. Sloan Ave. Las Vegas, NV 89115',
          meta: 'Manager: Charlotte Slagle',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/sparksImg.png',
          header: 'Sparks, Nevada',
          description: 'Phone: 775-356-1175',
          extra: '950 E. Greg St. Sparks, NV 89431',
          meta: 'Manager: Lee Sizemore',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/bakersfieldImg.png',
          header: 'Bakersfield, California',
          description: 'Phone: 661-634-9755',
          extra: '2148 Bricyn Ln. Bakersfield, CA 93308',
          meta: 'Manager: Steve Bailey',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/fresnoImg.png',
          header: 'Fresno, California',
          description: 'Phone: 559-264-1709',
          extra: '4260 S. Orange Ave. Fresno, CA 93725',
          meta: 'Manager: Larry Ames',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/longbeachImg.png',
          header: 'Long Beach, California',
          description: 'Phone: 310-513-2446',
          extra: '710 E. D St. Wilmington, CA 90744',
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
