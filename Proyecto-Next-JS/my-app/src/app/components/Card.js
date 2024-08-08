"use client"
export default function Card({title, teacher, onClick, children, className, titleClassName, footerClassName}) {
    return (
        <div className={className}>
            <div className={titleClassName}>
                <h2>{title}</h2>
                <p onClick={onClick}>{teacher}</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className={footerClassName}>
                {children}
            </div>  

            
        </div>
    )
}