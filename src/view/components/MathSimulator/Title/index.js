import './style.css';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  homeClick: ownProps?.homeClick
});

const Title = ({ homeClick }) => {
  const location = useLocation();
        return (
        <>
          {location.pathname === '/' ? <h1>Math simulator. Operations within 1000</h1> : 
          <NavLink to='/' activeClassName='active-home' >
            <h1 onClick={homeClick} className='link'>Math simulator. Operations within 1000</h1>
          </NavLink>
          }
        </>
        )
}

export default connect(mapStateToProps)(Title);
