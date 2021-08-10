import { isServer } from "@/components/table/util";
import { ObjectDirective, ComponentPublicInstance, DirectiveBinding } from "vue";
import { on } from "@/constants/util/dom-util";

type DocumentHandler = <T extends MouseEvent>(mouseup: T, mousedown: T) => void;

const nodeList = new Map();

let startClick: MouseEvent;

if (!isServer) {
  on(document, "mousedown", (e: any) => (startClick = e));
  on(document, "mouseup", (e: any) => {
    for (const { documentHandler } of nodeList.values()) {
      documentHandler(e, startClick);
    }
  });
}

function createDocumentHandler(el: HTMLElement, binding: DirectiveBinding): DocumentHandler {
  let excludes: HTMLElement[] = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else {
    // due to current implementation on binding type is wrong the type casting is necessary here
    excludes.push((binding.arg as unknown) as HTMLElement);
  }
  return function(mouseup, mousedown) {
    const popperRef = (binding.instance as ComponentPublicInstance<{
      popperRef: any;
    }>).popperRef;
    const mouseUpTarget = mouseup.target as Node;
    const mouseDownTarget = mousedown.target as Node;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;

    const isTargetExcluded = (excludes.length && excludes.some(item => item?.contains(mouseUpTarget))) || (excludes.length && excludes.includes(mouseDownTarget as HTMLElement));
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value();
  };
}

export const ClickOutside: ObjectDirective = {
  beforeMount(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    nodeList.set(el, {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};