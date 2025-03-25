import React from 'react';

const Text= ({ text, type = "h1" }) => {
  const Tag = type ||"p";
  return <Tag>{text}</Tag>;
};


export default Text;


/*function Text() {
  return (
    <div>
        <h1>TodoMatic</h1>
        <h1>What needs to be done?</h1>
    </div>
  );
  
   
}*/