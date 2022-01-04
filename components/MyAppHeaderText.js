import React from "react";
import { Text } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';



export const textStyles = {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 22.4,
    color: "white"
};

const { Provider, Consumer } = React.createContext(textStyles);

export const MyAppText = ({ style, ...props }) => (
    <Consumer>
        {(contextStyle) => {
            const mergedStyle = style
                ? { ...contextStyle, ...style }
                : contextStyle;

            return (
                <Text {...props} style={mergedStyle} />
            );
        }}
    </Consumer>
);

export const StyleText = ({ style, children }) => (
    <Consumer>
        {(contextStyle) => (
            <Provider value={{ ...contextStyle, ...style }}>
                {children}
            </Provider>
        )}
    </Consumer>
);