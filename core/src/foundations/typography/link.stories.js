export default {
  title: "Components/Typography/Link",
  decorators: [(storyFn) => `<div>${storyFn()}</div>`],
};

export const Medium = () => `
<a href="" class="fudis-link fudis-link__size__md">
I am a medium sized link
</a>
`;

export const Large = () => `
<a href="" class="fudis-link fudis-link__size__lg">
I am a large sized link
</a>
`;

export const Test = () => `
<a href="" class="fudis-link fudis-link__size__md">
I am a medium sized link
</a>
<a href="" class="fudis-link fudis-link__size__lg">
I am a large sized link
</a>
`;
