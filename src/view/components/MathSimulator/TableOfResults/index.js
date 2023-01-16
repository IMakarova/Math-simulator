// import React, { useContext } from 'react';
import { useMemo } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    isLogin: state.auth.isLogin,
    username: state.auth.username,
    score: state.main.score,
  });

const TableOfResults = ({ isLogin, username, score }) => {

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
  const sortedTableTopTen = sortTable().slice(0, 10);
  return sortedTableTopTen;
}, [username])

        return (
          <>
          {tableOfResults.map(([user, score]) => (
              <div key={user} className={`row ${user === username ? 'current' : ''}`}>
                <div className='username'>{user}</div><div>{score}</div>
              </div>
          )
        )}
                  {username && !tableOfResults.flat().includes(username) &&
                  <div className='row outside'>
                    <div className='username'>{username}</div><div>{bestResults[username]}</div>
                    </div>
                }
                  </> 
        )
}

export default connect(mapStateToProps)(TableOfResults);