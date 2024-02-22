const Dialog = ({ header, children, footer }) => {

     return(
        <>
        <div className="dialog">
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
        </>
     )

}

export default Dialog;