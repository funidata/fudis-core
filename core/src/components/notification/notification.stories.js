export default {
  title: "Components/Notification (WIP)",
};

// TODO: Add respective visual indicators after icons are available

export const Danger = () => `
  <article class="fudis-notification fudis-notification__danger">
    <p class="fudis-visually-hidden">Attention</p>
    <div class="fudis-notification__content">
      <p class="fudis-body-text fudis-body-text__md-regular">Danger</p>
    </div>
  </article>
`;

export const Info = () => `
  <article class="fudis-notification fudis-notification__info">
    <p class="fudis-visually-hidden">Attention</p>
    <div class="fudis-notification__content">
      <p class="fudis-body-text fudis-body-text__md-regular">Info</p>
    </div>
  </article>
`;

export const Success = () => `
  <article class="fudis-notification fudis-notification__success">
    <p class="fudis-visually-hidden">Attention</p>
    <div class="fudis-notification__content">
      <p class="fudis-body-text fudis-body-text__md-regular">Success</p>
    </div>
  </article>
`;

export const Warning = () => `
  <article class="fudis-notification fudis-notification__warning">
    <p class="fudis-visually-hidden">Attention</p>
    <div class="fudis-notification__content">
      <p class="fudis-body-text fudis-body-text__md-regular">Warning</p>
    </div>
  </article>
`;
