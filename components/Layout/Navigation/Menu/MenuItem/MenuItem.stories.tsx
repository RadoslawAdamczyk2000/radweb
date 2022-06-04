import MenuItem from "../MenuItem/MenuItem";
export const ExpandStories = () => {
    return(
        <MenuItem 
            handle={() => alert('Expand Menu Item')} 
            path='/' 
            title="Expand Menu Item"  
            isExpand={true} 
            handleExpand={() => alert('expand')}
        />
    )
}
export const MainStories = () => {
    return(
        <MenuItem 
            handle={() => alert('Main Menu Item')} 
            path='/' 
            title="Expand Menu Item"  
            isMain={true} 
        />
    )
}
export const SubmenuStories = () => {
    return(
        <MenuItem 
            handle={() => alert('Submenu Menu Item')} 
            path='/' 
            title="Expand Menu Item"  
            isSubmenu={true} 
        />
    )
}
export default {
    title:'Menu Item',
}