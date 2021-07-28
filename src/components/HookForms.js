import React from 'react';
import { useForm } from 'react-hook-form'

const HookForms = ({btnMenu, setBtnMenu, newArticle}) => {

    const {register, errors, handleSubmit} = useForm();

    const submitForm = (data, e) => {

        newArticle(data)
        setBtnMenu(false)
        e.target.reset()
    }

    return ( 
            <div className={ btnMenu === true ? 'showMenu' : 'form-inputs' }>
                <form id="formArticle" onSubmit={handleSubmit(submitForm)} className="form-container">
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
                    <button className="btnAddArticle">Add</button>
                </form>
            </div>
     );
}
 
export default HookForms;