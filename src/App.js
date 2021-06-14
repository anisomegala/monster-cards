import React, { Component } from 'react';
import { CardList } from './components/card-components/card-list.jsx';
import { Footer } from './components/footer-components/footer.jsx';
import { SearchFilter } from './components/searchFilter/search-filter-component.jsx';
import './App.css';


class App extends Component {
constructor () {
  super();
  this.state = {
    products: [],
    footerInfo: { 
      title:'social media',
      social: 'Aniel cards research'
    },
    searchFilter: ''
  }; 
}

// component from livecircle methods
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ products: users}))
}

handle = e => {
  this.setState({ searchFilter: e.target.value })
};


  render () {
    const { products, searchFilter} = this.state;
    const filteredElements = products.filter(product => 
      product.name.toLowerCase().includes(searchFilter.toLowerCase())
      );

    return (
      <div className="App">
        <h1 className="firstH1">Monsters Cards</h1>
        <SearchFilter placeholder='search' handle={this.handle} />            
        <CardList products={filteredElements} /> 
        <Footer footerInfo={ this.state.footerInfo.social } />
      </div>
    );
  }
}

export default App;
