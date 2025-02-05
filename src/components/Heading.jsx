const Heading = ({size, variant, children}) => {
    return ( 
        <div className={`heading-${size ? size : '2xl'} ${variant && variant}`}>
            {children}
        </div>
     );
}
 
export default Heading;