import React from "react";
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";

const CategoryList = ({ categoryList }) => {
  return (
    <ul className={styles.categoryList}>
      {categoryList.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
