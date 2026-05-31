// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current research projects in our group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the Peng group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "news-our-new-website-is-now-live-sparkles",
          title: 'Our new website is now live! :sparkles:',
          description: "",
          section: "News",},{id: "news-join-us",
          title: 'Join us',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/join/";
            },},{id: "news-our-work-was-featured-on-caltech-news-and-scientific-american",
          title: 'Our work was featured on Caltech News and Scientific American',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/catheter/";
            },},{id: "news-two-papers-published-in-jfm-and-jcp",
          title: 'Two papers published in JFM and JCP',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/pubs24/";
            },},{id: "news-colloids-2025-slides",
          title: 'Colloids 2025 slides',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/colloids2025/";
            },},{id: "news-congratulations-to-vhaskar-on-the-publication-of-his-first-paper-in-journal-of-fluid-mechanics",
          title: 'Congratulations to Vhaskar on the publication of his first paper in Journal of...',
          description: "",
          section: "News",},{id: "projects-microrheology",
          title: 'microrheology',
          description: "microrheology of and fluctuations in passive and active colloidal matter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/microrheology/";
            },},{id: "projects-statistical-mechanics",
          title: 'statistical mechanics',
          description: "statistical mechanics of active matter in complex environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/statmech/";
            },},{id: "projects-suspension-mechanics",
          title: 'suspension mechanics',
          description: "continuum theory and dynamic simulations of colloidal suspensions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/suspension/";
            },},{id: "projects-transport-processes",
          title: 'transport processes',
          description: "transport of passive and active matter in complex fluidic environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/transport/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NZksGDoAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zpeng2", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9486-2837", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://apps.ualberta.ca/directory/person/zpeng8", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
