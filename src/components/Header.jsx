

import { HeaderStyle } from "../styles/HeaderStyle"
import { Link } from 'react-router-dom';

const Header=()=>{


    return( 
    <HeaderStyle>
        <header>
        <div className="logo">StoreBooks</div>

        <nav>
            <div className="home"><Link to="/">Home</Link></div>
            <div className="books"><Link to="/books">Books</Link></div>

        </nav>
    </header>   
    </HeaderStyle>
    
    
    )
    }
    
    export default Header