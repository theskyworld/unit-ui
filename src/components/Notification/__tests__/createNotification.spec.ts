import { describe, expect, test, vi } from "vitest";
import createNotification from "../createNotification";

describe("createNotification", () => {
  describe("should created Notification correctly", () => {
    test("without args", () => {
      createNotification();
      expect(document.body.innerHTML).toContain("notification");
    });
    test("with args", () => {
      const vnode = createNotification({
        type: "success",
        message: "success message",
        position: "top-right",
        duration: 3,
        animate: true,
      });
      const exposedVals = vnode.component.exposed;
      expect(exposedVals.type).toBe("success");
      expect(exposedVals.message).toBe("success message");
      expect(exposedVals.position).toBe("top-right");
      expect(exposedVals.durationVal.value).toBe("3s");
      expect(exposedVals.animate).toBe(true);
      expect(document.body.innerHTML).toContain("notification");
    });
  });
  describe("should inner logic worked correctly", () => {
    test("should unRender called and worked correctly", async () => {});
  });
});
