import React from 'react';
import {Menu, Header} from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
  return (
    <Menu pointing secondary style={{marginTop: '10px'}}>
      <Link route="/">
        <a className="item">
          <img
            src="https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/logo.png"
            alt="logo"
          />
        </a>
      </Link>

      <Link route="/">
        <a className="item">
          EST. 1976
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/about">
          <a className="item">
            <Header as='h4' color='grey'>
              About
            </Header>
          </a>
        </Link>

        <Link route="/employees">
          <a className="item">
            <Header as='h4' color='grey'>
              Employee Links
            </Header>
          </a>
        </Link>

        <Link route="/terminals">
          <a className="item">
            <Header as='h4' color='grey'>
              Terminals
            </Header>
          </a>
        </Link>

        <Link route="/careers">
          <a className="item">
            <Header as='h4' color='grey'>
              Careers
            </Header>
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
