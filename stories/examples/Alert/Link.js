import React from 'react';
import { Alert } from 'reactstrap';
import { colors } from '../options'

const Example = (props) => {
  return (
    <>
      {colors.map((color) => (
        <Alert color={color} key={color}>
          This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
        </Alert>
      ))}
    </>
  );
};

export default Example;

Example.parameters = {
  docs: {
    description: {
      story: 'Alerts get a matching link color.'
    }
  }
}