    document.querySelectorAll("*").forEach((el) => {
  el.classList.forEach((cls) => {
    // WIDTH
    if (cls.startsWith("w-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.width = val;
    }

    // HEIGHT
    if (cls.startsWith("h-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.height = val;
    }

    // ==============================
    // Margin
    // ==============================

    if (cls.startsWith("m-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.margin = val;
    }

    // left and right
    if (cls.startsWith("mx-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.marginLeft = val;
        el.style.marginRight = val;
      }
    }

    // top and bottom
    if (cls.startsWith("my-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.marginTop = val;
        el.style.marginBottom = val;
      }
    }

    // top
    if (cls.startsWith("mt-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginTop = val;
    }
    // left
    if (cls.startsWith("ml-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginLeft = val;
    }
    // right
    if (cls.startsWith("mr-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginRight = val;
    }
    // bottom
    if (cls.startsWith("mb-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.marginBottom = val;
    }

    // ==============================
    // Padding
    // ==============================

    if (cls.startsWith("p-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.padding = val;
    }

    // left and right
    if (cls.startsWith("px-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.paddingLeft = val;
        el.style.paddingRight = val;
      }
    }

    // top and bottom
    if (cls.startsWith("py-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) {
        el.style.paddingTop = val;
        el.style.paddingBottom = val;
      }
    }

    // top
    if (cls.startsWith("pt-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingTop = val;
    }
    // left
    if (cls.startsWith("pl-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingLeft = val;
    }
    // right
    if (cls.startsWith("pr-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingRight = val;
    }
    // bottom
    if (cls.startsWith("pb-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.paddingBottom = val;
    }

    // =========================================================
    // Padding
    // =========================================================

    // BACKGROUND COLOR
    if (cls.startsWith("bg-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.backgroundColor = val;
    }

    // BACKGROUND IMAGE
    if (cls.startsWith("bg-[url(")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.backgroundImage = val;
    }

    // TEXT COLOR
    if (cls.startsWith("color-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.color = val;
    }

    // =========================================================
    // Padding
    // =========================================================

    // border-width
    if (cls.startsWith("bd-width-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderWidth = val;
    }
    // border-color
    if (cls.startsWith("bd-color-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderColor = val;
    }
    // border-radius
    if (cls.startsWith("bdrs-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.borderRadius = val;
    }

    // =========================================================
    // Font
    // =========================================================

    // FONT SIZE

    if (cls.startsWith("font-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.fontSize = val;
    }
    if (cls.startsWith("family-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.fontFamily = val;
    }

    // Z Index
    if (cls.startsWith("z-[")) {
      let val = cls.match(/\[(.*?)\]/)?.[1];
      if (val) el.style.zIndex = val;
    }
  });
});
