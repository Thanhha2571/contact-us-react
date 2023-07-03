import "./Header.css"
const SubMenuFooter = (props) => {
    const { id, title } = props;
    return (
        <div className={`service-${id}`}>{title}</div>
    )
}

export default SubMenuFooter