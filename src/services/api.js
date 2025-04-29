export async function getGlobalData() {
  console.warn("Dummy getGlobalData çalıştı");
  return {
    data: {
      siteName: "GEELY",
      siteDescription: "GEELY site description",
      favicon: { url: "/favicon.ico" },
    },
  };
}

export async function getHeader() {
  console.warn("Dummy getHeader çalıştı");
  return {
    data: {
      logo: { url: "../public/geely/logo.svg" },
      button: [],
    },
  };
}

export async function getFooter() {
  console.warn("Dummy getFooter çalıştı");
  return {
    data: {
      logo: { url: "/geely/logo.svg" },
      logo2: { url: "/geely/logo.svg" },
      logo2Link: "#",
      logo2LinkTarget: "_blank",
      social: {
        links: [],
      },
      menu: {
        links: [],
      },
    },
  };
}

export async function getMenu() {
  console.warn("Dummy getMenu çalıştı");
  return {
    data: [],
  };
}

export async function getPages(slug) {
  console.warn("Dummy getPages çalıştı:", slug);
  return {
    data: [
      {
        slug: slug || "home",
        title: "Dummy Page Title",
        description: "Dummy Page Description",
        headerLayout: "layout-1",
        blocks: [
          {
            __component: "homepage.hero",
            id: 1,
            title: "Welcome to GEELY",
            subTitle: "Electric driving redefined.",
          },
        ],
      },
    ],
  };
}
