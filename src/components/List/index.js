import React from 'react';
import PropTypes from 'prop-types';

import './List.css';

const List = ({ items }) => {
  return (
    <div className="List">
      {items.map(elem => {
        return (
          <a href={elem.html_url} target="_blank" rel="noreferrer" key={elem.id}>
            <div className="user">
              <div className="userImage">
                <img src={elem.avatar_url} alt={`avatar of ${elem.login}`} />
              </div>
              <div className="userInfo">
                <span className="userName">{elem.login}</span>
                <span className="userID">{elem.id}</span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
