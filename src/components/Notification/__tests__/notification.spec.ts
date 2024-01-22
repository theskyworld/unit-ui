import { describe, expect, test, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Notification from "../Notifiication.vue";
import { nextTick } from "vue";

describe("Notification", () => {
  test("should render correctly", () => {
    const wrapper = mount(Notification);
    expect(wrapper.find(".notification")).toBeTruthy();
    expect(wrapper.find(".notification__icon")).toBeTruthy();
    expect(wrapper.find(".notification__message")).toBeTruthy();
    expect(wrapper.find(".notification__close")).toBeTruthy();
    expect(wrapper.find(".notification__cont-down-line")).toBeTruthy();
    expect(wrapper.html()).toContain("message");
  });
  test("should props passed correctly", () => {
    const mockFn = vi.fn();
    const wrapper = mount(Notification, {
      props: {
        type: "success",
        message: "success message",
        position: "top-right",
        duration: 3,
        offset: 10,
        unRender: mockFn,
      },
    });
    const vm = wrapper.vm;
    expect(vm.type).toBe("success");
    expect(vm.message).toBe("success message");
    expect(vm.position).toBe("top-right");
    expect(vm.durationVal).toBe("3s");
    expect(vm.offset).toBe(10);
    vm.close();
    expect(mockFn).toHaveBeenCalled();
  });
  test("should Icons render correctly", () => {
    const wrapper = mount(Notification);
    const allIcons = wrapper.findAllComponents({ name: "Icon" });
    // 第一个Icon
    const firstIcon = allIcons[0];
    expect(firstIcon.props("icon")).toBe("circle-info");
    expect(firstIcon.props("color")).toBe("#fff");
    expect(firstIcon.props("animate")).toBe("beat");
    // 第二个Icon
    const secondIcon = allIcons[1];
    expect(secondIcon.props("icon")).toBe("xmark");
    expect(secondIcon.props("color")).toBe("#fff");
  });
  test("should Transition render correctly", () => {
    const wrapper = mount(Notification, {
      props: {
        position: "bottom-center",
      },
    });
    const transition = wrapper.findAllComponents({ name: "Transition" })[0];
    expect(transition).toBeTruthy();
    expect(transition.props("name")).toBe("bottom");
  });
  // TODO 完善
  // test("should Notification can be closed automatically", async () => {
  //   const wrapper = mount(Notification, {
  //     props: {
  //       duration: 3,
  //     },
  //   });
  //   // 关闭前
  //   expect(wrapper.text()).toContain("message");

  //   // // 模拟3s的计时器
  //   vi.useFakeTimers({ toFake: ["setTimeout"] });
  //   vi.advanceTimersByTime(4000);
  //   await nextTick();
  //   // // 关闭后
  //   expect(wrapper.text()).not.toContain("message");
  // });
  test("should Notification can be closed manually", async () => {
    const wrapper = mount(Notification);
    const closeBtn = wrapper.find(".notification__close");
    closeBtn.trigger("click");
    await nextTick();
    expect(wrapper.text()).not.toContain("message");
  });
});
