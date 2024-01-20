import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import Icon from "./Icon.vue";

describe("Icon", () => {
  test("should render correctly", () => {
    const wrapper = mount(Icon);
    expect(wrapper.find(".icon")).toBeTruthy();
  });
  test("should props passed correctly", () => {
    const wrapper = mount(Icon, {
      props: {
        icon: "coffee",
        size: "10px",
        color: "green",
        hColor: "red",
        fixWidth: true,
        rotation: 15,
        animate: "beat-fade",
        border: true,
        bColor: "red",
      },
    });
    const vm = wrapper.vm;
    expect(vm.iconVal).toBe("fa-solid fa-coffee");
    expect(vm.sizeVal).toBe("10px");
    expect(vm.color).toBe("green");
    expect(vm.hColor).toBe("red");
    expect(vm.fixWidth).toBe(true);
    expect(vm.rotationVal).toBe("rotate(15deg)");
    expect(vm.animate).toBe("beat-fade");
    expect(vm.border).toBe(true);
    expect(vm.bColor).toBe("red");
  });
});
