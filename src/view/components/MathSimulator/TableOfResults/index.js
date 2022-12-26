// import React, { useContext } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    isLogin: state.auth.isLogin,
  });

const TableOfResults = ({ isLogin }) => {
  useEffect(() => {
    tableOfResults();
    // console.log(tableOfResults().map(([key, val]) => `${key} has ${val}`));
    // return () => {
    //   if(document.getElementById("results-table")){
    //   document.getElementById("results-table").innerHTML = '';
    //   }
    // };
  }, [isLogin])



const sortTable = () => {
    console.log(localStorage)
const sortedTable = Object.entries(localStorage)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
return sortedTable;
}

const tableOfResults = () => {
  const sortedTableTopTen = Object.entries(sortTable()).slice(0, 10);
  // console.log(sortedTableTopTen)
  const table = document.getElementById('results-table');
  return sortedTableTopTen;
  // for (let i = 0; i < sortedTableTopTen.length; i++) {
  // const row = document.createElement('div');
  // row.className = 'row';
  // row.innerHTML = `<div className='username'>${sortedTableTopTen[i][0]}</div><div>${sortedTableTopTen[i][1]}</div>`;
  // if(sortedTableTopTen[i][0] === context.username) {
  //   row.className = 'row current';
  // } else {
  //   row.className = 'row';
  // }
  // // table.append(row);
  // }
  // if(isLogin && !document.querySelector('current') && localStorage.getItem(username)) {
  //   const outsideRow = document.createElement('div');
  //   outsideRow.className = 'row outside';
  //   outsideRow.innerHTML = `<div className='username'>${username}</div><div>${localStorage.getItem(username)}</div>`;
  //   table.append(outsideRow);
  //     }
}

        return (tableOfResults().map(([user, score]) => { return (
              <div className='row'>
                <div className='username'>{user}</div><div>{score}</div>
              </div>
          );
        })
        )
}

export default connect(mapStateToProps)(TableOfResults);