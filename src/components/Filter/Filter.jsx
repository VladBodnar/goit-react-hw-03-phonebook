import React from 'react';
import PropTypes from "prop-types";
import css from "./Filter.module.css"
const Filter = ({ value, onChange }) => (
  <label className={css.filterItem}>
   <span className={css.filterItemCild}> Fiend contacts by name </span><input type="text" value={value} onChange={onChange} className={css.filterItemCild} />
  </label>
);

Filter.propTypes ={
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
export default Filter;
