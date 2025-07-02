import './../style/Sass.scss'

export default function Section({ children }) {
    return (
        <>
            <section className="content">
                {children}
            </section>
        </>
    )
}