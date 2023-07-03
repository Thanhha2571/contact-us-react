import "./Header.css";
import SubMenuItem from "./SubMenuItem";
const SubMenu = (props) => {
    const { id, subMenu, isOpenSubMenu } = props;
    console.log("SubMenuItem", props);
    return (
        <div>
            {isOpenSubMenu === id && (
                <ul className={`sub-${id}`}>
                    {subMenu?.map((item) => <SubMenuItem id={item.id} subMenu={item.subMenu} />)}
                </ul>
            )}
        </div>
        // <ul className={`sub-${id}`}>
        //     {subMenu?.map((item) => <SubMenuItem id={item.id} subMenu={item.subMenu} />)}
        // </ul>
    )
}

export default SubMenu