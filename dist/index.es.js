import { ref as V, computed as k, watch as I, nextTick as ee, onBeforeUnmount as re, reactive as le, onMounted as Be, defineComponent as oe, toRef as We, unref as T, withDirectives as ye, openBlock as L, createElementBlock as F, normalizeClass as he, normalizeStyle as we, withKeys as Xe, withModifiers as be, createBlock as Y, Transition as Te, mergeProps as $, toHandlers as Se, withCtx as q, createCommentVNode as j, createVNode as Le, createElementVNode as N, renderSlot as se, vShow as Me, Teleport as Ze, normalizeProps as Pe, guardReactiveProps as Ke, inject as Ie, useAttrs as qe, getCurrentInstance as _e, markRaw as Z, shallowRef as Je, Fragment as Qe, renderList as ge, resolveDynamicComponent as ne, createSlots as eo, shallowReactive as te } from "vue";
import { useEventListener as A, tryOnUnmounted as oo, isString as ae } from "@vueuse/core";
import { useFocusTrap as no } from "@vueuse/integrations/useFocusTrap";
const ie = {
  /**
   * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
   * @default `undefined`
   * @example Symbol: `Symbol('MyModal')`
   * @example String: `'AUniqString'`
   * @example Number: `300`
   */
  modalId: {
    type: [String, Number, Symbol],
    default: void 0
  },
  /**
   * @description Display the modal or not.
   * @default `undefined`
   * @example
   * ```js
   * const showModal = ref(false)
   * v-model="showModal"
   * ```
   */
  modelValue: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Render the modal via `if` or `show`.
   * @default `'if'`
   * @example
   * ```js
   * displayDirective: 'if'
   * ```
   * @example
   * ```js
   * displayDirective: 'show'
   * ```
   */
  displayDirective: {
    type: String,
    default: "if",
    validator: (e) => ["if", "show"].includes(e)
  },
  /**
   * @description Hide the overlay or not.
   * @default `undefined`
   * @example
   * ```js
   * hideOverlay="true"
   * ```
   */
  hideOverlay: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description Customize the overlay transition.
   * @default `undefined`
   */
  overlayTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Customize the content transition.
   * @default `undefined`
   */
  contentTransition: {
    type: [String, Object],
    default: void 0
  },
  /**
   * @description Bind class to vfm__overlay.
   * @default `undefined`
   */
  overlayClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind class to vfm__content.
   * @default `undefined`
   */
  contentClass: {
    type: void 0,
    default: void 0
  },
  /**
   * @description Bind style to vfm__overlay.
   * @default `undefined`
   */
  overlayStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Bind style to vfm__content.
   * @default `undefined`
   */
  contentStyle: {
    type: [String, Object, Array],
    default: void 0
  },
  /**
   * @description Is it allow to close the modal by clicking the overlay.
   * @default `true`
   */
  clickToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to close the modal by keypress `esc`.
   * @default `true`
   */
  escToClose: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Is it allow to click outside of the vfm__content when the modal is opened
   * @default `'non-interactive'`
   */
  background: {
    type: String,
    default: "non-interactive",
    validator: (e) => ["interactive", "non-interactive"].includes(e)
  },
  /**
   * @description
   * * Use `{ disabled: true }` to disable the focusTrap.
   * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
   * @default `{ allowOutsideClick: true }`
   */
  focusTrap: {
    type: [Boolean, Object],
    default: () => ({
      allowOutsideClick: !0
    })
  },
  /**
   * @description Lock body scroll or not when the modal is opened.
   * @default `true`
   */
  lockScroll: {
    type: Boolean,
    default: !0
  },
  /**
   * @description Define how to increase the zIndex when there are nested modals
   * @default `({ index }) => 1000 + 2 * index`
   */
  zIndexFn: {
    type: Function,
    default: ({ index: e }) => 1e3 + 2 * e
  },
  /**
   * @description The direction of swiping to close the modal
   * @default `none`
   * @example
   * Set swipeToClose="none" to disable swiping to close
   * ```js
   * swipeToClose="none"
   * ```
   */
  swipeToClose: {
    type: String,
    default: "none",
    validator: (e) => ["none", "up", "right", "down", "left"].includes(e)
  },
  /**
   * @description Threshold for swipe to close
   * @default `0`
   */
  threshold: {
    type: Number,
    default: 0
  },
  /**
   * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
   * @default `undefined`
   * @example
   * ```js
   * swipeToClose="right"
   * :showSwipeBanner="true"
   * ```
   * ```html
   * <VueFinalModal
   *   ...
   *   swipeToClose="right"
   *   :showSwipeBanner="true"
   * >
   *   <template #swipe-banner>
   *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
   *   </template>
   *   ...modal content
   * </VueFinalModal>
   * ```
   */
  showSwipeBanner: {
    type: Boolean,
    default: void 0
  },
  /**
   * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
   * @default `undefined`
   * @example
   * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
   * ```js
   * :preventNavigationGestures="true"
   * ```
   */
  preventNavigationGestures: {
    type: Boolean,
    default: void 0
  }
};
function Ce(e = !1) {
  const o = V(e), n = V(o.value ? 0 : void 0);
  return [o, n, {
    beforeEnter() {
      n.value = 1;
    },
    afterEnter() {
      n.value = 0;
    },
    beforeLeave() {
      n.value = 3;
    },
    afterLeave() {
      n.value = 2;
    }
  }];
}
function to(e, o) {
  const { modelValueLocal: n, onEntering: l, onEnter: u, onLeaving: t, onLeave: s } = o, a = V(n.value), [i, d, c] = Ce(a.value), [m, f, v] = Ce(a.value), g = k(() => typeof e.contentTransition == "string" ? { name: e.contentTransition } : { ...e.contentTransition }), B = k(() => typeof e.overlayTransition == "string" ? { name: e.overlayTransition } : { ...e.overlayTransition }), E = k(
    () => (e.hideOverlay || f.value === 2) && d.value === 2
    /* Leave */
  );
  I(
    E,
    (O) => {
      O && (a.value = !1);
    }
  ), I(d, (O) => {
    switch (O) {
      case 1:
        return l();
      case 0:
        return u();
      case 3:
        return t();
      case 2:
        return s();
    }
  });
  async function S() {
    a.value = !0, await ee(), i.value = !0, m.value = !0;
  }
  function C() {
    i.value = !1, m.value = !1;
  }
  return {
    visible: a,
    contentVisible: i,
    contentListeners: c,
    contentTransition: g,
    overlayVisible: m,
    overlayListeners: v,
    overlayTransition: B,
    enterTransition: S,
    leaveTransition: C
  };
}
function lo(e, o, n) {
  const { vfmRootEl: l, visible: u, modelValueLocal: t } = n, s = V();
  function a() {
    u.value && e.escToClose && (t.value = !1);
  }
  function i(c) {
    s.value = c == null ? void 0 : c.target;
  }
  function d() {
    s.value === l.value && (e.clickToClose ? t.value = !1 : o("clickOutside"));
  }
  return {
    onEsc: a,
    onMouseupRoot: d,
    onMousedown: i
  };
}
function so(e, o) {
  const n = V(!!e.modelValue);
  return I(() => e.modelValue, (l) => {
    n.value = !!l;
  }), I(n, (l) => {
    l !== e.modelValue && o("update:modelValue", l);
  }), {
    modelValueLocal: n
  };
}
function ro(e, o) {
  if (e.focusTrap === !1)
    return {
      focus() {
      },
      focusLast() {
      },
      blur() {
      }
    };
  const { focusEl: n, openedModals: l } = o, { hasFocus: u, activate: t, deactivate: s } = no(n, e.focusTrap);
  function a() {
    requestAnimationFrame(() => {
      t();
    });
  }
  function i() {
    l.length <= 0 || ee(() => {
      const c = l[l.length - 1];
      c == null || c.value.focus();
    });
  }
  function d() {
    u.value && s();
  }
  return { focus: a, focusLast: i, blur: d };
}
let ue = !1;
if (typeof window < "u") {
  const e = {
    get passive() {
      ue = !0;
    }
  };
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
}
const De = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
let R = [], _ = !1, K = 0, xe = -1, z, G;
const ao = (e) => {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const o = window.getComputedStyle(e);
  return ["auto", "scroll"].includes(o.overflowY) && e.scrollHeight > e.clientHeight;
}, io = (e, o) => !(e.scrollTop === 0 && o < 0 || e.scrollTop + e.clientHeight + o >= e.scrollHeight && o > 0), uo = (e) => {
  const o = [];
  for (; e; ) {
    if (o.push(e), e.classList.contains("vfm"))
      return o;
    e = e.parentElement;
  }
  return o;
}, co = (e, o) => {
  let n = !1;
  return uo(e).forEach((u) => {
    ao(u) && io(u, o) && (n = !0);
  }), n;
}, Ae = (e) => R.some(() => co(e, -K)), J = (e) => {
  const o = e || window.event;
  return Ae(o.target) || o.touches.length > 1 ? !0 : (o.preventDefault && o.preventDefault(), !1);
}, fo = (e) => {
  if (G === void 0) {
    const o = !!e && e.reserveScrollBarGap === !0, n = window.innerWidth - document.documentElement.clientWidth;
    if (o && n > 0) {
      const l = parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      G = document.body.style.paddingRight, document.body.style.paddingRight = `${l + n}px`;
    }
  }
  z === void 0 && (z = document.body.style.overflow, document.body.style.overflow = "hidden");
}, vo = () => {
  G !== void 0 && (document.body.style.paddingRight = G, G = void 0), z !== void 0 && (document.body.style.overflow = z, z = void 0);
}, po = (e) => e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1, mo = (e, o) => (K = e.targetTouches[0].clientY - xe, Ae(e.target) ? !1 : o && o.scrollTop === 0 && K > 0 || po(o) && K < 0 ? J(e) : (e.stopPropagation(), !0)), yo = (e, o) => {
  if (!e) {
    console.error(
      "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
    );
    return;
  }
  if (R.some((l) => l.targetElement === e))
    return;
  const n = {
    targetElement: e,
    options: o || {}
  };
  R = [...R, n], De ? (e.ontouchstart = (l) => {
    l.targetTouches.length === 1 && (xe = l.targetTouches[0].clientY);
  }, e.ontouchmove = (l) => {
    l.targetTouches.length === 1 && mo(l, e);
  }, _ || (document.addEventListener("touchmove", J, ue ? { passive: !1 } : void 0), _ = !0)) : fo(o);
}, ho = (e) => {
  if (!e) {
    console.error(
      "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
    );
    return;
  }
  R = R.filter((o) => o.targetElement !== e), De ? (e.ontouchstart = null, e.ontouchmove = null, _ && R.length === 0 && (document.removeEventListener("touchmove", J, ue ? { passive: !1 } : void 0), _ = !1)) : R.length || vo();
};
function wo(e, o) {
  const { lockScrollEl: n } = o;
  I(() => e.lockScroll, (t) => {
    t ? u() : l();
  }), re(() => {
    l();
  });
  function l() {
    n.value && ho(n.value);
  }
  function u() {
    e.lockScroll && n.value && yo(n.value, {
      reserveScrollBarGap: !0,
      allowTouchMove: (t) => {
        for (; t && t !== document.body; ) {
          if (t.getAttribute("vfm-scroll-lock-ignore") !== null)
            return !0;
          t = t.parentElement;
        }
        return !1;
      }
    });
  }
  return {
    enableBodyScroll: l,
    disableBodyScroll: u
  };
}
function bo(e) {
  function o(n) {
    switch (n) {
      case "beforeOpen":
        e(n);
        break;
      case "beforeClose":
        e(n);
        break;
      case "opened":
        e(n);
        break;
      case "closed":
        e(n);
        break;
    }
  }
  return {
    emitEvent: o
  };
}
function To(e, o) {
  const { openedModals: n } = o, l = V();
  function u() {
    var t;
    l.value = (t = e.zIndexFn) == null ? void 0 : t.call(e, { index: n.length });
  }
  return {
    zIndex: l,
    refreshZIndex: u
  };
}
const So = (e) => (...o) => {
  e && (e == null || e(...o), e = null);
}, Q = () => {
};
function X(e, o, n) {
  return e > n ? n : e < o ? o : e;
}
const Ee = (e) => {
  if (e instanceof TouchEvent) {
    const { clientX: o, clientY: n } = e.targetTouches[0];
    return { x: o, y: n };
  } else {
    const { clientX: o, clientY: n } = e;
    return { x: o, y: n };
  }
};
function Mo(e) {
  if (!e)
    return !1;
  let o = !1;
  const n = {
    get passive() {
      return o = !0, !1;
    }
  };
  return e.addEventListener("x", Q, n), e.removeEventListener("x", Q), o;
}
function go(e, {
  threshold: o = 0,
  onSwipeStart: n,
  onSwipe: l,
  onSwipeEnd: u,
  passive: t = !0
}) {
  const s = le({ x: 0, y: 0 }), a = le({ x: 0, y: 0 }), i = k(() => s.x - a.x), d = k(() => s.y - a.y), { max: c, abs: m } = Math, f = k(
    () => c(m(i.value), m(d.value)) >= o
  ), v = V(!1), g = k(() => f.value ? m(i.value) > m(d.value) ? i.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), B = (p, y) => {
    s.x = p, s.y = y;
  }, E = (p, y) => {
    a.x = p, a.y = y;
  };
  let S, C;
  function O(p) {
    S.capture && !S.passive && p.preventDefault();
    const { x: y, y: x } = Ee(p);
    B(y, x), E(y, x), n == null || n(p), C = [
      A(e, "mousemove", D, S),
      A(e, "touchmove", D, S),
      A(e, "mouseup", r, S),
      A(e, "touchend", r, S),
      A(e, "touchcancel", r, S)
    ];
  }
  function D(p) {
    const { x: y, y: x } = Ee(p);
    E(y, x), !v.value && f.value && (v.value = !0), v.value && (l == null || l(p));
  }
  function r(p) {
    v.value && (u == null || u(p, g.value)), v.value = !1, C.forEach((y) => y());
  }
  let h = [];
  return Be(() => {
    const p = Mo(window == null ? void 0 : window.document);
    t ? S = p ? { passive: !0 } : { capture: !1 } : S = p ? { passive: !1, capture: !0 } : { capture: !0 }, h = [
      A(e, "mousedown", O, S),
      A(e, "touchstart", O, S)
    ];
  }), {
    isSwiping: v,
    direction: g,
    coordsStart: s,
    coordsEnd: a,
    lengthX: i,
    lengthY: d,
    stop: () => {
      h.forEach((p) => p()), C.forEach((p) => p());
    }
  };
}
function Co(e, o) {
  const { modelValueLocal: n } = o, l = 0.1, u = 300, t = V(), s = V(), a = k(() => e.showSwipeBanner ? s.value : t.value), i = V(0), d = V(!0);
  let c = Q, m = !0, f, v = !1;
  const { lengthX: g, lengthY: B, direction: E, isSwiping: S } = go(a, {
    threshold: e.threshold,
    onSwipeStart(r) {
      c = A(document, "selectionchange", () => {
        var h;
        d.value = (h = window.getSelection()) == null ? void 0 : h.isCollapsed;
      }), f = (/* @__PURE__ */ new Date()).getTime(), v = C(r == null ? void 0 : r.target);
    },
    onSwipe() {
      var r, h, P, p;
      if (v && d.value && E.value === e.swipeToClose) {
        if (E.value === "up") {
          const y = X(Math.abs(B.value || 0), 0, ((r = a.value) == null ? void 0 : r.offsetHeight) || 0) - (e.threshold || 0);
          i.value = y;
        } else if (E.value === "down") {
          const y = X(Math.abs(B.value || 0), 0, ((h = a.value) == null ? void 0 : h.offsetHeight) || 0) - (e.threshold || 0);
          i.value = -y;
        } else if (E.value === "right") {
          const y = X(Math.abs(g.value || 0), 0, ((P = a.value) == null ? void 0 : P.offsetWidth) || 0) - (e.threshold || 0);
          i.value = -y;
        } else if (E.value === "left") {
          const y = X(Math.abs(g.value || 0), 0, ((p = a.value) == null ? void 0 : p.offsetWidth) || 0) - (e.threshold || 0);
          i.value = y;
        }
      }
    },
    onSwipeEnd(r, h) {
      if (c(), !d.value) {
        d.value = !0;
        return;
      }
      const P = (/* @__PURE__ */ new Date()).getTime(), p = h === e.swipeToClose, y = (() => {
        var U, W;
        if (h === "up" || h === "down")
          return Math.abs((B == null ? void 0 : B.value) || 0) > l * (((U = a.value) == null ? void 0 : U.offsetHeight) || 0);
        if (h === "left" || h === "right")
          return Math.abs((g == null ? void 0 : g.value) || 0) > l * (((W = a.value) == null ? void 0 : W.offsetWidth) || 0);
      })(), x = P - f <= u;
      if (m && v && p && (y || x)) {
        i.value = 0, n.value = !1;
        return;
      }
      i.value = 0;
    }
  });
  I(
    () => d.value,
    (r) => {
      r || (i.value = 0);
    }
  ), I(
    () => i.value,
    (r, h) => {
      switch (e.swipeToClose) {
        case "down":
        case "right":
          m = r < h;
          break;
        case "up":
        case "left":
          m = r > h;
          break;
      }
    }
  );
  function C(r) {
    const h = r == null ? void 0 : r.tagName;
    if (!h || ["INPUT", "TEXTAREA"].includes(h))
      return !1;
    const P = (() => {
      switch (e.swipeToClose) {
        case "up":
          return (r == null ? void 0 : r.scrollTop) + (r == null ? void 0 : r.clientHeight) === (r == null ? void 0 : r.scrollHeight);
        case "left":
          return (r == null ? void 0 : r.scrollLeft) + (r == null ? void 0 : r.clientWidth) === (r == null ? void 0 : r.scrollWidth);
        case "down":
          return (r == null ? void 0 : r.scrollTop) === 0;
        case "right":
          return (r == null ? void 0 : r.scrollLeft) === 0;
        default:
          return !1;
      }
    })();
    return r === a.value ? P : P && C(r == null ? void 0 : r.parentElement);
  }
  I(
    () => n.value,
    (r) => {
      r && (i.value = 0);
    }
  );
  const O = k(() => {
    if (e.swipeToClose === "none")
      return;
    const r = (() => {
      switch (e.swipeToClose) {
        case "up":
        case "down":
          return "translateY";
        case "left":
        case "right":
          return "translateX";
      }
    })();
    return {
      class: { "vfm-bounce-back": !S.value },
      style: S.value ? { transform: `${r}(${-i.value}px)` } : ""
    };
  });
  function D(r) {
    e.preventNavigationGestures && r.preventDefault();
  }
  return {
    vfmContentEl: t,
    swipeBannerEl: s,
    bindSwipe: O,
    onTouchStartSwipeBanner: D
  };
}
const Eo = /* @__PURE__ */ oe({
  __name: "CoreModal",
  props: ie,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: o }) {
    const n = e, l = o, { modals: u, openedModals: t } = ce(), {
      moveToLastOpenedModals: s,
      openLastOverlay: a,
      deleteFromOpenedModals: i,
      deleteFromModals: d
    } = He(), c = V(), { zIndex: m, refreshZIndex: f } = To(n, { openedModals: t }), { focus: v, focusLast: g, blur: B } = ro(n, { focusEl: c, openedModals: t }), { enableBodyScroll: E, disableBodyScroll: S } = wo(n, { lockScrollEl: c }), { modelValueLocal: C } = so(n, l), { emitEvent: O } = bo(l);
    let D = Q;
    const {
      visible: r,
      contentVisible: h,
      contentListeners: P,
      contentTransition: p,
      overlayVisible: y,
      overlayListeners: x,
      overlayTransition: U,
      enterTransition: W,
      leaveTransition: Ne
    } = to(n, {
      modelValueLocal: C,
      async onEntering() {
        v(), await ee(), S();
      },
      onEnter() {
        O("opened"), D("opened");
      },
      onLeaving() {
        B();
      },
      onLeave() {
        O("closed"), D("closed");
      }
    }), { onEsc: de, onMouseupRoot: je, onMousedown: fe } = lo(n, l, { vfmRootEl: c, visible: r, modelValueLocal: C }), {
      vfmContentEl: Ye,
      swipeBannerEl: $e,
      bindSwipe: ze,
      onTouchStartSwipeBanner: ve
    } = Co(n, { modelValueLocal: C }), pe = We(n, "hideOverlay"), H = k(() => ({
      modalId: n.modalId,
      hideOverlay: pe,
      overlayVisible: y,
      focus: v,
      toggle(w) {
        return new Promise((b) => {
          D = So((Ue) => b(Ue));
          const M = typeof w == "boolean" ? w : !C.value;
          C.value = M, l("update:modelValue", M);
        });
      }
    }));
    Be(() => {
      u.push(H);
    }), C.value && me(), I(C, (w) => {
      w ? me() : Ge();
    });
    async function me() {
      O("beforeOpen"), f(), s(H), a(), W();
    }
    function Ge() {
      O("beforeClose"), E(), i(H), g(), a(), Ne();
    }
    return re(() => {
      E(), d(H), i(H), g(), a();
    }), (w, b) => w.displayDirective !== "if" || T(r) ? ye((L(), F("div", {
      key: 0,
      ref_key: "vfmRootEl",
      ref: c,
      class: he(["vfm vfm--fixed vfm--inset", { "vfm--prevent-none": w.background === "interactive" }]),
      style: we({ zIndex: T(m) }),
      role: "dialog",
      "aria-modal": "true",
      onKeydown: b[7] || (b[7] = Xe(
        //@ts-ignore
        (...M) => T(de) && T(de)(...M),
        ["esc"]
      )),
      onMouseup: b[8] || (b[8] = be(() => T(je)(), ["self"])),
      onMousedown: b[9] || (b[9] = be((M) => T(fe)(M), ["self"]))
    }, [
      pe.value ? j("", !0) : (L(), Y(Te, $({ key: 0 }, T(U), { appear: "" }, Se(T(x))), {
        default: q(() => [
          T(y) ? (L(), F("div", {
            key: 0,
            class: he(["vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none", w.overlayClass]),
            style: we([{ "z-index": "-1" }, w.overlayStyle]),
            "aria-hidden": "true"
          }, null, 6)) : j("", !0)
        ]),
        _: 1
      }, 16)),
      Le(Te, $(T(p), { appear: "" }, Se(T(P))), {
        default: q(() => [
          ye(N("div", $({
            ref_key: "vfmContentEl",
            ref: Ye,
            class: ["vfm__content vfm--outline-none", [w.contentClass, { "vfm--prevent-auto": w.background === "interactive" }]],
            style: w.contentStyle,
            tabindex: "0"
          }, T(ze), {
            onMousedown: b[6] || (b[6] = () => T(fe)())
          }), [
            se(w.$slots, "default"),
            w.showSwipeBanner ? (L(), F("div", {
              key: 0,
              ref_key: "swipeBannerEl",
              ref: $e,
              class: "vfm-swipe-banner-container",
              onTouchstart: b[2] || (b[2] = (M) => T(ve)(M))
            }, [
              se(w.$slots, "swipe-banner", {}, () => [
                N("div", {
                  class: "vfm-swipe-banner-back",
                  onTouchstart: b[0] || (b[0] = (M) => w.swipeToClose === "left" && M.preventDefault())
                }, null, 32),
                N("div", {
                  class: "vfm-swipe-banner-forward",
                  onTouchstart: b[1] || (b[1] = (M) => w.swipeToClose === "right" && M.preventDefault())
                }, null, 32)
              ])
            ], 544)) : !w.showSwipeBanner && w.preventNavigationGestures ? (L(), F("div", {
              key: 1,
              class: "vfm-swipe-banner-container",
              onTouchstart: b[5] || (b[5] = (M) => T(ve)(M))
            }, [
              N("div", {
                class: "vfm-swipe-banner-back",
                onTouchstart: b[3] || (b[3] = (M) => w.swipeToClose === "left" && M.preventDefault())
              }, null, 32),
              N("div", {
                class: "vfm-swipe-banner-forward",
                onTouchstart: b[4] || (b[4] = (M) => w.swipeToClose === "right" && M.preventDefault())
              }, null, 32)
            ], 32)) : j("", !0)
          ], 16), [
            [Me, T(h)]
          ])
        ]),
        _: 3
      }, 16)
    ], 38)), [
      [Me, w.displayDirective !== "show" || T(r)]
    ]) : j("", !0);
  }
});
const Oo = {
  ...ie,
  /**
   * @description Set `null | false` to disable teleport.
   * @default `'body'`
   * @example
   * ```js
   * teleportTo: '#modals'
   * ```
   */
  teleportTo: {
    type: [String, null, Boolean, Object],
    default: "body"
  }
}, Vo = oe({
  inheritAttrs: !1
}), ko = /* @__PURE__ */ oe({
  ...Vo,
  __name: "VueFinalModal",
  props: Oo,
  emits: ["update:modelValue", "beforeOpen", "opened", "beforeClose", "closed", "clickOutside"],
  setup(e, { emit: o }) {
    const u = Io({
      props: e,
      modalProps: ie,
      emit: o
    });
    return (t, s) => (L(), Y(Ze, {
      to: t.teleportTo ? t.teleportTo : void 0,
      disabled: !t.teleportTo
    }, [
      Le(Eo, Pe(Ke(T(u))), {
        default: q(() => [
          se(t.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 8, ["to", "disabled"]));
  }
}), Re = Symbol("vfm"), Fe = Symbol("internalVfm");
function ce() {
  return Ie(Re);
}
function He() {
  return Ie(Fe);
}
function Oe(e, o = ko) {
  const { component: n, slots: l, ...u } = e, t = typeof l > "u" ? {} : Object.fromEntries(Object.entries(l).map(([s, a]) => ae(a) ? [s, a] : "component" in a ? [s, {
    ...a,
    component: Z(a.component)
  }] : [s, Z(a)]));
  return {
    ...u,
    component: Z(n || o),
    slots: t
  };
}
const Ho = function(e) {
  var a;
  const o = le({
    id: Symbol("useModal"),
    modelValue: !!(e != null && e.defaultModelValue),
    resolveOpened: () => {
    },
    resolveClosed: () => {
    },
    attrs: {},
    ...Oe(e)
  });
  o.context || (_e() ? o.context = ce() : console.warn("[Vue Final Modal warn] useModal() can only be used inside setup() or functional components."));
  function n() {
    return o.modelValue ? Promise.resolve("[Vue Final Modal] modal is already opened") : (o.modelValue = !0, new Promise((i) => {
      o.resolveOpened = () => i("opened");
    }));
  }
  function l() {
    return o.modelValue ? (o.modelValue = !1, new Promise((i) => {
      o.resolveClosed = () => i("closed");
    })) : Promise.resolve("[Vue Final Modal] modal is already closed");
  }
  function u(i) {
    const { slots: d, ...c } = Oe(i, o.component);
    Ve(o, c), d && Object.entries(d).forEach(([m, f]) => {
      const v = o.slots[m];
      ae(v) ? o.slots[m] = f : ke(v) && ke(f) ? Ve(v, f) : o.slots[m] = f;
    });
  }
  function t() {
    if (!o.context)
      return;
    const i = o.context.dynamicModals.indexOf(o);
    i !== -1 && o.context.dynamicModals.splice(i, 1);
  }
  const s = {
    options: o,
    open: n,
    close: l,
    patchOptions: u,
    destroy: t
  };
  return (a = s.options.context) == null || a.dynamicModals.push(s.options), oo(() => s.destroy()), s;
};
function Bo(e, o) {
  return Object.entries(o).forEach(([n, l]) => {
    e[n] = l;
  }), e;
}
function Ve(e, o) {
  o.component && (e.component = o.component), o.attrs && Bo(e.attrs, o.attrs);
}
function ke(e) {
  return "component" in e || "attrs" in e;
}
function Lo(e, o) {
  return Object.keys(o).reduce((n, l) => (n[l] = e[l], n), {});
}
function Po(e) {
  return e ? {
    "onUpdate:modelValue": (o) => e("update:modelValue", o),
    onBeforeClose: () => e("beforeClose"),
    onClosed: () => e("closed"),
    onBeforeOpen: () => e("beforeOpen"),
    onOpened: () => e("opened"),
    /** onClickOutside will only be emitted when clickToClose equal to `false` */
    onClickOutside: () => e("clickOutside")
  } : {};
}
function Io(e) {
  const { props: o, modalProps: n, emit: l } = e, u = k(() => Lo(o, n)), t = Po(l), s = qe();
  return k(() => ({
    ...u.value,
    ...t,
    ...s
  }));
}
const Do = ["innerHTML"], No = /* @__PURE__ */ oe({
  __name: "ModalsContainer",
  setup(e) {
    const o = ce(), n = He(), l = Symbol("ModalsContainer"), u = k(() => {
      var i;
      return l === ((i = o.modalsContainers.value) == null ? void 0 : i[0]);
    }), t = Je([]);
    function s() {
      t.value = o.dynamicModals.filter((i) => i.modelValue);
    }
    function a(i) {
      i == null || i(), s();
    }
    return I(() => {
      var i;
      return (i = o.dynamicModals) == null ? void 0 : i.map((d) => d.modelValue);
    }, (i, d) => {
      if (!d || i.length !== d.length) {
        s();
        return;
      }
      let c = i.length, m = !1;
      for (; !m && c--; )
        i[c] === !0 && d[c] === !1 && (m = !0);
      m && s();
    }, {
      immediate: !0
    }), o.modalsContainers.value.push(l), re(() => {
      o.modalsContainers.value = o.modalsContainers.value.filter((i) => i !== l);
    }), (i, d) => u.value ? (L(!0), F(Qe, { key: 0 }, ge(t.value, (c, m) => (L(), Y(ne(c.component), $({
      key: c.id
    }, c.attrs, {
      modelValue: c.modelValue,
      "onUpdate:modelValue": (f) => c.modelValue = f,
      onClosed: (f) => a(() => {
        var v, g;
        return (g = (v = T(n)).resolvedClosed) == null ? void 0 : g.call(v, m);
      }),
      onOpened: () => {
        var f, v;
        return (v = (f = T(n)).resolvedOpened) == null ? void 0 : v.call(f, m);
      }
    }), eo({ _: 2 }, [
      ge(c.slots, (f, v) => ({
        name: v,
        fn: q(() => [
          T(ae)(f) ? (L(), F("div", {
            key: 0,
            innerHTML: f
          }, null, 8, Do)) : "component" in f ? (L(), Y(ne(f.component), Pe($({ key: 1 }, f.attrs)), null, 16)) : (L(), Y(ne(f), { key: 2 }))
        ])
      }))
    ]), 1040, ["modelValue", "onUpdate:modelValue", "onClosed", "onOpened"]))), 128)) : j("", !0);
  }
}), jo = (e) => e;
function Yo() {
  const e = te([]), o = te([]), n = te([]), l = V([]), u = Z({
    install(t) {
      t.provide(Re, u), t.config.globalProperties.$vfm = u;
      const s = xo(u);
      t.provide(Fe, s);
    },
    modals: e,
    openedModals: o,
    dynamicModals: n,
    modalsContainers: l,
    get(t) {
      return e.find((s) => s.value.modalId && t === s.value.modalId);
    },
    toggle(t, s) {
      const a = u.get(t);
      return a == null ? void 0 : a.value.toggle(s);
    },
    open(t) {
      return u.toggle(t, !0);
    },
    close(t) {
      return u.toggle(t, !1);
    },
    closeAll() {
      return Promise.allSettled([o.map((t) => t.value.toggle(!1))]);
    }
  });
  return u;
}
function xo(e) {
  const { modals: o, openedModals: n, dynamicModals: l } = e, u = {
    deleteFromModals(t) {
      const s = o.findIndex((a) => a.value === t.value);
      s !== -1 && o.splice(s, 1);
    },
    moveToLastOpenedModals(t) {
      u.deleteFromOpenedModals(t), n.push(t);
    },
    deleteFromOpenedModals(t) {
      const s = n.findIndex((a) => a.value === t.value);
      s !== -1 && n.splice(s, 1);
    },
    async openLastOverlay() {
      var t;
      if (await ee(), n.forEach((s) => s.value.overlayVisible.value = !1), n.length > 0) {
        const s = n[n.length - 1];
        !((t = s.value.hideOverlay) != null && t.value) && (s.value.overlayVisible.value = !0);
      }
    },
    resolvedClosed(t) {
      var s, a;
      (a = (s = l[t]) == null ? void 0 : s.resolveClosed) == null || a.call(s);
    },
    resolvedOpened(t) {
      var s, a;
      (a = (s = l[t]) == null ? void 0 : s.resolveOpened) == null || a.call(s);
    }
  };
  return u;
}
export {
  Eo as CoreModal,
  No as ModalsContainer,
  ko as VueFinalModal,
  ie as coreModalProps,
  Yo as createVfm,
  Ho as useModal,
  jo as useModalSlot,
  ce as useVfm,
  Io as useVfmAttrs,
  Oo as vueFinalModalProps
};
