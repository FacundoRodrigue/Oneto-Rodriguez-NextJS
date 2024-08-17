"use client"
// components/Checkbox.js
export default function Checkbox({ id, checked, onChange }) {
    return (
      <input 
        type="checkbox" 
        id={id} 
        checked={checked} 
        onChange={onChange} 
      />
    );
  }