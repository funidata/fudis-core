export default {
    title: "Components/Typography/BodyText",
    decorators: [
        (storyFn) =>
            `<div>${storyFn()}</div>`,
    ],
};

export const LargeRegular = () => `
<p class="fudis-body-text fudis-body-text__lg-regular">
Large regular text
</p>
`;

export const LargeLight = () => `
<p class="fudis-body-text fudis-body-text__lg-light">
Large light text
</p>
`;

export const MediumRegular = () => `
<p class="fudis-body-text fudis-body-text__md-regular">
Medium regular text
</p>
`;

export const MediumLight = () => `
<p class="fudis-body-text fudis-body-text__md-light">
Medium light text
</p>
`;

export const SmallRegular = () => `
<p class="fudis-body-text fudis-body-text__sm-regular">
Small regular text
</p>
`;

export const Aligned = () => `
<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__left">
Medium regular text aligned left
</p>

<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__center">
Medium regular text aligned center
</p>

<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__right">
Medium regular text aligned right
</p>
`;

export const Test = () => `
<p class="fudis-body-text fudis-body-text__lg-regular">
Large regular text
</p>
<p class="fudis-body-text fudis-body-text__lg-light">
Large light text
</p>
<p class="fudis-body-text fudis-body-text__md-regular">
Medium regular text
</p>
<p class="fudis-body-text fudis-body-text__md-light">
Medium light text
</p>
<p class="fudis-body-text fudis-body-text__sm-regular">
Small regular text
</p>
<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__left">
Medium regular text aligned left
</p>
<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__center">
Medium regular text aligned center
</p>
<p class="fudis-body-text fudis-body-text__md-regular fudis-body-text__right">
Medium regular text aligned right
</p>
`;
