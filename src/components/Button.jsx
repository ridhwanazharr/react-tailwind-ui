const Button = ({link,variant,size,icon,label}) => {
    return ( 
        <a href={link} className={`${size ? `btn-${size}` : 'btn-md'} ${variant ? `btn-${variant}` : 'btn-primary'}`}>
            {icon && <i className={`me-1 ${icon}`}></i>}
            {label} 
        </a>
     );
}
 
export default Button;