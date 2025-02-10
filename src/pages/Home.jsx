import CardDemo from "../components/CardDemo";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";

const Home = () => {

    return ( 
    <div>
        <div className="max-w-3/4 mx-auto my-12">
            <Heading size="4xl" variant="drop-shadow-lg">Glassmorphic UI Components. open source</Heading>
            </div>
            <div className="max-w-9/10 lg:max-w-3/4 grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto">
            <div className="flex-col space-y-4">
                <Heading size="3xl" variant="drop-shadow-lg">Sleek, Modern, UI kits</Heading>
                <Heading size="lg" variant="drop-shadow-lg">components made in react, but also usable class</Heading>
                <div className="flex items-center justify-center">
                <Button link="https://github.com/ridhwanazharr/react-tailwind-ui" size="sm" variant="warning" icon="fa-brands fa-github" label="See on Github"/>
                </div>
            </div>
            <div className="h-96 w-full">
                <CardDemo />
            </div>
        </div>
        <Heading size="3xl" variant="drop-shadow-lg text-center my-10">Examples</Heading>
        <div className="px-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-24 gap-2">
            <div>
                <Card style="w-72">
                    <Input label="Name" type="text" placeholder="your name.." icon="fa-regular fa-user" />
                    <Input label="Date" type="date"  icon="fa-regular fa-calendar-days" />
                </Card>
            </div>
            <div>
                <Calendar />
            </div>
            <div>
                <TodoList />
            </div>
        </div>
    </div>
    );
}
 
export default Home;