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
        <a href="#bgc">HOME</a>
      </Dropdown.Toggle>

      <Dropdown.Menu className='it'>
        <Dropdown.Item className='itm' href="#bgc">HOME1</Dropdown.Item>
        <Dropdown.Item className='itm' href="#/action-2">HOME2</Dropdown.Item>
        <Dropdown.Item className='itm' href="#/action-3">HOME3</Dropdown.Item>
        <Dropdown.Item className='itm' href="#/action-3">HOME4</Dropdown.Item>
        <Dropdown.Item className='itm' href="#/action-3">HOME rlt</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
