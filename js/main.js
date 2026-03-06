import { renderThumbnails } from './thumbnails.js';
import { savePhotos } from './show-big-photo/photo-state.js';
import './upload-new-photo/loading-module.js';
import { getPhotos } from './utils/api.js';
import { errorLoadPhotos } from './upload-new-photo/error-load-photos.js';
import { handleSelectFilters } from './filters/filters.js';
import {showToast} from "./toast";

getPhotos()
  .then(({response, data}) => {
    if (response.status !== 200){
      showToast();
    }
    savePhotos(data);
    renderThumbnails(data);
    handleSelectFilters(data);
  })
  .catch(errorLoadPhotos);
