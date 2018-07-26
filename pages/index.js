import React from 'react';
import Layout from '../components/Layout';
import {Image, Card, Header, Icon, Grid} from 'semantic-ui-react';

const description = [
  "The purpose of Williams Tank Lines is to create the most responsive, reliable customer focused transportation service organization available.",
  " It is the company's desire to provide service and dependability and to consistently maintain positive experiences for both customers and employees, promoting safety, profitability, and loyalty."
]

const description2 = [
  (
    <p>
      <Icon name='star'/>  We believe that the ability to operate safely and to succeed depends on quality training. Every driver at Williams Tank Lines participates in a training program and is paired off with another driver that acts as a trainer for a few weeks to ensure the driver has the adequate training needed.
    </p>
  ),
  (
    <p>
      <Icon name='bullhorn'/>  All drivers participate in a four-day training class before they are able to work in our trucks. Drivers receive training in a vast variety of specifics, including hazardous materials, security, defensive driving, hours of service, loading and unloading procedures, and rollover prevention.
    </p>
  ),
  (
    <p>
      <Icon name='certificate'/>  Drivers also receive a recertification orientation class every two years to ensure that our drivers have the most up to date information to be able to do their job effectively and efficient in the safest way possible.
    </p>
  ),
  (
    <p>
      <Icon name='universal access'/>  Drivers also attend mandatory safety meetings in their terminal of work. This allows new information to be spread quickly and allows for any questions that drivers may have to be answered. These safety meetings occur at different times of the day so all drivers are able to attend.
    </p>
  )
]

export default () => {
  return (
    <Layout>
      <div>
        <Image
          src='https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/homeImg.png'
          style={{'margin':'auto', 'width': '100%'}}
        />
      </div>
      <div style={{
          'margin':'auto',
          'width': '100%',
          'height': '200px',
          'position': 'relative',
          'background': '#ED213A',  /* fallback for old browsers */
          'background': '-webkit-linear-gradient(to right, #93291E, #ED213A)',  /* Chrome 10-25, Safari 5.1-6 */
          'background': 'linear-gradient(to right, #93291E, #ED213A)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }}>
          <p style={{
              'position': 'relative',
              'float': 'left',
              'top': '50%',
              'margin-left': '50%',
              'transform': 'translate(-50%, -50%)',
               'color': 'white',
               'line-height': '25px',
               'font-size': '20px'
            }}>
            {description}
          </p>

        </div>

      <Header as='h2' color='yellow' style={{marginTop:'40px'}}>
        Service
      </Header>

      <Image.Group size="medium">
        <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/serviceImg1.png" rounded/>
        <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/serviceImg2.png" rounded/>
        <Image src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/serviceImg3.png" rounded/>
      </Image.Group>

      <Header as='h2' color='yellow' style={{marginTop:'40px'}}>
        Dependability
      </Header>

      <div style={{
          'margin':'auto',
          'width': '100%',
          'height': '200px',
          'position': 'relative',
          'background': '#ED213A',  /* fallback for old browsers */
          'background': '-webkit-linear-gradient(to right, #93291E, #ED213A)',  /* Chrome 10-25, Safari 5.1-6 */
          'background': 'linear-gradient(to right, #93291E, #ED213A)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }}>
          <p style={{
              'position': 'relative',
              'float': 'left',
              'top': '50%',
              'margin-left': '50%',
              'transform': 'translate(-50%, -50%)',
               'color': 'white',
               'line-height': '5px',
               'font-size': '10px'
            }}>
            {description2}
          </p>

        </div>

    </Layout>
  );
};
