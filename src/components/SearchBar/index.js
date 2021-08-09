import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';
import ErrorHandler from '../ErrorHandler';
import { gitRequest } from '../../tools/requestApi';
import { isArrayEmpty } from '../../tools/helper';

const SearchBar = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { items, rateLimit } = data;

  const handleSubmit = async event => {
    event.preventDefault();
    const result = await gitRequest(searchTerm);
    setData(result);
    setSearchTerm('');
  };

  const handleChange = event => setSearchTerm(event.target.value);

  return (
    <div className="SearchBar">
      <form onSubmit={event => handleSubmit(event)}>
        <div className="searchBarBox">
          <div className="searchBarTitle">
            <label htmlFor="searchBar">
              <span className="searchBarTitleContent">Github profile finder</span>
            </label>
          </div>
          <div className="searchBarInput">
            <input
              type="text"
              id="searchBar"
              data-testid="searchBar"
              placeholder="Search..."
              name="searchBar"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button type="submit" />
        </div>
      </form>
      <div className="infoBox">
        {items && isArrayEmpty(items) && <ErrorHandler message="no result" />}
        {rateLimit === 0 && <ErrorHandler message="API call limit reached" />}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default SearchBar;
