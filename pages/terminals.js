import React from 'react';
import Layout from '../components/Layout';
import {Image, Card, Icon, Container, Header} from 'semantic-ui-react';

const description = [
  (
    <Header as='h1' inverted color='grey'>
      Services
    </Header>
  ),
  (
    <p>
      <Icon name='tasks'/>  Inventory Management - Inventories are managed and orders are generated automatically based on daily or weekly usage. Product levels can be received electronically with little or no effort on your part.
    </p>
  ),
  (
    <p>
      <Icon name='rss'/>  Trucking Communication - All company owned vehicles are equipped with GPS units. These units are integrated into our dispatch software provided up to date information between the driver and dispatch. The system is updated at every stage of delivery.
    </p>
  ),
  (
    <p>
      <Icon name='calendar check'/>   Delivery Scheduling - Orders can be placed on a planning board until the best option is made available. This ensures optimal utilization of company resources and customer expectations.
    </p>
  ),
  (
    <p>
      <Icon name='computer'/>  Onboard Computers - The onboard computers also track driver logs, GPS tracking, productivity management, safety, & security tools.
    </p>
  ),
  (
    <p>
      <Icon name='file'/>  Electronic Filing - All paperwork relating to an order is stored electronically. These files can be sent automatically or at the request of our customers with a few simple clicks.
    </p>
  ),
  (
    <p>
      <Icon name='lightbulb'/>  Four dispatch locations - two 24/7/365 and two others open during normal business hours.
    </p>
  )
]

export default () => {

  const items = [
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/stocktonImg.png',
          header: 'Stockton, California',
          description: 'Phone: 209-944-5613',
          extra: '1477 Tillie Lewis Dr. Stockton, CA 95206',
          meta: 'Manager: Mark Sperling',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/martinezImg.png',
          header: 'San Jose, California',
          description: 'Phone: 408-433-0214',
          extra: '2050 Oakland Rd. San Jose, CA 95131',
          meta: 'Manager: Jeffrey Williams',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/martinezImg.png',
          header: 'Martinez, California',
          description: 'Phone: 409-433-0014',
          extra: '5050 Imhoff Dr. Martinez, CA 94553',
          meta: 'Manager: Jeffrey Williams',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/sacramentoImg.png',
          header: 'Sacramento, California',
          description: 'Phone: 916-361-7655',
          extra: '1700 S. River Rd. West Sacramento, CA 95691',
          meta: 'Manager: Rod Hindman',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/chicoImg.png',
          header: 'Chico, California',
          description: 'Phone: 530-894-8581',
          extra: '2266 Park Ave. Chico, CA 95928',
          meta: 'Manager: Debbie Holmby',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/lasvegasImg.png',
          header: 'Las Vegas, Nevada',
          description: 'Phone: 702-399-2800',
          extra: '5530 N. Sloan Ave. Las Vegas, NV 89115',
          meta: 'Manager: Charlotte Slagle',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/sparksImg.png',
          header: 'Sparks, Nevada',
          description: 'Phone: 775-356-1175',
          extra: '950 E. Greg St. Sparks, NV 89431',
          meta: 'Manager: Lee Sizemore',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/bakersfieldImg.png',
          header: 'Bakersfield, California',
          description: 'Phone: 661-634-9755',
          extra: '2148 Bricyn Ln. Bakersfield, CA 93308',
          meta: 'Manager: Steve Bailey',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/fresnoImg.png',
          header: 'Fresno, California',
          description: 'Phone: 559-264-1709',
          extra: '4260 S. Orange Ave. Fresno, CA 93725',
          meta: 'Manager: Larry Ames',
        },
        {
          'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/longbeachImg.png',
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
      <div style={{
          'margin':'auto',
          'width': '100%',
          'height': '600px',
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
