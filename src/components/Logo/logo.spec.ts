import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Logo from "./Logo.vue";

describe("Logo", () => {
  test("should img contains logo__img class", () => {
    const wrapper = mount(Logo);
    const imgElem = wrapper.find("img");
    expect(imgElem.classes()).toContain("logo__img");
  });

  test("should props passed correctly", () => {
    const wrapper = mount(Logo, {
      props: {
        img: "testSrc",
        alt: "testAlt",
        w: 130,
        h: 30,
      },
    });
    const imgElem = wrapper.find("img");
    expect(imgElem.attributes("src")).toBe("testSrc");
    expect(imgElem.attributes("alt")).toBe("testAlt");
    expect(imgElem.attributes("title")).toBe("testAlt");
    expect(wrapper.vm.wVal).toBe("130px");
    expect(wrapper.vm.hVal).toBe("30px");
  });

  test("should click event emitted correctly", () => {
    const wrapper = mount(Logo);
    wrapper.find(".logo").trigger("click");
    expect(wrapper.emitted("click")).toEqual([[]]);
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
