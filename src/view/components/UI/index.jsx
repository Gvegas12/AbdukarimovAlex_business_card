import React from "react";
import UIButton from "./UIButton";
import UIGarland from "./UIGarland";

export default class UI extends React.Component {
  static Garland = UIGarland;
  static Button = UIButton;

  render() {
    return <>{this.props.children}</>;
  }
}
