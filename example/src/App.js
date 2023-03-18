import React from 'react'

import { Button } from 'library'
import 'library/dist/index.css'

const App = () => {
  return <Button onCli={()=>{console.log('butona basildi')}} style={{background:'aqua',borderRadius:'2px solid red'}} text={"NPM kutuphanesi yaziyorum"}/> // burada girilen propların kütüphanede kullanılan html etiketine dahil propertyler olması gerekli 
  // böyle bir gereklilik şundan dolayı ortaya çıkar: kütüphane içerisinde propertyler etikete {...props} bu şekilde geçiliyor. eğer burda girilen prop etiketin propertylerinden değilse şu şekilde hata döndürür:
  // Unknown event handler property `onCli`. It will be ignored.
}

export default App
