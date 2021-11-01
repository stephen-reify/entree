import { render, screen } from "@testing-library/react";
import { Input } from "../shared/Input";

describe("Input", () => {
  it('should render an input type="text" and an attached label when type=text', () => {
    render(
      <Input
        type="text"
        label="label"
        value=""
        id=""
        name=""
        onChange={() => {}}
      />
    );
    const input = screen.getByLabelText("label");
    expect(input).toHaveAttribute("type", "text");
  });
  it("should render a textarea and an attached label when type=textarea", () => {
    render(
      <Input
        type="textarea"
        label="label"
        value=""
        id=""
        name=""
        onChange={() => {}}
      />
    );
    const textarea = screen.getByLabelText("label");
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement);
  });
});
