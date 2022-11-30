// import * as MathSimulator from './';

function MathSimulatorDOM() {
  return (
    <><div id="container">
      <div id="header">
        <h1>Math simulator. Operations within 1000</h1>
      </div>
      <div id="sidebar">
        <h3>Operations</h3>
        <ul>
          <li className="sideBarButton Addition" id="addition-button">
            Addition
          </li>
          <li className="sideBarButton substraction">Substraction</li>
          <li className="sideBarButton multiplication">Multiplication</li>
          <li className="sideBarButton division">Division</li>
          <li className="sideBarButton quiz"></li>
        </ul>
      </div>
      <div id="main">
        <div id="start-text">
          <h2>How to start?</h2>
          <p>
            Choose preferable math operation from the list on the left to start
            practicing your skills.
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="copyright">&copy; Irina Makarova</div>
        <div id="year">2022</div>
      </div>
    </div></>
  );
}

export default MathSimulatorDOM;
