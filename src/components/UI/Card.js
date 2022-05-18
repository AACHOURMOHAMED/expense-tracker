import './Card.css'

const  Card = (data) => {

    const classes = 'card ' + data.className;

    return <div className={classes}>{data.children}</div>
}

export default Card;