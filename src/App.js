import React,{Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false, 
    }
  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json =>{
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
    }

  render() {

      var { isLoaded, items } = this.state;

      if(!isLoaded){
        return <div>Loading...</div>;
      }
      else{

        return (
          <div className="App">

            <ul>
                {items.map(item =>(
                    <div key={item.id}>
                      <p>My name is {item.name}</p>
                       <p>With an email of {item.email}</p> 
                    </div>
                ))};
            </ul>

          </div>
        );

      }

    
  }
  
}

export default App;
