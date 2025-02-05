const Card = ({variant, children}) => {
    return ( 
        <div className={variant ? `card-${variant}` : 'card'}>
            {children}
        </div>
     );
}
 
export default Card;