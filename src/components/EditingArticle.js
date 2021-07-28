import React from 'react';
import { useForm } from 'react-hook-form'

const EditingArticle = ({setEditing, currentArticle, updateArticle}) => {
    
    const {register, errors, handleSubmit} = useForm({
        defaultValues: currentArticle
    });

    const submitNewArticle = (data, e) => {
        
        updateArticle(data.id, data)
        e.target.reset()
    }
    
    return ( 
        <div className="editing-container">
            <form id="formArticle" className="form-container" onSubmit={handleSubmit(submitNewArticle)}>
                <div className="name-container">
                    <label> <strong>Article Name</strong> </label>
                    <input 
                        type="text" 
                        id="nameInput" 
                        name="nameArticle" 
                        placeholder="Article Name"
                        {...register('nameArticle', { required: true }, {message: 'Campo obligatorio'})}
                    />
                </div>
                <div className="price-container">
                    <label> <strong>Price</strong> </label>
                    <input 
                        type="text" 
                        id="priceInput" 
                        name="priceArticle" 
                        placeholder="Price"
                        {...register('priceArticle', {required: true})}                  
                    />
                </div>
                <div className="cost-container">
                    <label> <strong>Cost</strong> </label>
                    <input 
                        type="text" 
                        id="costInput" 
                        name="costArticle" 
                        placeholder="Cost"
                        {...register('costArticle', {required: true})}
                    />
                </div>
                <div className="code-container">
                    <label> <strong>Code</strong> </label>
                    <input 
                        type="text" 
                        id="codeInput" 
                        name="codeArticle" 
                        placeholder="Code"
                        {...register('codeArticle', {required: true})}
                    />
                </div>
                <div className="editBtn-container">
                    <button onClick={() => setEditing(false)} className="btnCloseEdit">Close</button>
                    <button className="btnAddArticle">Edit</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditingArticle;