import React from "react";
import Category from "../Category/Category";
import styles from "./CategoryList.module.css";

const CategoryList = ({ categories }) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
