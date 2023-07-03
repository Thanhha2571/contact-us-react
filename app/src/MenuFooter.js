import "./Header.css";
import SubMenuFooter from "./SubMenuFooter";
const MenuFooter = (props) => {
    const { id, subMenu } = props;
    return (
        <div className={`sub-menu-${id}`}>
            {subMenu.map(({title}) => <SubMenuFooter title={title} id = {id} />)}
        </div>
    )
}

export default MenuFooter