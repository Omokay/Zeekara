import React from "react";
import "./collections.style.scss";
import CollectionItem from "../CollectionItem/collection-item.component";

const Collections = ({ title, items }) => {
    console.log(title);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
};

export default Collections;
