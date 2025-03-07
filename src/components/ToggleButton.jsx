import {useState} from 'react';

const ToggleButton = ({preToggle}) => {
    const [isToggled,setIsToggled] = useState(false);

    return ( 
        <div onClick={() => setIsToggled(!isToggled)} className="flex rounded-full outline-1 outline-zinc-900 dark:outline-zinc-200 h-6 w-12 transition-all duration-150">
            <div className={`bg-zinc-900 dark:bg-zinc-200 rounded-full h-5 w-5 transition-all duration-150 my-auto ${isToggled ? 'translate-x-1' : 'translate-x-6'}`}></div>
        </div>
     );
}
 
export default ToggleButton;