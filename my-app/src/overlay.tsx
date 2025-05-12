import React, { Component, useState, useEffect } from 'react';
import { DefaultButton, TextField, Stack, mergeStyles, Icon } from '@fluentui/react';
import logo from './logo.svg';
// import './App.css';
import './index.css';

// Icon components using Fluent UI's Icon
const GamepadIcon: React.FC = () => <Icon iconName="Game" />;
const ChatIcon: React.FC = () => <Icon iconName="Chat" />;
const UserIcon: React.FC = () => <Icon iconName="Contact" />;
const StarIcon: React.FC = () => <Icon iconName="FavoriteStar" />;

// FluentWindow Component
interface FluentWindowProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    titleBarClassName?: string;
    contentClassName?: string;
    icon?: React.ReactNode;
}

const FluentWindow: React.FC<FluentWindowProps> = ({
    title,
    children,
    className = '',
    titleBarClassName = '',
    contentClassName = '',
    icon,
}) => {
    return (
        <div className={mergeStyles({ boxShadow: '0 4px 8px rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden', background: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column' }, className)}>
            <div className={mergeStyles({ background: 'rgba(0,0,0,0.8)', padding: '8px', display: 'flex', alignItems: 'center', color: 'white', fontWeight: 'bold' }, titleBarClassName)}>
                {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
                {title}
            </div>
            <div className={mergeStyles({ padding: '16px', flexGrow: 1 }, contentClassName)}>
                {children}
            </div>
        </div>
    );
};

// Widget Component
interface WidgetProps {
    title: string;
    value: string;
    icon?: React.ReactNode;
    className?: string;
}

const Widget: React.FC<WidgetProps> = ({ title, value, icon, className = '' }) => {
    return (
        <div className={mergeStyles({ boxShadow: '0 2px 4px rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px', background: 'rgba(0,0,0,0.7)', color: 'white' }, className)}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '12px', color: '#ccc' }}>
                {icon}
                <span>{title}</span>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={value}>
                {value}
            </div>
        </div>
    );
};

// App Component
export const App: React.FunctionComponent = () => {
    const [gameTitle, setGameTitle] = useState('Cyberpunk 2077: Phantom Liberty');
    const [latestFollower, setLatestFollower] = useState('StreamFan_123_Plays_VeryLongNameIndeed');
    const [latestSubscriber, setLatestSubscriber] = useState('UltraSupporter_XYZ_With_An_Even_Longer_Name');
    const [chatMessages, setChatMessages] = useState([
        { id: 1, user: 'ViewBot9000', text: 'Great stream! Loving the gameplay.' },
        { id: 2, user: 'CoolDude_42', text: 'Poggers!' },
        { id: 3, user: 'FluentFan', text: 'This overlay looks sick!' },
        { id: 4, user: 'NightOwlGamer', text: 'Any tips for this boss?' },
        { id: 5, user: 'ChattyCathy', text: 'Looooooooooooooooooooooooooooooooooooooooong message to test wrapping and scrolling behavior in the chat window. Hope it works!' },
        { id: 6, user: 'AnotherUser', text: 'Short one.' },
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newUser = `User${Math.floor(Math.random() * 1000)}`;
            const newMessage = `This is a new random message ${Date.now().toString().slice(-5)}`;
            setChatMessages((prev) => [...prev.slice(-10), { id: Date.now(), user: newUser, text: newMessage }]);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Stack horizontalAlign="stretch" verticalAlign="stretch" styles={{ root: { height: '105vh', width: '100vw', background: 'transparent', padding: '16px', display: 'flex', flexDirection: 'row', gap: '16px' } }}>
            <Stack styles={{ root: { flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' } }}>
                <FluentWindow title={gameTitle || 'No Game Selected'} icon={<GamepadIcon />} className={mergeStyles({ aspectRatio: '16/9' })} contentClassName={mergeStyles({ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', fontSize: '24px' })}>
                    <p>Gameplay Area</p>
                </FluentWindow>

            </Stack>
            
            <Stack styles={{ root: { flex: 1, display: 'flex', flexDirection: 'column' } }}>
                {/* <FluentWindow title="LATEST UPDATES" icon={<UserIcon />}> */}
                    {/* <Stack horizontal wrap tokens={{ childrenGap: 16 }}> */}
                    <Stack styles={{ root: { flex: '0 0 auto', display: 'flex', flexDirection: 'row', gap: '8px' } }}>
                        <Widget title="LATEST FOLLOWER" value={latestFollower} icon={<UserIcon />} />
                        <Widget title="LATEST SUBSCRIBER" value={latestSubscriber} icon={<StarIcon />} />
                    </Stack>
                    {/* </Stack> */}
                {/* </FluentWindow> */}
                <FluentWindow title="Chat" icon={<ChatIcon />} contentClassName={mergeStyles({ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 })}>
                    <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px', background: 'rgba(0,0,0,0.5)' }}>
                        {chatMessages.map((msg) => (
                            <div key={msg.id} style={{ fontSize: '14px', wordBreak: 'break-word', marginBottom: '8px' }}>
                                <span style={{ fontWeight: 'bold', color: '#a855f7' }}>{msg.user}:</span>
                                <span style={{ color: '#ccc', marginLeft: '8px' }}>{msg.text}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <TextField placeholder="Send a message..." disabled styles={{ fieldGroup: { background: 'rgba(0,0,0,0.5)', borderRadius: '4px' }, field: { color: 'white' } }} />
                    </div>
                </FluentWindow>
            </Stack>
        </Stack>
    );
};