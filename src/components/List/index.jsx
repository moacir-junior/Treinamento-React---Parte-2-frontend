import React from 'react';
import CardMedia from '../CardMedia';
import './List.scss';

function List(props) {
  const { title, list } = props;

  return (
    <div className="list">
      <div className="list__title">{title}</div>
      <div className="list__page">
        {list.map(list => (
          <CardMedia key={list.id} title={list.title} description={list.description} videoUrl={list.videoUrl} />
        ))}
      </div>
    </div>
  );
}

export default List;