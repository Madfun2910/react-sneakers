
function Card (props) {

    const onClickButton = () => {
        alert(props.price)
    }

    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/btn-unliked.svg" alt="Liked"/>
            </div>
            <img width={133} height={112} src={props.imageURL} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className="button" onClick={onClickButton}>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}
export default Card;











