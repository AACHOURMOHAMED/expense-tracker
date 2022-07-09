import './Card.css';

const Card = (data) => {
  // eslint-disable-next-line react/destructuring-assignment
  const classes = `card ${data.className}`;

  // eslint-disable-next-line react/destructuring-assignment
  return <div className={classes}>{data.children}</div>;
};

export default Card;
