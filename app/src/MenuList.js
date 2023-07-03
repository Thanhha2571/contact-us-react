
const MenuList = (props) => {
    const { id, name, style, handleMenuOpen, handleMenuClose } = props;
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <li onMouseOver={() => handleMenuOpen(id)}
        
         className="menu-list-drop" id={id}>
            <a className={style}>{name}</a>
            {/* {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li>ABdfsdf</li>
                        <li>ABdfsdf</li>
                        <li>ABdfsdf</li>
                        <li>ABdfsdf</li>
                    </ul>
                </div>
            )} */}
        </li>
    )
}

export default MenuList