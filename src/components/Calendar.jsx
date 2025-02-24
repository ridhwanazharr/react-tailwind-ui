import {useState} from 'react';

const DatePicker = () => {
    const [curDate, setCurDate] = useState(new Date());
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const dateIncrement = (increment) => {
        setCurDate(prevDate => {
            let newDate = new Date(prevDate.getTime());

            if (increment === '+') {
                newDate.setMonth(newDate.getMonth() + 1);
            } else if (increment === '-') {
                newDate.setMonth(newDate.getMonth() - 1);
            }

            setYear(newDate.getFullYear());
            setMonth(newDate.getMonth() + 1);
            return newDate;
        });
    }

    const Calendar = ({year, month, curDay}) => {
        const firstDay = new Date(year,month -1, 1).getDay();
        const totalDays = new Date(year,month, 0).getDate();
        const daysArray = Array(firstDay).fill(null).concat(Array.from(Array(totalDays), (_, index) => index + 1));
        const weekDays = [];
        for (let i = 0; i < daysArray.length; i += 7){
            weekDays.push(daysArray.slice(i, i + 7));
        }

        const handleClick = (day) => {
            setCurDate(new Date(year, month - 1, day));
        }

        return (
        <table className="text-center my-2">
            <thead>
                <tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>
            </thead>
            <tbody>
                {weekDays.map((week, weekIndex) => 
                    <tr key={weekIndex}>
                        {week.map((day, daysIndex) =>
                        {return day != null ? 
                            <td className={`calendar-btn ${curDate == day && 'bg-white/10'}`} onClick={() => handleClick(day)} key={daysIndex}>{day}</td>
                            : 
                            <td className={`w-12`} key={daysIndex}>{day}</td>
                        }
                    )}
                    </tr>
                )}
            </tbody>
        </table>
        )
    }

    return ( 
        <div className="card w-full md:w-80">
            <div className="flex space-x-1 mb-2 border-b-1 border-white/25 py-2">
                {curDate.toLocaleDateString("en-US", {weekday: "long",month: "long",day: "numeric"})}
            </div>
            <div className="flex mb-2 justify-between align-center">
                <button className="calendar-btn" onClick={() => dateIncrement('-')}><i className="fa-solid fa-angle-left"></i></button>
                <p className="text-center my-auto">{curDate.toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
                <button className="calendar-btn" onClick={() => dateIncrement('+')}><i className="fa-solid fa-angle-right"></i></button>
            </div>
            <Calendar year={year} month={month}/>
        </div>
     );
}
 
export default DatePicker;