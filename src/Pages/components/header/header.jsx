import React from 'react';
import './header.css';
import Link from '@material-ui/core/Link'

function Header()
{
    return (<div className ="header">
        <Link href='/compara'>
            <h1> ULA LA </h1>
        </Link>
        </div>
    );
}

export default Header;