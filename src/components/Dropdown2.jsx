import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)} 
      show={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Dropdown.Toggle  id="dropdown-basic">
        <a href="#">BLOG</a>
      </Dropdown.Toggle>

      <Dropdown.Menu className='it'>
        <Dropdown.Item className='itm' href="#bgc">Blog list</Dropdown.Item>
        <Dropdown.Item className='itm' href="#/action-2">Blog Detail</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
