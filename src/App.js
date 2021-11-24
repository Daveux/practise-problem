import logo from './logo.svg';
import React from "react";
import './App.css';
import BlogCard from './BlogCard'

class App extends React.Component {
    state = {
        hideBlog: false
    }
   blogObj = [
      {
          id: 1,
          title: "Na me 1",
          description: "Still me 1"
      },
      {
          id: 2,
          title: "Na me 2",
          description: "Still me 2"
      },
      {
          id: 3,
          title: "Na me 3",
          description: "Still me 3"
      },
  ]
     arr = this.blogObj.map((elem, pos) => {
        return (
            <BlogCard item={elem} key={elem.id}/>
        )
    });

   hideStuff = () => {
       this.setState((prevState, prevProps) => {
          return {
              hideBlog: !prevState.hideBlog
          }
       })
   }

    render () {
        return (

            <div className="App">
                {this.state.hideBlog? null : this.arr}
                <button onClick={this.hideStuff}>{this.state.hideBlog ? 'Show Stuff' : 'Hide Stuff'}</button>
            </div>
        )
    }
}

export default App;
