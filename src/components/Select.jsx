import {useState, useEffect} from 'react';
import useBlurStore from '../store/blurStore';

const Select = ({children}) => {
    const { isBlurred } = useBlurStore();
    const [selection,setSelection] = useState('Read');
    const [isOpen,setIsOpen] = useState(true);

    useEffect(() => {
        setIsOpen(!isOpen)
    },[selection]);

    return (
        <div>
            <div className="relative">
                <button className="select" onClick={() => setIsOpen(!isOpen)}>{selection} <i className={`fa-solid fa-angle-down select-caret ${isOpen && 'rotate-180'}`}></i></button>

                <div className={`select-menu ${isBlurred && 'bg-blur'} ${isOpen ? 'opacity-100 scale-100 z-50' : 'opacity-0 scale-0 -z-50'}`}>
                    <div className="flex mb-2">
                        <input placeholder="Search.." className="select-search" type="text" />
                    </div>
                    <ul>
                        <li className="select-option" onClick={() => setSelection('Read')}>Read</li>
                        <li className="select-option" onClick={() => setSelection('Write')}>Write</li>
                        <li className="select-option" onClick={() => setSelection('Read & Write')}>Read & Write</li>
                    </ul>
                </div>
            </div> 
        </div>
     );
}
 
export default Select;