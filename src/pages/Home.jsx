import CardDemo from "../components/CardDemo";
import Button from "../components/Button"

const Home = () => {
    return ( 
    <div>
        <div className="max-w-3/4 mx-auto my-12">
            <h1 className="col-span-2 text-5xl text-black dark:text-white  font-bold my-6 drop-shadow-lg">GlassUI - Elevate Your Web Experience.</h1>
            </div>
            <div className="max-w-3/4 grid grid-cols-2 max-sm:grid-cols-1 gap-4 mx-auto">
            <div>
                <h2 className="text-3xl text-black dark:text-white  font-bold my-6">A Stunning, Modern, and Responsive Web Theme</h2>
                <p className="text-lg text-black dark:text-white font-medium mb-5">brings elegance and functionality together with a sleek, glassmorphic design, smooth transitions, and fully responsive layouts. Whether you're building a portfolio, a business website, or a personal blog, our theme ensures a visually stunning and seamless experience.</p>
                <div className="flex items-center justify-center">
                <Button link="#" size="sm" variant="warning" icon="fa-brands fa-github" label="See on Github"/>
                </div>
            </div>
            <div className="h-96 w-full">
                <CardDemo />
            </div>
        </div>
    </div>
    );
}
 
export default Home;