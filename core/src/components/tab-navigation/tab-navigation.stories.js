import { createElement } from "react";

export default {
  title: "Components/Tab Navigation",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    scrollView: {
      name: "ScrollView",
      control: { type: "boolean" },
    },
  },
};

function createNavButtons(scrollView) {
  if (!scrollView) return null;

  const classes = "fudis-tab-navigation-bar__button-container";
  const buttonClasses = "fudis-tab-navigation-bar__button-container__button";

  const makeButtonContainer = (side, iconRotate = "") => {
    const container = document.createElement("div");
    container.className = `${classes} ${classes}--${side}`;

    const button = document.createElement("button");
    button.className = `${buttonClasses} ${buttonClasses}--${side}`;
    button.ariaHidden = "true";
    button.tabIndex = "-1";

    const icon = document.createElement("span");
    icon.className = `${buttonClasses}__icon fudis-icon fudis-icon__lg fudis-icon__chevron-ring-fill ${iconRotate}`;
    button.appendChild(icon);

    container.appendChild(button);
    return container;
  };

  const leftButtonContainer = makeButtonContainer(
    "left",
    "fudis-icon__rotate__flip-180",
  );
  const rightButtonContainer = makeButtonContainer("right");

  return { leftButtonContainer, rightButtonContainer };
}

const Template = ({ variant, scrollView }) => {
  const navBar = document.createElement("div");
  navBar.className = "fudis-tab-navigation-bar";
  navBar.setAttribute("role", "tablist");

  const navButtons = createNavButtons(scrollView);

  const wrapper = document.createElement("div");
  wrapper.className = `fudis-tab-navigation-bar__wrapper fudis-tab-navigation-bar__wrapper--${variant}`;

  const tabContainer = document.createElement("div");
  tabContainer.className = `fudis-tab-navigation-bar__wrapper__tab-container fudis-tab-navigation-bar__wrapper__tab-container--${variant}`;

  const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

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

  const tabContent = navButtons
    ? [navButtons.leftButtonContainer, wrapper, navButtons.rightButtonContainer]
    : [wrapper];

  tabContent.forEach((element) => navBar.appendChild(element));

  const panel = document.createElement("div");
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("id", "fudis-panel-1");
  panel.setAttribute("aria-labelledby", "fudis-tab-1");
  panel.style.marginTop = "1rem";

  const panelContent = document.createElement("p");
  panelContent.className =
    "fudis-body-text fudis-body-text__left fudis-body-text__md-regular fudis-body-text__default";
  panelContent.textContent = "Tab content";

  panel.appendChild(panelContent);

  const container = document.createElement("div");
  container.appendChild(navBar);
  container.appendChild(panel);

  return container;
};

export const Example = Template.bind({});
Example.args = {
  variant: "primary",
  scrollView: false,
};

export const PwAll = () => {
  const variants = ["primary", "secondary"];
  const scrollViews = [false, true];

  const tabWrapper = document.createElement("div");

  variants.forEach((variant) => {
    scrollViews.forEach((scrollView) => {
      const navTabElement = Template({
        variant,
        scrollView,
      });
      tabWrapper.appendChild(navTabElement);
    });
  });
  return tabWrapper;
};
