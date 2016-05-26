const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./store');

require('./reset.css');
require('./main.scss');

let grudges = [
  { id: 1, name: 'This Person', body: 'They did this horrible thing'},
]

const JackalList = React.createClass({
  render() {
    return (
      <div className="application">
        <h1>Jackal List</h1>
        <GrudgesList />
      </div>
    );
  },
});

const GrudgesList = React.createClass({
  getInitialState(){
    return { grudges }
  },
  render() {
    // const grudgeComponents = grudges.map(grudge => {
    //   return <GrudgeItem {...grudge} key={grudge.id} />;
    // });

    return (
      <div className="grudge-list">
      <h2>Grudges</h2>
      {/*{grudgeComponents}*/}
      </div>
    );
  },
});

// const GrudgeItem = React.createClass({
//
// });

ReactDOM.render(<JackalList />, document.querySelector('.container'));
