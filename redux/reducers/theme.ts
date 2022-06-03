export const theme = (state:boolean = false, action:any) => {
    switch(
        action.type // (2)
    ){
        case 'THEME_FETCHED':
            return [...action.contacts];
        default:
            return state;
    }
}