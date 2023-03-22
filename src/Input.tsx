import React from 'react';
import s from "./Max&&Min.module.css";



type InputType = {
    value: number
    onChange: (e: number) => void
    startValue:number
    MaxValue:number

}

export const Input = (props: InputType) => {


    return (
        <>
            <input   value={props.value.toString().replace(/^0|[^\d]/g, '0')} onChange={(e) =>{

                props.onChange(+e.target.value)}}
                    type='number'  className={props.startValue >= props.MaxValue || props.startValue < 0 ? s.error : '' }
            />
        </>
    );
};

