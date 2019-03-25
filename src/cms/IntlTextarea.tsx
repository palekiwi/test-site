import * as React from "react";
import { Box } from "primithemes";
import { Wrapper, Textarea, Label } from "./styles";
import { languages } from "../i18n/locales";
import { parseValue } from "./helpers";

interface Props {
  value: string;
  onChange: any;
}

class IntlTextarea extends React.Component<Props, { active: string }> {
  state = {
    active: "",
  };
  render() {
    const { value, onChange } = this.props;
    const val = parseValue(languages, value);

    const handleChange = (lang: string, e: any) => {
      const v = Object.assign({}, val, { [lang]: e.target.value });
      onChange(JSON.stringify(v));
    };

    return (
      <Wrapper>
        {languages.map(l => (
          <Box key={l.code} my={3}>
            <Label active={this.state.active === l.code}>{l.name}</Label>
            <Textarea
              rows={3}
              onChange={e => handleChange(l.code, e)}
              onFocus={() => this.setState({ active: l.code })}
              onBlur={() => this.setState({ active: "" })}
            >
              {val[l.code]}
            </Textarea>
          </Box>
        ))}
      </Wrapper>
    );
  }
}

export { IntlTextarea };
