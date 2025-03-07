import useBlurStore from '../store/blurStore';

const Card = ({variant, style, children}) => {
    const { isBlurred } = useBlurStore();
    return ( 
        <div className={`${variant ? `card-${variant}` : 'card'} ${style} ${isBlurred && 'bg-blur'}`}>
            {children}
        </div>
     );
}

 
export default Card;