import React from 'react'

const Header = (props) => {
  return (
     <header>{props.title}</header>
  );
}

// Header.defaultProps = {
//   title : "To do List"
// }
export default Header