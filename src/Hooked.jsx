import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SOMETHING_SIGNIFICANT_HAPPENED,
  SOMETHING_INSIGNIFICANT_HAPPENED
} from "./redux/actionTypes";

const Hooked = () => {
  const { dates } = useSelector(state => state.something);
  const dispatch = useDispatch();
  const onSignificant = useCallback(
    () =>
      dispatch({
        type: SOMETHING_SIGNIFICANT_HAPPENED
      }),
    [dispatch]
  );
  const onInsignificant = useCallback(
    () =>
      dispatch({
        type: SOMETHING_INSIGNIFICANT_HAPPENED
      }),
    [dispatch]
  );
  return (
    <div className="connected">
      <h2>{"<Hooked />"}</h2>
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

export default Hooked;
