import {
  scheduleAnimations,
  applyAnimationsWhenThePageLoads,
} from './events/applyAnimations.mjs';
import defineImagesSizes from './events/defineImagesSizes.mjs';
import toggleShowHamburguerMenu from './events/toggleShowHamburguerMenu.mjs';

defineImagesSizes();

function callbackFunctionForLoadedPage() {
  setTimeout(applyAnimationsWhenThePageLoads, 75);
  defineImagesSizes();
}

function callbackFunctionForResizing() {
  scheduleAnimations();
  defineImagesSizes();
}

window.addEventListener('load', callbackFunctionForLoadedPage);

window.addEventListener('resize', callbackFunctionForResizing);
