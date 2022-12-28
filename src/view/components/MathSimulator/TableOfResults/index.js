// import React, { useContext } from 'react';
import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    isLogin: state.auth.isLogin,
    username: state.auth.username,
  });

const TableOfResults = ({ isLogin, username }) => {
  // useEffect(() => {
  //   tableOfResults;
  // }, [isLogin])

const bestResults = useMemo(() => {
  let results;
  try {
    results = JSON.parse(localStorage.getItem('bestResults'));
  } catch (e) {}
  if (!results) return {};
  return results
}, [])

const sortTable = () => {
    
const sortedTable = Object.entries(bestResults)
    .sort((firstArray, secondArray) => secondArray[1] - firstArray[1])
return sortedTable;
}


const tableOfResults = useMemo(() => {
// console.log(Object.entries(sortTable()).slice(0, 10))
  // const sortedTableTopTen = Object.entries(sortTable()).slice(0, 10);
  const sortedTableTopTen = sortTable().slice(0, 5);

  const table = document.getElementById('results-table');
  console.log(sortedTableTopTen);
  for (let i = 0; i < sortedTableTopTen.length; i++) {
    // const row = document.querySelector('row')
  if(sortedTableTopTen[i][0] === username) {
    console.log('current');
    // document.getElementById(sortedTableTopTen[i][0]).className = 'row current';
    // row.className = 'row current';
  } else {
    // document.getElementById(sortedTableTopTen[i][0]).className = 'row';
    // row.className = 'row';
    console.log('no current')
  }
  }
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
}, [username])

        return (
          <>
          {tableOfResults.map(([user, score]) => (
              <div id={user} className={`row ${user === username ? 'current' : ''}`}>
                <div className='username'>{user}</div><div>{score}</div>
              </div>
          )
        )}
                  {username && !tableOfResults.includes(username) && <div className='row outside'>
                    <div className='username'>{username}</div><div>{bestResults[username]}</div>
                    </div>}
                  </> 
        )
}

export default connect(mapStateToProps)(TableOfResults);