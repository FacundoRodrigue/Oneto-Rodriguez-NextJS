"use client"

export default function Checkbox({ id, type, name, text, forInput }) {
    return (
        <div >
          <input type={type} id={id} name={name} />
          <label for={forInput}>{text}</label>
        </div>
    );
}
