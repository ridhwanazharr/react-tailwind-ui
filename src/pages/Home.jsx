import CardDemo from "../components/CardDemo";
import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";

const Home = () => {
    return ( 
    <div>
        <div className="max-w-3/4 mx-auto my-12">
            <Heading size="4xl" variant="drop-shadow-lg">Glassmorphic UI Components. open source</Heading>
            </div>
            <div className="max-w-3/4 grid grid-cols-2 max-sm:grid-cols-1 gap-4 mx-auto">
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
        <div className="max-w-3/4 h-96 mx-auto">
            <Card>
                <Input label="Name" type="text" placeholder="your name.." icon="fa-regular fa-user" />
                <Input label="Date" type="date"  icon="fa-regular fa-calendar-days" />
            </Card>
        </div>
    </div>
    );
}
 
export default Home;