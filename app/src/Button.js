
const Button = ({ title, id, color, ...props }) => {

    return (
        <button
            id={id}
            type="submit"
            className={`${id}-btn`}
            {...props}
        >
            <span className="title-button">{title}</span>
            {color && (<span 
            className="color-annimation color-button-annimtion" 

            ></span>)}
            <div className="arrow-right-submit-btn"></div>
        </button>
    );
};

export default Button;