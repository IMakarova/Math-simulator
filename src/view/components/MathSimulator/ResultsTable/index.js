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
  this.tableOfResults();
}

sortTable = () => {
const sortedTable = Object.entries(localStorage)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
return sortedTable;
}

tableOfResults = () => {
  const sortedTable = Object.entries(this.sortTable()).slice(0, 9);
  const table = document.getElementById('results-table');
  // console.log(sortedTable);
  for (let i = 0; i < sortedTable.length; i++) {
  const row = document.createElement('div');
  row.id = 'row';
  row.innerHTML = `<div>${sortedTable[i][0]}</div><div>${sortedTable[i][1]}</div>`;
  // console.log(localStorage);
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