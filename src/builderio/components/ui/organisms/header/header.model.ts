import { HeaderProps } from "./header";

export const headerDemoProps: HeaderProps = {
  homeUrl: {
    url: "/",
    text: "Home"
  },
  linkGroups: [
    {
      name: "Group 1",
      description: "This is a description",
      image: {
        url: "/demo-images/F125_Erde_Logo.jpg",
        alt: "Erde Logo"
      },
      links: [
        {
          url: "/link1",
          text: "Link 1"
        },
        {
          url: "/link2",
          text: "Link 2"
        }
      ]
    },
    {
      name: "Group 2",
      description: "This is a description",
      image: {
        url: "/demo-images/turbogetriebe-image.jpg",
        alt: "Erde Logo"
      },
      links: [
        {
          url: "/link3",
          text: "Link 3"
        },
        {
          url: "/link4",
          text: "Link 4"
        }
      ]
    }
  ]
}