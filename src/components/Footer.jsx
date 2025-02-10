const Footer = ({children}) => {
    return ( 
        <div className="flex bg-zinc-200 border-t-1 border-black/25 dark:border-white/25  text-black dark:text-white dark:bg-zinc-950 min-h-24 px-2 py-4">
            Made by Rawing
            {children}
        </div>
     );
}
 
export default Footer;