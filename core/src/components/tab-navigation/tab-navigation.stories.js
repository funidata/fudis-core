export default {
  title: "Components/Tab Navigation (WIP)",
};

// TODO: Add content scroll indicators (if they are considered necessary) after icons are available.
// Also we should think how interactive examples have to be, e.g. now Storybook user can't navigate betweem tabs

export const Primary = () => `
  <div class="fudis-tab-navigation-bar">
    <div class="fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--primary">
      <div class="fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--primary">
        <button role="tab" aria-controls="fudis-panel-1" id="fudis-tab-1" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary fudis-tab-navigation-tab--primary--active" aria-selected="true" tabindex="0">Tab 1</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary" tabindex="-1">Tab 2</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary" tabindex="-1">Tab 3</button>
      </div>
    </div>
  </div>
  <div role="tabpanel" id="fudis-panel-1" aria-labelledby="fudis-tab-1" style="margin-top: 1rem;">
    <p class="fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default">
      Tab content
    </p>
  </div>
`;

export const Secondary = () => `
  <div class="fudis-tab-navigation-bar">
    <div class="fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--secondary">
      <div class="fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--secondary">
        <button role="tab" aria-controls="fudis-panel-1" id="fudis-tab-1" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary fudis-tab-navigation-tab--secondary--active" aria-selected="true" tabindex="0">Tab 1</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary" tabindex="-1">Tab 2</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary" tabindex="-1">Tab 3</button>
      </div>
    </div>
  </div>
  <div role="tabpanel" id="fudis-panel-1" aria-labelledby="fudis-tab-1" style="margin-top: 1rem;">
    <p class="fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default">
      Tab content
    </p>
  </div>
`;
