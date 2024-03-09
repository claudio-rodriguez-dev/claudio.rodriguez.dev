

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="sticky bottom-0 inset-x-0 pb-3">
            <h2 className="text-center">&copy; Copyright {year}, claudio.rodriguez.dev All Rights Reserved</h2>
        </footer>
    )
}