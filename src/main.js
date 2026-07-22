import {
  titleSlideA,
  titleSlideB,
  titleSlideC,
  titleSlideD,
  titleSlideE,
  titleSlideF
} from './components/title-slides.js';
import {
  sectionSlideA,
  sectionSlideB,
  sectionSlideC,
  sectionSlideE,
  sectionSlideEBlue,
  sectionSlideEGreen,
  sectionSlideEYellow,
  sectionSlideEOrange
} from './components/section-slides.js';
import {
  slideSidebarLeftOrange,
  slideSidebarLeftBlue,
  slideSidebarLeftPurple
} from './components/sidebar-slides.js';
import {
  slideStripeTopLeft,
  slideStripeTopRight
} from './components/stripe-slides.js';
import {
  slideStandard,
  slideTwoCols,
  slideThreeCols,
  slideFourCards
} from './components/content-slides.js';
import { mermaid, markdown, codeBlock } from './utils/helpers.js';
import { icons } from './utils/icons.js';
import { init, setBasePath, _reset, _count } from './utils/init.js';

const icesi = {
  titleSlideA,
  titleSlideB,
  titleSlideC,
  titleSlideD,
  titleSlideE,
  titleSlideF,
  sectionSlideA,
  sectionSlideB,
  sectionSlideC,
  sectionSlideE,
  sectionSlideEBlue,
  sectionSlideEGreen,
  sectionSlideEYellow,
  sectionSlideEOrange,
  slideSidebarLeftOrange,
  slideSidebarLeftBlue,
  slideSidebarLeftPurple,
  slideStripeTopLeft,
  slideStripeTopRight,
  slideStandard,
  slideTwoCols,
  slideThreeCols,
  slideFourCards,
  mermaid,
  markdown,
  codeBlock,
  icons,
  init,
  setBasePath,
  _reset,
  _count
};

if (typeof window !== 'undefined') {
  window.icesi = icesi;
}

export {
  titleSlideA,
  titleSlideB,
  titleSlideC,
  titleSlideD,
  titleSlideE,
  titleSlideF,
  sectionSlideA,
  sectionSlideB,
  sectionSlideC,
  sectionSlideE,
  sectionSlideEBlue,
  sectionSlideEGreen,
  sectionSlideEYellow,
  sectionSlideEOrange,
  slideSidebarLeftOrange,
  slideSidebarLeftBlue,
  slideSidebarLeftPurple,
  slideStripeTopLeft,
  slideStripeTopRight,
  slideStandard,
  slideTwoCols,
  slideThreeCols,
  slideFourCards,
  mermaid,
  markdown,
  codeBlock,
  icons,
  init,
  setBasePath,
  _reset,
  _count
};

export default icesi;
