export const Menubar = {
  colorScheme: {
    light: {
      root: {
        background: '{primary.color}',
        borderColor: '{primary.color}',
        color: '{surface.0}',
      },
      item: {
        color: '{root.color}',
        focusColor: '{root.color}',
        focusBackground: '{root.background}',
      },
      mobileButton: {
        color: '{surface.0}',
        hoverColor: '{surface.0}',
        hoverBackground: '{primary.color}',
      },
    },
  },
  root: {
    borderRadius: 'none',
  },
  css: ({ dt }: any) => `
.p-menubar-end {
  .p-button-text {
    color: ${dt('root.color')};
  }

  .p-button-text:not(:disabled):hover {
    color:  ${dt('root.color')};
    background:  ${dt('root.background')};
  }
}

@media screen and (max-width: 960px) {
  .p-menubar {
    .p-menubar-item {
      color: ${dt('surface.950')};
    }
  }
}
`,
};
