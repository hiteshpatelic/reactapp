import logo from "../../../../../assets/images/logo/logo.png"
import './logo.css'

export const Logo = ()=>{
    return(
        <div className="logo">
            <h5 className="blue mb-0"> <img src={logo} alt="Logo" />ShopHere</h5>
            <h6 className="mb-0">Hide</h6>
        </div>
    )
}