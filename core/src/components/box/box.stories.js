export default {
  title: "Components/Box",
  argTypes: {
    variant: {
      options: ["study-box", "study-realisation-box"],
      control: { type: "radio" },
    },
  },
};

const html = String.raw;

const Template = ({ variant }) => {
  const headingContentMap = {
    "study-box": "Design and culture (5cr)",
    "study-realisation-box":
      "Design and culture, MUO-E0001, Work placement (3cr)",
  };

  const headingContent = headingContentMap[variant];

  const textContentMap = {
    "study-box": "MUO-E0001 | Course",
    "study-realisation-box": "15.9.2025-30.9.2025",
  };

  const textContent = textContentMap[variant];

  const notificationtMap = {
    "study-box": "A newer version of the course is available.",
    "study-realisation-box": "Registration period ended on 30.6.2025 at 23.59",
  };

  const notification = notificationtMap[variant];

  const calendarIcon =
    variant === "study-realisation-box"
      ? `<span class="fudis-icon fudis-icon__lg fudis-icon__color__gray fudis-icon__calendar"></span>`
      : "";

  const studyBoxNotification =
    variant === "study-box"
      ? `<div class="fudis-study-box__notification">
          <span class="fudis-icon fudis-icon__lg fudis-icon__color__green fudis-icon__check"></span>
            Completion method 1 selected.
        </div>`
      : "";

  const action =
    variant === "study-box"
      ? `<button class="fudis-button fudis-button__tertiary">Show completion method</button>`
      : `<span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__delete"></span><p class="fudis-body-text fudis-body-text__sm-regular">Remove course implementation selection</p>`;

  const studyRealisationActionTwo =
    variant === "study-realisation-box"
      ? `<div class="fudis-study-realisation-box__notification__action">
          <label class="fudis-checkbox">
            <input class="fudis-checkbox__input" type="checkbox" value="foo" />
            <div class="fudis-checkbox__content">
              <div class="fudis-checkbox__content-wrapper">
                <span class="fudis-checkbox__content__box"></span>
              </div>
              <span class="fudis-body-text fudis-body-text__sm-regular">Select in plan</span>
            </div>
          </label>
        </div>`
      : "";

  return html`
    <article class="fudis-box fudis-${variant}">
      <div role="heading" aria-level="3" class="fudis-${variant}__heading">
        ${headingContent}
      </div>
      <div class="fudis-${variant}__content">
        ${calendarIcon} ${textContent}
      </div>
      <div class="fudis-${variant}__notification">
        <span
          class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__info-circle-fill"
        ></span
        >${notification}
      </div>
      ${studyBoxNotification}
      <div class="fudis-${variant}__notification__action">${action}</div>
      ${studyRealisationActionTwo}
    </article>
  `;
};

let defaultValues = {
  variant: "study-box",
};

export const Example = Template.bind({});
Example.args = defaultValues;
