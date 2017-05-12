import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onAcknowledge: () => { dispatch(restartGame()); }
  };
};

var WinnerAnnouncement = (props) => {
  setTimeout(() => {
    alert(props.winner+" WINS!");
    props.onAcknowledge();
  }, 10);
  return (<div />);
}
WinnerAnnouncement = connect(undefined, mapDispatchToProps)(WinnerAnnouncement);

export default WinnerAnnouncement;
