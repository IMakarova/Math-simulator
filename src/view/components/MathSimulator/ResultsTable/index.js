import React, { useContext } from 'react';
import { useEffect } from 'react';
import './style.css';
import AuthContext from '../../../../context/auth-context';

const ResultsTable = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    tableOfResults();
    return () => {
      if(document.getElementById("results-table")){
      document.getElementById("results-table").innerHTML = '';
      }
    };
  }, [context.isLogin])



const sortTable = () => {
const sortedTable = Object.entries(localStorage)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
return sortedTable;
}

const tableOfResults = () => {
  const sortedTableTopTen = Object.entries(sortTable()).slice(0, 10);
  const table = document.getElementById('results-table');
  for (let i = 0; i < sortedTableTopTen.length; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `<div className='username'>${sortedTableTopTen[i][0]}</div><div>${sortedTableTopTen[i][1]}</div>`;
  if(sortedTableTopTen[i][0] === context.username) {
    row.className = 'row current';
  } else {
    row.className = 'row';
  }
  table.append(row);
  }
  if(context.isLogin && !document.querySelector('current') && localStorage.getItem(context.username)) {
    const outsideRow = document.createElement('div');
    outsideRow.className = 'row outside';
    outsideRow.innerHTML = `<div className='username'>${context.username}</div><div>${localStorage.getItem(context.username)}</div>`;
    table.append(outsideRow);
      }
}

        return (
            <div id='results-page'>
              {/* <p>Here will be table of best results</p> */}
            <div id='results-table'></div></div>
        )
}

export default ResultsTable;