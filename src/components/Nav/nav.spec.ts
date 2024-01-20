import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Nav from "./Nav.vue";

describe("Nav", () => {
  test("should render correctly", () => {
    const wrapper = mount(Nav);
    expect(wrapper.find(".nav")).toBeTruthy();
  });
  test("should props passed correctly", () => {
    const wrapper = mount(Nav, {
      props: {
        bgColor: "red",
        w: 10,
        h: 10,
        opacity: 0.3,
        autoHide: true,
        borderRadius: 5,
      },
    });
    const vm = wrapper.vm;
    expect(vm.bgColor).toBe("red");
    expect(vm.wVal).toBe("10px");

    expect(vm.hVal).toBe("10px");
    expect(vm.autoHide).toBe(true);
    expect(vm.borderRadiusVal).toBe("5px");
  });
  test("should hide on parentNode scroll", () => {
    // TODO 完善
  });
  test("should slots work correctly", () => {
    const wrapper = mount(Nav, {
      slots: {
        default: "test",
        left: "left",
        center: "center",
        right: "right",
      },
    });
    expect(wrapper.html()).toContain("test");
    expect(wrapper.html()).toContain("left");
    expect(wrapper.html()).toContain("center");
    expect(wrapper.html()).toContain("right");
  });
});
