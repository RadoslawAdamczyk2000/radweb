interface i {
    children : string | number,
}
const Date = ({children}:i) => <small>{children}</small>
export default Date;