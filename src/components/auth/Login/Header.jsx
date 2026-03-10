import React , {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Header()
{
    const [ isMenuOpen , setMenuOpen ] = useState(false);

    return(
        <div className = "header">
            <div className = "header__logo">
                <h1>Logo</h1>
            </div>
            <div className = "header__menu">
                < button
                    onClick = { () => setMenuOpen(!isMenuOpen) }
                >Menu ▼</button>
            </div>
        </div>
    )
}
