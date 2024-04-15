import {renderThumbnails} from './thumbnails.js';
import {savePhotos} from './show-big-photo/photo-state.js';
import './upload-new-photo/loading-module.js';
import {getPhotos} from './utils/api.js';
import {handleSelectFilters} from './filters/filters.js';
import data from './data.json';

getPhotos()
  .then((photos) => {
    processData(photos);
  })
  .catch(() => {
    processData(data);
  });

function processData(data) {
  savePhotos(data);
  renderThumbnails(data);
  handleSelectFilters(data);
}
