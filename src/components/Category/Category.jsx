import React from "react";
import styles from "./Category.module.css";

const Category = ({ category }) => (
  <div className={styles.category}>{category.name}</div>
);

export default Category;
