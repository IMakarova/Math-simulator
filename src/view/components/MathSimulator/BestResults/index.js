import React, { useContext } from 'react';
// import { useEffect } from 'react';
import './style.css';
// import { connect } from 'react-redux';
import TableOfResults from '../TableOfResults'

// const mapStateToProps = (state, ownProps) => ({
//   username: state.auth.username,
//   isLogin: state.auth.isLogin,
// });

const BestResults = ({ username, isLogin }) => {
  // useEffect(() => {
  //   // tableOfResults();
  //   // console.log(tableOfResults().map(([key, val]) => `${key} has ${val}`));
  //   // return () => {
  //   //   if(document.getElementById("results-table")){
  //   //   document.getElementById("results-table").innerHTML = '';
  //   //   }
  //   // };
  // }, [isLogin])



// const sortTable = () => {
//   let bestResults;
//   try {
//     bestResults = JSON.parse(localStorage.getItem('bestResults'));
//   } catch (e) {}

//   if (!bestResults) return {};

//   console.warn('bestResults', bestResults)
//   const sortedTable = Object.entries(bestResults)
//     .sort(([,a],[,b]) => a-b)
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
//   return sortedTable;
// }

// const tableOfResults = () => {
//   const sortedTableTopTen = Object.entries(sortTable()).slice(0, 10);
//   // console.log(sortedTableTopTen)
//   const table = document.getElementById('results-table');
//   return sortedTableTopTen;
//   // for (let i = 0; i < sortedTableTopTen.length; i++) {
//   // const row = document.createElement('div');
//   // row.className = 'row';
//   // row.innerHTML = `<div className='username'>${sortedTableTopTen[i][0]}</div><div>${sortedTableTopTen[i][1]}</div>`;
//   // if(sortedTableTopTen[i][0] === context.username) {
//   //   row.className = 'row current';
//   // } else {
//   //   row.className = 'row';
//   // }
//   // // table.append(row);
//   // }
//   // if(isLogin && !document.querySelector('current') && localStorage.getItem(username)) {
//   //   const outsideRow = document.createElement('div');
//   //   outsideRow.className = 'row outside';
//   //   outsideRow.innerHTML = `<div className='username'>${username}</div><div>${localStorage.getItem(username)}</div>`;
//   //   table.append(outsideRow);
//   //     }
// }

        return (
          <div id='results-page'>
          <div id='results-table'>
            <TableOfResults />
                      </div>
              </div>
        )

}

export default BestResults;