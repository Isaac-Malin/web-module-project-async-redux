import React from "react";
import "./ActivityTile.css";
import { connect } from "react-redux";

const ActivityTile = (props) => {
  return (
    <div className="app-container">
      <div className="activity-container">
        <h3>ACTIVITY IDEAS</h3>
        <p>ACTIVITY: {props.activity}</p>
        <p>CATEGORY: {props.type}</p>
        <p>PRICE: ${props.price * 10}</p>
        <button>Get A New Activity Idea!</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    type: state.type,
    price: state.price,
  };
};

export default connect(mapStateToProps, {})(ActivityTile);
