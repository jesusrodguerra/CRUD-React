import React from 'react';

const Articles = ({arrayArticle, deleteArticle, editArticle}) => {

    return ( 
        <div className="articles-container">
            <h2>Articles</h2>
            <hr/>
            <div className="articles-content">
                {arrayArticle.length === 0 ? 'No hay articulos agregados' : 
                
                    arrayArticle.map(el => {
                        const {nameArticle, priceArticle, costArticle, id} = el
                        return (
                            <div key={el.codeArticle} className="articles">
                                <h3> {nameArticle} </h3>
                                <hr/>
                                <p> <strong>Price: </strong> ${priceArticle} </p>
                                <p> <strong>Cost: </strong> ${costArticle} </p>
                                <div className="articles-buttons">
                                    <button className="btnDelete" onClick={() => {deleteArticle(id)}}>x</button>
                                    <button className="btnEdit" onClick={() => {editArticle(el)}}>Edit</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Articles;