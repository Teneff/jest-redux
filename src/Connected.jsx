import React from "react";
import { connect } from "react-redux";
import {
  SOMETHING_SIGNIFICANT_HAPPENED,
  SOMETHING_INSIGNIFICANT_HAPPENED
} from "./redux/actionTypes";

const Connected = ({ onSignificant, onInsignificant, dates }) => {
  return (
    <div className="connected">
      <h2>{"<Connected />"}</h2>
      <div className="columns">
        {Object.entries(dates)
          .filter(([k, v]) => Array.isArray(v))
          .map(([key, values]) => (
            <section
              key={key}
              onClick={() => {
                key === "significant" ? onSignificant() : onInsignificant();
              }}
            >
              <h3>{key}</h3>
              <ul>
                {values.map(val => (
                  <li>{val.toString()}</li>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.something
});

const mapDispatchToProps = dispatch => ({
  onSignificant: () => {
    dispatch({
      type: SOMETHING_SIGNIFICANT_HAPPENED
    });
  },
  onInsignificant: () => {
    dispatch({
      type: SOMETHING_INSIGNIFICANT_HAPPENED
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connected);
