import root from './fourItemsTemplate.module.scss'
import { Item } from './item/item';

interface props {
    title?: string
    items?: []
    buttonName?: string
    showButton?: boolean
    bottom?: string
}
 

const FourItemsTemplate: React.FC<props> = ({title, items, buttonName, showButton = true, bottom = '0px'}:any) => {
    return (
        <div style={{marginBottom: bottom}} className={root.fourItemsTemplate}>
            <h1 className={root.title}>{title}</h1>

            <div className={root.itemsList}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            {showButton && <button className={root.viewAll}>View All</button>}
        </div>
    );
}
 
export default FourItemsTemplate;