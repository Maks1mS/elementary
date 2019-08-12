import elementary from '../src';

export const Box = elementary.div({
  styles: [
    'display',
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexBasis',
    'flexDirection',
    'flex',
    'order',
    'justifySelf',
    'alignSelf',
    'zIndex',
  ],
});

export const Flex = elementary(Box)(
  {},
  {
    display: 'flex',
  },
);
