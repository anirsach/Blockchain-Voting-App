import "./App.css";
import React from "react";
import web3 from "./web3";
import voting from "./voting";

class App extends React.Component {
  state = {
    cand1: "",
    cand2: "",
    manager: "",
    value: "",
    message: "",
    totalVotes: "",
    value1: ""
  };

  async componentDidMount() {
    const cand1 = await voting.methods.cand1().call();
    const cand2 = await voting.methods.cand2().call();
    const manager = await voting.methods.manager().call();
    const counter1 = await voting.methods.counter1().call();
    const counter2 = await voting.methods.counter2().call();
    const totalVotes = parseInt(counter1) + parseInt(counter2);
    const value1 = await voting.methods.value().call();
    this.setState({ cand1, cand2, manager, totalVotes, value1 });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ message: "Under Process..." });

    const accounts = await web3.eth.getAccounts();
    console.log(this.state.value2);
    await voting.methods.Vote(this.state.value).send({ from: accounts[0], value: web3.utils.toWei(this.state.value2) });

    this.setState({ message: "Voting Done" });
  };

  onClick = async (event) => {
    event.preventDefault();
    this.setState({ message: "Under Process..." });

    const accounts = await web3.eth.getAccounts();
    await voting.methods.winner().send({ from: accounts[0] });

    const prizeWinner = await voting.methods.winner1().call();
    this.setState({ message: "the winner is: " + prizeWinner });
    this.setState({ value1: "0" })


  }

  render() {
    return (
      <div>
        <h2>Voting Machine</h2>
        <h2>Manager:{this.state.manager} </h2>
        <h3>Candidate 1 is : {this.state.cand1} </h3>
        <h3>Candidate 2 is : {this.state.cand2} </h3>
        <h3>Total votes till now is : {this.state.totalVotes} </h3>
        <h3>Total value till now is(wei) : {this.state.value1} </h3>
        <hr />

        <form onSubmit={this.onSubmit} >
          <h4>Cast your vote</h4>
          <label>Choose between 1 or 2</label>
          <input onChange={event => this.setState({ value: event.target.value })} ></input>
          <label>Enter the value in ether</label>
          <input onChange={event => this.setState({ value2: event.target.value })} ></input>
          <button>Submit</button>
        </form>
        <hr />

        <button onClick={this.onClick}>Pick Winner</button>
        <hr />
        {this.state.message}
      </div>
    );
  }
}
export default App;