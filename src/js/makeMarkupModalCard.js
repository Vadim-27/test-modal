// import SimpleLightbox from 'simplelightbox';
const basicLightbox = require('basiclightbox')
import 'basiclightbox/dist/basicLightbox.min.css';
import NewApiFetches from './testApi';
const newApiFetches = new NewApiFetches();

  
    const render = ({ original_title, poster_path, vote_average, vote_count, popularity, genres, overview }) => {
  return `
<div class="modal-film-card">
    <button type="button" class="modal-card-film-close-btn" data-modal-card-film-close>
      <svg class="modal-card-film-close-btn-icon" width="17" height="17">
        <use href="./images/symbol-arial.svg#close-btn"></use>
      </svg>
    </button>
    <div>
      <p >
        <img class="img-card-modal" src="${poster_path}" alt="">
      </p>
    </div>
    <div>
      <h2 class="name-film">${original_title}</h2>
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
              <p class="list-modal-items__params">${vote_average} / ${vote_count}
                <span class="list-modal-items__params-value"></span>
              </p>
            </li>
            <li class="list-modal-items">
              <p class="list-modal-items__params">${popularity}
               
              </p>
            </li>
            <li class="list-modal-items">
              <p class="list-modal-items__params">${original_title}
               
              </p>
            </li>
            <li class="list-modal-items">
              <p class="list-modal-items__params">${genres}
                
              </p>
            </li>
          
          </ul>

        </div>
      </div>
     
      
      <p class="dÐµscription__params">About
        <span class="items__value">${overview}</span>
      </p>
      
      
      
      
      <div class="box-modal-btn">
        <button class="modal-submint-btn">add to Watched</button>
        <button class="modal-submint-btn">add to queue</button>
      </div>
      
    </div>
  </div>
`;
};
const renfetch = () => {
  newApiFetches
    .fetchDetailsMovie(76600)
    .then(data => {
      console.log('Details ', data);
      const instance = basicLightbox.create(render(data));
      instance.show();
    })
    .catch(error => console.log(error));
};

const refs = {
  cardFilm: document.querySelector('.modal-btn'),
//   closeBtnCard: instance.element().querySelector('.modal-card-film-close-btn'),
};

refs.cardFilm.addEventListener('click', renfetch);
// refs.closeBtnCard.addEventListener('click', instance.close);

