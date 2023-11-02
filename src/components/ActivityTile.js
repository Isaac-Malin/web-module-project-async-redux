import React from "react";
import "./ActivityTile.css";
import { connect } from "react-redux";
import { getActivity } from "../actions";

const ActivityTile = (props) => {
  return (
    <div className="app-container">
      <div className="activity-container">
        <h3>ACTIVITY IDEAS</h3>
        <p>ACTIVITY: {props.activities.activity}</p>
        <p>CATEGORY: {props.activities.type}</p>
        <p>PRICE: ${props.activities.price * 10}</p>
        <button onClick={() => props.getActivity()}>Get A New Activity Idea!</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps, {getActivity})(ActivityTile);
