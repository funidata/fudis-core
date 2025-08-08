export default {
  title: "Components/Tab Navigation (WIP)",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

// TODO: Add content scroll indicators (if they are considered necessary) after icons are available.
// Also we should think how interactive examples have to be, e.g. now Storybook user can't navigate betweem tabs

const Template = ({ variant }) => {
const navBar = document.createElement("div");
  navBar.className = "fudis-tab-navigation-bar";
  navBar.setAttribute("role", "tablist");

  const wrapper = document.createElement("div");
  wrapper.className = `fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--${variant}`;

  const tabContainer = document.createElement("div");
  tabContainer.className = `fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--${variant}`;

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  tabs.forEach((label, index) => {
    const button = document.createElement("button");
    button.setAttribute("role", "tab");
    button.setAttribute("tabindex", index === 0 ? "0" : "-1");
    button.className = `fudis-tab-navigation-tab fudis-tab-navigation-tab--${variant}`;
    button.textContent = label;

    if (index === 0) {
      button.setAttribute("aria-controls", "fudis-panel-1");
      button.setAttribute("id", "fudis-tab-1");
      button.setAttribute("aria-selected", "true");
      button.classList.add(`fudis-tab-navigation-tab--${variant}--active`);
    }

    tabContainer.appendChild(button);
  });

  wrapper.appendChild(tabContainer);
  navBar.appendChild(wrapper);

  const panel = document.createElement("div");
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("id", "fudis-panel-1");
  panel.setAttribute("aria-labelledby", "fudis-tab-1");
  panel.style.marginTop = "1rem";

  const panelContent = document.createElement("p");
  panelContent.className = "fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default";
  panelContent.textContent = "Tab content";

  panel.appendChild(panelContent);

  const container = document.createElement("div");
  container.appendChild(navBar);
  container.appendChild(panel);

  return container;
};

export const TabNavigation = Template.bind({});
TabNavigation.args = {
  variant: "primary"
};

export const PwAll = () => {
  const variants = ["primary", "secondary"];

  const tabWrapper = document.createElement("div");

  variants.forEach((variant) => {
    const navTabElement = Template({
      variant,
    });
    tabWrapper.appendChild(navTabElement);
  });
  return tabWrapper;
};