import {useState} from 'react';

const DatePicker = () => {
    const CUR_YEAR = new Date().getFullYear();
    const CUR_MONTH = new Date().getMonth() + 1;
    const [year, setYear] = useState(CUR_YEAR);
    const [month, setMonth] = useState(CUR_MONTH);
    const yearRange = Array.from({ length: 21 }, (_, i) => CUR_YEAR - 5 + i);
    const monthsRange = [
        { value: 1, label: "January" },
        { value: 2, label: "February" },
        { value: 3, label: "March" },
        { value: 4, label: "April" },
        { value: 5, label: "May" },
        { value: 6, label: "June" },
        { value: 7, label: "July" },
        { value: 8, label: "August" },
        { value: 9, label: "September" },
        { value: 10, label: "October" },
        { value: 11, label: "November" },
        { value: 12, label: "December" }
      ];

    const Calendar = ({year, month}) => {
        const firstDay = new Date(year, month - 1, 1).getDay();
        const totalDays = new Date(year, month, 0).getDate();
        const daysArray = Array(firstDay).fill(null).concat([...Array(totalDays)].map((_, i) => i + 1));
        const weeksArray = [];
        for (let i = 0; i < daysArray.length; i += 7) {
            weeksArray.push(daysArray.slice(i, i + 7));
        }

        const handleClick = (day) => {
            console.log(`Day : ${day} Month : ${month} Year : ${year}`)
        }

        return (
            <table className="text-center">
                <thead>
                    <tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>
                </thead>
                <tbody>
                    {weeksArray.map((week, weekIndex) => 
                        <tr key={weekIndex}>
                            {week.map((day, daysIndex) =>
                            <td className="w-12 hover:bg-white/25 cursor-pointer" onClick={() => handleClick(day)} key={daysIndex}>{day}</td>
                        )}
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    return ( 
        <div className="datepicker">
            <div className="flex space-x-1 mb-2">
                <label>Year :</label>
                <select value={year} onChange={(e) => setYear(e.target.value)}>
                    {yearRange.map((value) => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>

                <label>Months :</label>
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    {monthsRange.map((month) => 
                        <option key={month.value} value={month.value}>{month.label}</option>
                    )}
                </select>
            </div>
            <Calendar year={year} month={month}/>
        </div>
     );
}
 
export default DatePicker;