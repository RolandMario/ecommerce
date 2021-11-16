import '../productmenuStyles/ProductBanner1.css';


const ProductBanner1 = () => {
    return ( 
        <>
        <div className="banner1Container">
            <div className="shoes-banner1">
                <div className="banner1-left">
                
                    <h1>Trainers Rebounce</h1>
                   
                    <h3>Both for Males <br/> And Females</h3>
                    <div className="banner1-cta">
                        <button>$23.59</button>
                    </div>

                </div>
                <div className="banner1-right">
                    {/* <img src={Trainer} alt="shoe"/> */}
                </div>

            </div>
        </div>
        </>
     );
}
 
export default ProductBanner1;