# react-wistia-embed
react-wistia-embed is a React component library that provides a simple way to embed Wistia videos in your React applications. The library includes a WistiaEmbed component that allows you to embed videos with custom settings such as responsive sizing, padding, and fixed dimensions. The component is built with TypeScript, ensuring type safety and ease of use. With react-wistia-embed, you can easily add Wistia videos to your React applications without having to write complex embed code.

## Installation
To use react-wistia-embed in your React application, you can install it using NPM or Yarn:

## Copy code
```
npm install react-wistia-embed

# or

yarn add react-wistia-embed
```
Usage
To use the WistiaEmbed component in your React application, import it from the react-wistia-embed package:

Copy code
import WistiaEmbed from 'react-wistia-embed';

function MyComponent() {
  return <WistiaEmbed hashedId="s3lqfi0zn7" />;
}
The WistiaEmbed component takes several props that allow you to customize the embedded video:

hashedId (required): the Wistia hashed ID of the video to embed
isResponsive (optional, default true): whether to make the video responsive or use fixed dimensions
padding (optional): the padding to apply around the video (only used when isResponsive is true)
width (optional): the fixed width to apply to the video (only used when isResponsive is false)
height (optional): the fixed height to apply to the video (only used when isResponsive is false)
For example, to embed a video with fixed dimensions, you can use the following code:

Copy code
import WistiaEmbed from 'react-wistia-embed';

function MyComponent() {
  return <WistiaEmbed hashedId="s3lqfi0zn7" isResponsive={false} width={640} height={480} />;
}
Contributing
If you'd like to contribute to react-wistia-embed, feel free to open an issue or pull request on GitHub. We welcome any contributions or feedback!

License
react-wistia-embed is released under the MIT license. See LICENSE for details.
