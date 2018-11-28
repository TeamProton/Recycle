import React from 'react';
import { Component } from 'react';
import { Alert, View, Text } from 'react-native';
interface Props {
  image: string;
}
export default class Results extends Component<Props, any> {
  constructor(props: Props, context?: any) {
    super(props, context);
  }
  render() {
    return (
      <View>
        <Text>{this.props.image}</Text>
      </View>
    );
  }
}
