export default {
  title: "Components/Expandable (WIP)",
};

// TODO: Add expanded/collapsed visual indicators after icons are available
// Also, should closing and opening be enabled in one story?

export const RegularClose = () => `
  <section class="fudis-expandable fudis-expandable__regular fudis-expandable--closed">
    <div class="fudis-expandable__header fudis-expandable__header__regular">
      <div role="heading" aria-level="2" class="fudis-expandable__header__heading">
        <button class="fudis-expandable__header__heading__button fudis-expandable__header__heading__button__regular" aria-expanded="false">
          <span class="fudis-expandable__header__heading__button__title">
            <span class="fudis-expandable__header__heading__button__title__text">
              Regular expandable
            </span>
            <span class="fudis-expandable__header__heading__button__title__sub-heading">
              Additional expandable sub heading
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
`;

export const RegularOpen = () => `
  <section class="fudis-expandable fudis-expandable__regular">
    <div class="fudis-expandable__header fudis-expandable__header__regular">
      <div role="heading" aria-level="2" class="fudis-expandable__header__heading">
        <button class="fudis-expandable__header__heading__button fudis-expandable__header__heading__button__regular" aria-expanded="false">
          <span class="fudis-expandable__header__heading__button__title">
            <span class="fudis-expandable__header__heading__button__title__text">
              Regular expandable
            </span>
            <span class="fudis-expandable__header__heading__button__title__sub-heading">
              Additional expandable sub heading
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="fudis-expandable__content fudis-expandable__content__padding-default">
      <p class="fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default">
        Regular expandable content
      </p>
    </div>
  </section>
`;

export const LiteClose = () => `
  <section class="fudis-expandable fudis-expandable__lite fudis-expandable--closed" aria-labelledby="fudis-expandable-heading-id">
    <div class="fudis-expandable__header fudis-expandable__header__lite">
      <div id="fudis-expandable-heading-id" role="heading" aria-level="2" class="fudis-expandable__header__heading">
        <button class="fudis-expandable__header__heading__button fudis-expandable__header__heading__button__lite" aria-expanded="false">
          <span class="fudis-expandable__header__heading__button__title">
            <span class="fudis-expandable__header__heading__button__title__text">
              Lite expandable
            </span>
          </span>
        </button>
      </div>
    </div>
  </section>
`;

export const LiteOpen = () => `
  <section class="fudis-expandable fudis-expandable__lite fudis-expandable" aria-labelledby="fudis-expandable-heading-id">
    <div class="fudis-expandable__header fudis-expandable__header__lite">
      <div id="fudis-expandable-heading-id" role="heading" aria-level="2" class="fudis-expandable__header__heading">
        <button class="fudis-expandable__header__heading__button fudis-expandable__header__heading__button__lite" aria-expanded="false">
          <span class="fudis-expandable__header__heading__button__title">
            <span class="fudis-expandable__header__heading__button__title__text">
              Lite expandable
            </span>
          </span>
        </button>
      </div>
    </div>
    <div class="fudis-expandable__content fudis-expandable__content__padding-small">
      <p class="fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default">
        Regular expandable content
      </p>
    </div>
  </section>
`;
