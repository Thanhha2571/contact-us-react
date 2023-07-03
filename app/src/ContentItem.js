import TextItem from "./TextItem";
const ContentItem = (props) => {
    const { idSubMenuItem, id, title, subMenu } = props
    console.log("ContentItem", props);
    return (
        <div className={`${idSubMenuItem}-${id}`}>
            <a href="" className={`${idSubMenuItem}-${id}-text`}>{title}</a>
            <div className={`${idSubMenuItem}-${id}-item`}>
            {subMenu?.map((item) => <TextItem title={item.item}/>)}
            </div>
            
        </div>
    )
}

export default ContentItem