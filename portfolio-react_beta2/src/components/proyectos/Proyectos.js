import React from 'react'
import armadoresweb from '../../media/armadoresweb.png'
import mazaroca from '../../media/mazaroca.png'
import marineiros from '../../media/marineiros.png'
import comuniapp from '../../media/comuniapp.png'



const Proyectos = () => {
    return (


  <div class="container">   
    <h1>Mis proyectos</h1>
    <div class="row">       
      <div class="col-md">        
          <div class="card">
            <img class="card-img-top" src={mazaroca}></img>            
            <div class="card-body">
              <h4 class="card-title">Titulo de la tarjeta 1</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, 
                                    tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue
                                    nec tortor sit amet, maximus mattis dui. </p>
              <a href="#" class="btn btn-primary">Entrar</a>
            </div>
          </div>          
      </div>

      <div class="col-md">        
          <div class="card">
          <img class="card-img-top" src={armadoresweb}></img>            

            <div class="card-body">
              <h4 class="card-title">Titulo de la tarjeta 2</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, 
                                    tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue
                                    nec tortor sit amet, maximus mattis dui. </p>
              <a href="#" class="btn btn-primary">Entrar</a>
            </div>
          </div>          
      </div>

      <div class="col-md">        
          <div class="card">
          <img class="card-img-top" src={marineiros}></img>            

            <div class="card-body">
              <h4 class="card-title">Titulo de la tarjeta 2</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, 
                                    tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue
                                    nec tortor sit amet, maximus mattis dui. </p>
              <a href="#" class="btn btn-primary">Entrar</a>
            </div>
          </div>          
      </div>

      <div class="col-md">        
          <div class="card">
          <img class="card-img-top" src={comuniapp}></img>            

            <div class="card-body">
              <h4 class="card-title">Titulo de la tarjeta 2</h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, 
                                    tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue
                                    nec tortor sit amet, maximus mattis dui. </p>
              <a href="#" class="btn btn-primary">Entrar</a>
            </div>
          </div>          
      </div>
      
    </div>
  </div>


    )
}

export default Proyectos
