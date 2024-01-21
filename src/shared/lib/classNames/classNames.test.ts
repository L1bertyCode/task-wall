import { classNames } from "@/shared/lib/classNames/classNames";

describe("classNames", () => {
  test("cls", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with mods", () => {
    expect(
      classNames("someClass", {
        hovered: true,
        collapsed: true,
      })
    ).toBe("someClass hovered collapsed");
  });
  test("with mods false", () => {
    expect(
      classNames("someClass", {
        hovered: true,
        collapsed: true,
        disable: false,
      })
    ).toBe("someClass hovered collapsed");
  });
  test("with mods undefined", () => {
    expect(
      classNames("someClass", {
        hovered: true,
        collapsed: true,
        disable: undefined,
      })
    ).toBe("someClass hovered collapsed");
  });
  test("with additional", () => {
    expect(
      classNames("someClass", {}, ["someAdditional"])
    ).toBe("someClass someAdditional");
  });
  test("all", () => {
    expect(
      classNames(
        "someClass",
        {
          hovered: true,
          collapsed: true,
          disable: false,
        },
        ["someAdditional"]
      )
    ).toBe("someClass someAdditional hovered collapsed");
  });
});
