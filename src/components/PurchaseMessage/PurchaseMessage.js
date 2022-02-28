import './PurchaseMessage.css';

const PurchaseMessage = ( { purchaseId } ) => {
    return(
        <div className="alert alert-success purchaseMessage" role="alert">
            Thanks for your order. It will be on its way in 1-2 business days. Don't lose your purchase ID: {purchaseId}
        </div>
    )
}

export default PurchaseMessage;