"use client"

export default function Checkbox({ id, type, name, text, forInput, onChange }) {
    return (
        <div >
          <input type={type} id={id} name={name} onChange={onChange}/>
          <label for={forInput}>{text}</label>
        </div>
    );
}
