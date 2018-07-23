import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';


export default () => {
  return (
    <Menu style={{marginTop: '15px'}}>
      <Link route="/">
        <a className="item">
          <img src={"http://localhost:3000/assets/logo.png"} alt="logo"/>
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/about">
          <a className="item">
            About
          </a>
        </Link>

        <Link route="/employees">
          <a className="item">
            Employee Links
          </a>
        </Link>

        <Link route="/terminals">
          <a className="item">
            Terminals
          </a>
        </Link>

        <Link route="/careers">
          <a className="item">
            Careers
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
