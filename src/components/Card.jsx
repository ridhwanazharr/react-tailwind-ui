const Card = ({variant, style, children}) => {
    return ( 
        <div className={`${variant ? `card-${variant}` : 'card'} style `}>
            {children}
        </div>
     );
}
 
export default Card;