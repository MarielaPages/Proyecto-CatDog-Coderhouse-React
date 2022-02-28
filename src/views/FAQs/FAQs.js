import './FAQs.css'

const FAQs = () => {
    return(
        <div>
            <header className="d-flex justify-content-center">
            <div className="text-center" id="headerFaq">
                <h1>FAQs</h1>
            </div>
            </header>
            <section id="faqs">
                <div className="accordion w-75 mx-auto mb-4" id="accordionExample">
                    <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is this page only for animals?
                            </button>
                        </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Yes!</strong> This page was created exclusively for cats and dogs. All toys, trees, houses and clothes are made for them.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I buy here?
                        </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Just click on the picture.</strong> You only need to look for your perfect item in the Cat or Dog section and click on the picture.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I buy more than one item in the same purchase?
                        </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>Absolutely!</strong> You can click on all the items you like and they will accumulate in a cart. Then you can visit your cart, make a decision and buy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}

export default FAQs;