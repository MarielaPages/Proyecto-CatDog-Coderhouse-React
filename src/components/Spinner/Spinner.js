import './Spinner.css';

const Spinner = () => {
    return(
        <div className="spinner-border text-secondary spinner" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;