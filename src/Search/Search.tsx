import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import './Search.css';

class Search extends React.Component {
  public render() {
      
    return (
      <div className="app-search">
        <SearchBox
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;