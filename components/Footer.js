import React from 'react';
import {Message, Icon, Header} from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
  return (
    <Message style={{marginTop: '70px'}}>
      <Message.Header>
        <Header as='h4' color='red'>
          Contact
        </Header>
      </Message.Header>
      <p>
        <Icon name="map pin"/> 1477 Tillioe Lewis Dr. Stockton CA 95206 <br/>
        <Icon name="phone"/> (209) 944-5613
      </p>
    </Message>
  );
};
