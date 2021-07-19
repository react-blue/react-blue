import React from "react";
import { ThemeProvider } from "lib";
import { Button, Text, Icon } from "components";
import { customTheme, customIcons } from "custom";

function App() {
  const buttons = Object.keys(customTheme.button);
  const buttonList = buttons.map((key: string) => {
    const props = { [key]: true };
    return (
      <Button key={key} {...props}>
        {key.toUpperCase()}
      </Button>
    );
  });

  const texts = Object.keys(customTheme.text);
  const textList = texts.map((key: string) => {
    const props = { [key]: true };
    return (
      <Text key={key} {...props}>
        {key.toUpperCase()}
      </Text>
    );
  });

  const icons = Object.keys(customTheme.icon);
  const iconLilst = icons.map((key: string) => {
    const props = { [key]: true };
    return <Icon key={key} {...props} svg={customIcons.leftArrow} />;
  });

  return (
    <ThemeProvider theme={customTheme} global="h1 {font-size: 22px;}">
      {buttonList}
      {textList}
      {iconLilst}
    </ThemeProvider>
  );
}

export default App;
