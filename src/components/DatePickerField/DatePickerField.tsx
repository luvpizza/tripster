import React, { FC } from "react";
import DatePicker from "react-datepicker";

import s from "./DatePickerField.module.scss"

interface DatePickerFieldProps {
    name: any,
    value: any,
    onChange: any,
    selectsStart?: boolean,
    selectsEnd?: boolean,
    startDate?: any,
    endDate?: any,
    minDate?: any,
}

export const DatePickerField: FC<DatePickerFieldProps> = ({ name, value, onChange, selectsStart, selectsEnd, startDate, endDate, minDate }) => {
    return (
        <DatePicker
            calendarClassName={s.datepicker__calendar}
            className={s.datepicker}
            selectsStart={selectsStart}
            selectsEnd={selectsEnd}
            startDate={startDate}
            endDate={endDate}
            dateFormat={"MMMM dd, yyyy"}
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
};