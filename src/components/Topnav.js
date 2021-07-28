import React from 'react';

function Topnav({btnMenu, setBtnMenu, editing}) {

    const showMenu = () => {
        setBtnMenu(true)
    }

    const handleClose = () => {
        setBtnMenu(false)
    }

    return (
        <div className="top-nav">
            <div className="container-nav">
                {btnMenu === true ? <h3>Add New Article</h3> : btnMenu === false && editing === true ? <h3>Edit Article</h3> : <h3>Musas Inventory</h3>}
                <button onClick={ showMenu } className={btnMenu === true ? 'hideBtn' : 'btnAdd'}>Menu</button>
                <button className={ btnMenu === false ? 'btnClose-hide' : 'btnAdd' } onClick={ handleClose }>Cerrar</button>
            </div>
        </div>
    )
}

export default Topnav;