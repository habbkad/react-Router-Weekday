import React, { Component } from "react";

class Lifecycleclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lifecycleclass</h1>
        {this.state.users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              <h1>{user.phone}</h1>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Lifecycleclass;
