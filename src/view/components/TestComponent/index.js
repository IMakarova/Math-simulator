class MathSimulator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      props,
      header: 'How to start?',
      isText: true,
      isOperation: false,
      isRight: false,
      isWrong: false,
      comment: null,
      button: 'check',
      result: '',
      readOnly: false,
      isQuiz: false,
      quizIsStart: false,
      isTable: false,
      timerIsStart: false,
      timeIsOver: false,
    };
  }
  changeHeader = (val) => this.setState({ header: val });
  switchIsText = (val) => this.setState({ isText: val });
  switchIsOperation = (val) => this.setState({ isOperation: val });
  switchIsRight = (val) => this.setState({ isRight: val });
  switchIsWrong = (val) => this.setState({ isWrong: val });
  changeComment = (val) => this.setState({ comment: val });
  changeButton = (val) => this.setState({ button: val });
  changeResult = (val) => this.setState({ result: val });
  switchReadOnly = (val) => this.setState({ readOnly: val });
  switchIsQuiz = (val) => this.setState({ isQuiz: val });
  switchQuizIsStart = (val) => this.setState({ quizIsStart: val });
  switchIsTable = (val) => this.setState({ isTable: val });
  switchTimerIsStart = (val) => this.setState({ timerIsStart: val });
  switchTimeIsOver = (val) => this.setState({ timeIsOver: val });
  render() {
    return (
      <div id="container">
        <Main />
        <Sidebar />
      </div>
    );
  }
}
