import React, { Component, useState } from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { Icon } from '@fluentui/react/lib/Icon';


const GameIcon = () => <Icon iconName="Game" />;
const OfficeChatIcon = () => <Icon iconName="OfficeChat" />;
const ReminderPersonIcon = () => <Icon iconName="ReminderPerson" />;
const FavoriteStarIcon = () => <Icon iconName="FavoriteStar" />;


const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

/**
 * FluentWindow Component
 * A reusable window component with a title bar
 * @param {string} title - The title to display in the window's title bar
 * @param {React.ReactNode} children - The content to display inside the window
 * @param {string} className - Additional CSS classes for custom styling.
 * @param {string} titleBarClassName - Additional CSS classes for the title bar.
 * @param {string} contentClassName - Additional CSS classes for the content area.
 * @param {React.ReactNode} icon - An optional icon to display in the title bar.
 * @returns {JSX.Element} - The rendered FluentWindow component.
**/

const FluentWindow: React.FC<{
  title?: string;
  className?: string;
  titleBarClassName?: string;
  contentClassName?: string;
  icon?: React.ReactNode;
}> = ({
  title = '',
  children = null,
  className = '',
  titleBarClassName = '',
  contentClassName = '',
  icon = null,
}) => {
  return (
    // Main window container with shadow, rounded corners, and a subtle background
    // Simulating Mica effect with semi-transparent background
    <div className={`fluent-window ${className} ms-depth64 ms-borderColor-neutralLight ms-bgColor-neutralLighterAlt rounded-lg overflow-hidden flex flex-col`}>
      {/* Title Bar */}
      {/* The title bar contains the window's title and an optional icon */}
      <div className={`fluent-window-title-bar ${titleBarClassName} ms-bgColor-neutralPrimary ms-fontColor-white ms-fontWeight-semibold ms-fontSize-sPlus px-4 py-2 flex items-center select-none`}>
        {icon && <span className="fluent-window-icon">{icon}</span>}
        <span className="fluent-window-title">{title}</span>
      </div>
      {/* Content Area */}
      <div className={`fluent-window-content ${contentClassName} p-4 flex-grow`}>
        {children}
      </div>
    </div>
  );
};


export const App: React.FunctionComponent = () => {
  const [gameTitle, setGameTitle] = useState("Counter-Strike: Global Offensive");
  return (
    <><div>
      <FluentWindow
        title={gameTitle}
        icon={<GameIcon />}
        className="my-custom-window"
        titleBarClassName="my-custom-title-bar"
        contentClassName="my-custom-content"
      >
        <p>Gameplay Area</p>
      </FluentWindow>
    </div><Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
        <img className="App-logo" src={logo} alt="logo" />
        <Text variant="xxLarge" styles={boldStyle}>
          Welcome to your Fluent UI app
        </Text>
        <GameIcon />
        <OfficeChatIcon />
        <ReminderPersonIcon />
        <FavoriteStarIcon />
        <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
        <Text variant="large" styles={boldStyle}>
          Essential links
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
          <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
          <Link href="https://github.com/microsoft/fluentui/">Github</Link>
          <Link href="https://twitter.com/fluentui">Twitter</Link>
        </Stack>
        <Text variant="large" styles={boldStyle}>
          Design system
        </Text>
        <Stack horizontal tokens={stackTokens} horizontalAlign="center">
          <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
          <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
          <Link href="https://aka.ms/themedesigner">Theme designer</Link>
        </Stack>
      </Stack></>
  );
};
