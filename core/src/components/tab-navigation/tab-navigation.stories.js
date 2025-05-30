export default {
  title: "Components/Tab Navigation (WIP)",
};

// TODO: Add content scroll indicators (if they are considered necessary) after icons are available.
// Also we should think how interactive examples have to be, e.g. now Storybook user can't navigate betweem tabs 

export const Primary = () => `
  <div class="fudis-tab-navigation-bar">
    <div class="fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--primary">
      <div class="fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--primary">
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary fudis-tab-navigation-tab--primary--active">Tab 1</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary">Tab 2</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--primary">Tab 3</button>
      </div>
    </div>
  </div>
`;

export const Secondary = () => `
  <div class="fudis-tab-navigation-bar">
    <div class="fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--secondary">
      <div class="fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--secondary">
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary fudis-tab-navigation-tab--secondary--active">Tab 1</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary">Tab 2</button>
        <button role="tab" class="fudis-tab-navigation-tab fudis-tab-navigation-tab--secondary">Tab 3</button>
      </div>
    </div>
  </div>
`;
