import React from 'react';
import SearchMarkUp from './SearchMarkUp';

class SearchLinkedIn extends React.Component{
    
  /**
   * @description Constructor is to define default function for react
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      onloadDataPrint: false,
      items: [],
      query: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  /**
   * @description searchHandler is to add functionality onChange on searchbox
   * @param {*} event
   */
  searchHandler = (event) => {
    var updatedList = this.state.items, query = event.target.value, SearchLength = query.length;
    // updatedList = updatedList.filter(function(item){
    //   return item.login.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    // });
    if(this.state.items.login){
      if(query !== '' && SearchLength >= 4 || query && SearchLength >= 5 || query !== null && SearchLength >= 5 ){
        this.setState({items: updatedList, dataFlage :true});
      }else{
        this.setState({items: updatedList, dataFlage :false});
      }
    }
    this._getCurrentuser(query);
    //this.setState({items: updatedList});
  }

  _getCurrentuser = (userName) => {
    //var userName = this.state.textBoxQuery;
    var client_id = 'f58e85ab4a4997089b82',
        client_secret = 'd4475f42654fbbdf34daaf7dd28527f4e0ee5eef';

    const fetchConfig = {
      method: 'GET',
      headers: {
        'Authorization': 'f58e85ab4a4997089b82',
        'Content-Type': 'application/json'
      }
    };
    fetch("https://api.github.com/users/" + userName + '?client_id' + client_id + '&client_secret' +  client_secret, fetchConfig)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(this.state.query + 'Test Search');
          this.setState({
            isLoaded: true,
            items: result
          });
        },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )    
  }

  
  /**
   * @description to make the request for latest data
   */    
  // componentDidMount() {
  //   var username = this.state.textBoxQuery;
  //   const fetchConfig = {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'f58e85ab4a4997089b82',
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   fetch("https://api.github.com/users/" + username, fetchConfig)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         console.log(this.state.query + 'Test Search');
  //         this.setState({
  //           isLoaded: true,
  //           items: result,
  //           dataFlage:false
  //         });
  //       },

  //     (error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   )
  // }
    
  /**
   * @description to add default render mathod
   */
  render() {
      const { error, isLoaded ,dataFlage } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if(dataFlage){
        return (
          <div className="linkedin-search-box table">
            <span>Please type keyword for Github Search</span>
            <input type="search" className="form-control" placeholder="Search Here..." onChange={this.searchHandler} />
            <p>{this.state.query}</p>
            <ul>
              <SearchMarkUp 
                avatar_url={this.state.items.avatar_url} 
                key={this.state.items.id} 
                id={this.state.items.id} 
                node={this.state.items.node_id} 
                login={this.state.items.login} 
                name={this.state.items.name} 
                company={this.state.items.company} 
                followers={this.state.items.followers} 
                
              />
              {/* {this.state.items.map
                (item => (
                  <SearchMarkUp key={item.id} id={item.id} login={item.login} />
                ))
              } */}
            </ul>
          </div>
        )
      }else {
        return (
        <div className="linkedin-search-box table">
          <span>Please type keyword for LinkedIn Search</span>
          <input type="search" className="form-control" placeholder="Search Here..." onChange={this.searchHandler} />
          <p>{this.state.query}</p>
          
        </div>
      );
    }
  }
}

export default SearchLinkedIn;