import Notification from "./Notifiication.vue";
import { render, h, nextTick } from "vue";
import type { NotificationType, NotificationPos } from "./Notifiication.vue";

let i = 0; // 记录当前渲染Notification的数量
let lastElemHeight = 0; // 记录上一个Notification的高度
let transformVal = lastElemHeight; // 当上一个Notification卸载后，当前Notification向上移动的偏移量
const notifications = []; // 存储所有的Notification
/**
 * 手动进行Notification的渲染和卸载
 * 调用函数后通过h和render进行渲染，同时根据offset动态确定Notification的偏移量，避免不同位置的Notification相互覆盖
 * 外部创建unRender函数并传递给Notification，当Notification卸载时，调用unRender，进行外部的卸载
 */
export default function createNotification({
  type,
  message,
  position,
  duration,
}: {
  type?: NotificationType;
  message?: string;
  position?: NotificationPos;
  duration?: number;
}) {
  i++;
  // 用于挂载Notification示例，控制在上一个Notification被卸载后，当前Notification的偏移量的实现
  const containerElem = document.createElement("div");
  containerElem.className = "notification-container";
  // 外部卸载Notification
  // 同时维护i的值
  function unRender() {
    render(null, containerElem);
    notifications.shift();
    transformVal += lastElemHeight + 10;

    // 如果当前所有的Notification都卸载了，则将transformVal重置为0
    if (notifications.length === 0) transformVal = 0;

    // 上一个Notification卸载后，其后所有Notification向上/下移动
    for (let j = 0; j < notifications.length; j++) {
      notifications[j].el.style.transform = `translateY(${
        position && position.indexOf("bottom") > -1
          ? transformVal
          : -transformVal
      }px)`;
      notifications[j].el.style.transition = "transform 0.5s ease";
    }
    i--;
  }
  const vnode = h(Notification, {
    type,
    message,
    position,
    duration,
    offset: i * 10 + lastElemHeight * (i - 1), // 当前Notification相对于body上边界的偏移量(对应css中的top值)
    unRender,
  });
  // 渲染Notification
  render(vnode, containerElem);
  // 直接将Notification渲染后的DOM元素append到body上，而不是append containerElem，避免在内部使用getBoundingClientRect获取notificationElemRef高度时获取不到
  document.body.prepend(containerElem.firstElementChild);
  notifications.push(vnode);
  // 注意获取的是DOM更新后的高度值
  nextTick(() => {
    lastElemHeight = vnode.component.exposed.notificationHeight.value;
  });
}
