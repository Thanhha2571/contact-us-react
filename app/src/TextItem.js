const TextItem = (props) => {
    const { title } = props;
    console.log("TextItem", props);
    return (
        <a href="" className="item-text">{title}</a>
    )
}

export default TextItem;