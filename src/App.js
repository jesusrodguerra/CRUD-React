import React, { useState } from 'react';
import Topnav from './components/Topnav.js'
import Articles from './components/Articles.js'
import HookForms from './components/HookForms.js';
import EditingArticle from './components/EditingArticle.js';

function App() {

  const objectArticle = [{
    id: '',
    nameArticle: 'Body encaje',
    priceArticle: '54000',
    costArticle: '31000',
    codeArticle: 'EBN1'
  }]
  const [btnMenu, setBtnMenu] = useState(false)
  const [arrayArticle, setArrayArticle] = useState(objectArticle);

  // Add new Article
  const newArticle = (article) => {

    article.id = Date.now() + 1
    setArrayArticle([
      ...arrayArticle,
      article
    ])
  }

  // Delete article by id
  const deleteArticle = (id) => {
    console.log(id)

    setArrayArticle(arrayArticle.filter(article => article.id !== id))
    
  }

  // Edit article
  const [editing, setEditing] = useState(false)

  const [currentArticle, setCurrentArticle] = useState({
    id: null, articleName: '', priceArticle: '', costArticle: '', codeArticle: ''
  })

  const editArticle = (article) => {

    setEditing(true)

    setCurrentArticle({
      id: article.id,
      nameArticle: article.nameArticle,
      priceArticle: article.priceArticle,
      costArticle: article.costArticle,
      codeArticle: article.codeArticle
    })
  }

  const updateArticle = (id, updateArticle) => {
    setEditing(false)

    setArrayArticle(arrayArticle.map( article => article.id === id ? updateArticle : article))
  }

  return (
    <div className="App">
      <Topnav btnMenu={btnMenu} setBtnMenu={setBtnMenu} editing={editing} />
      <HookForms btnMenu={btnMenu} setBtnMenu={setBtnMenu} currentArticle={currentArticle} newArticle={newArticle}  />
      {editing === true ? <EditingArticle setEditing={setEditing} currentArticle={currentArticle} updateArticle={updateArticle} /> : null}
      <Articles arrayArticle={arrayArticle} deleteArticle={deleteArticle} editArticle={editArticle} />
    </div>
  )
}

export default App;
