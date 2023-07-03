import ContentItem from "./ContentItem";
const SubMenuItem = (props) => {
    const { id, subMenu } = props;
    console.log("SubMenuItem", props)
    return (
        <div className={`${id}`}>
            {subMenu?.map((item) => <ContentItem idSubMenuItem={id} id={item.id} title={item.title} subMenu={item.subMenu} />)}
        </div>
    )
}
export default SubMenuItem;