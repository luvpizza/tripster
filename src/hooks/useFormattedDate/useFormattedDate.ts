import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(customParseFormat);

const useFormattedDate: Function = (utcDateStr: string) => {
    const [formattedDate,
        setFormattedDate] = useState('');
    useEffect(() => {
        const parsedDate = dayjs.utc(utcDateStr);
        const formattedDateStr = parsedDate.format('MMMM D');
        setFormattedDate(formattedDateStr);
    }, [utcDateStr]);

    return formattedDate;
};

export default useFormattedDate;