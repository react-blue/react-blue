import React from "react";
import { ThemeProvider, Button, Text, Icon, Box } from "@react.blue/ui";
import { customTheme, customIcons } from "custom";
import styled from "@emotion/styled";

const global = `
  * { box-sizing: border-box; }

  button{
    font-family: 'Lato';
  }  
`;

function App() {
  const buttons = Object.keys(customTheme.button);
  const buttonList = buttons.map((key: string) => {
    const props = { [key]: true };
    return (
      <ExampleButton key={key} {...props}>
        {key.toUpperCase()}
      </ExampleButton>
    );
  });

  const texts = Object.keys(customTheme.text);
  const textList = texts.map((key: string) => {
    const props = { [key]: true };
    return (
      <ExampleText key={key} {...props}>
        {key.toUpperCase()}
      </ExampleText>
    );
  });

  const icons = Object.keys(customTheme.icon);
  const iconList = icons.map((key: string) => {
    const props = { [key]: true };
    return <Icon key={key} {...props} svg={customIcons.leftArrow} />;
  });

  return (
    <ThemeProvider theme={customTheme} global={global}>
      <Box flexDirection="row" justifyContent="center">
        <Title h1 tera>
          Button
        </Title>
        <ComponentBox flex alignItems="center">
          {buttonList}
        </ComponentBox>

        <Title h1 tera>
          Text
        </Title>
        <ComponentBox flex flexDirection="column">
          {textList}
        </ComponentBox>

        <Title h1>Icons</Title>
        <ComponentBox
          grid
          gridColumnGap="12px"
          gridRowGap="24px"
          gridTemplateColumns="repeat(7, 1fr)"
        >
          {iconList}
        </ComponentBox>
      </Box>
    </ThemeProvider>
  );
}

export default App;

const Title = styled(Text)`
  padding: 10px 24px;
  background-color: rgba(0, 0, 0, 0.15);
`;

const ComponentBox = styled(Box)`
  margin: 36px 0px;
  padding: 0 24px;
`;

const ExampleButton = styled(Button)`
  margin-right: 12px;
`;

const ExampleText = styled(Text)`
  margin-bottom: 8px;
`;
