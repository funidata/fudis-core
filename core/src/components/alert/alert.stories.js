export default {
  title: "Components/Alert",
};

// TODO: Finish close buttons after icons are available

export const Danger = () => `
  <div class="fudis-alert fudis-alert__danger">
    <p class="fudis-body-text fudis-body-text__center fudis-body-text__lg-regular fudis-alert__text">Danger</p>
    <button class="fudis-alert__close fudis-alert__close__danger" aria-label="Danger, close"></button>
  </div>
`;

export const Info = () => `
  <div class="fudis-alert fudis-alert__info">
    <p class="fudis-body-text fudis-body-text__center fudis-body-text__lg-regular fudis-alert__text">Info</p>
    <button class="fudis-alert__close fudis-alert__close__info" aria-label="Info, close"></button>
  </div>
`;

export const Success = () => `
  <div class="fudis-alert fudis-alert__success">
    <p class="fudis-body-text fudis-body-text__center fudis-body-text__lg-regular fudis-alert__text">Success</p>
    <button class="fudis-alert__close fudis-alert__close__success" aria-label="Success, close"></button>
  </div>
`;

export const Warning = () => `
  <div class="fudis-alert fudis-alert__warning">
    <p class="fudis-body-text fudis-body-text__center fudis-body-text__lg-regular fudis-alert__text">Warning</p>
    <button class="fudis-alert__close fudis-alert__close__warning" aria-label="Warning, close"></button>
  </div>
`;
