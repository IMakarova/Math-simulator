import React, { PureComponent } from 'react';
import './style.css';

class ResultsTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
      storage: null,
    }
  }
componentDidMount() {
  console.log(Object.keys(localStorage).length);
  this.tableOfResults();
}

tableOfResults = () => {
  const table = document.getElementById('results-table');
  const keys = Object.keys(localStorage)
  for (let i = 0; i < keys.length; i++) {
  const row = document.createElement('div');
  row.id = 'row';
  row.innerHTML = `<div>${keys[i]}</div><div>${localStorage.getItem(keys[i])}</div>`;
  console.log(localStorage);
  table.append(row);
  }
}



    render() {
        return (
            <div id='results-table'>
              <p>Here will be table of best results</p>
               </div>
        )
    }
}

export default ResultsTable;