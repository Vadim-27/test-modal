// import SimpleLightbox from 'simplelightbox';
const basicLightbox = require('basiclightbox')
import NewApiFetches from './testApi';
const newApiFetches = new NewApiFetches();
newApiFetches
  .fetchDetailsMovie(76600)
  .then(data => {
    console.log('Details ', data);
  })
  .catch(error => console.log(error));


// export function makeMarkupModal() {
    
// }
export const instance = basicLightbox.create(
    `
	<div class="modal-film-card">
      <button type="button" class="modal-card-film-close-btn" data-modal-card-film-close>
        <svg class="modal-card-film-close-btn-icon" width="17" height="17">
          <use href="./images/symbol-arial.svg#close-btn"></use>
        </svg>
      </button>
      <div>
        <p >
          <img class="img-card-modal" src="./images/Rectangle 18.jpg" alt="">
        </p>
      </div>
      <div>
        <h2 class="name-film">Name Film ${data.original_title}/h2>
        <div class="box-film-params">
          <div>
            <ul class="list-modal">
              <li class="list-modal-items">
                <p class="list-modal-items__params">Vote / Votes
                  
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Popularity
                  
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Original Title
                  
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Genre
                  
                </p>
              </li>
          
            </ul>
          </div>
          <div>
            <ul class="list-modal">
              <li class="list-modal-items">
                <p class="list-modal-items__params">Vote / Votes
                  <span class="list-modal-items__params-value">1</span>
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Popularity
                 
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Original Title
                 
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Genre
                  
                </p>
              </li>
            
            </ul>

          </div>
        </div>
       
        
        <p class="dеscription__params">About
          <span class="items__value">1.bjjkjvkjvhvkl</span>
        </p>
        
        
        
        
        <div class="box-modal-btn">
          <button class="modal-submint-btn">add to Watched</button>
          <button class="modal-submint-btn">add to queue</button>
        </div>
        
      </div>
    </div>
`)
