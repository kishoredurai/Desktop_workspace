const Url = 'http://localhost:5000'
const themeDefault = 'dark'
const namesOfModes = ['dark', 'moonlight', 'eclipse', 'light']
const navigation = [
    { name: "Dashboard", href: "/dashboard", current: false },
    { name: "Ticket", href: "/ticket", current: false },
    
    // { name: "Projects", href: "#", current: false },
    // { name: "Calendar", href: "#", current: false },
  ];

  const admin_navigation = [
    { name: "Dashboard", href: "/admin/dashboard", current: false },
    { name: "Ticket", href: "/ticket", current: false },
    { name: "Machine", href: "/Machine", current: false },
    { name: "Users", href: "/users", current: false },

    // { name: "Projects", href: "#", current: false },
    // { name: "Calendar", href: "#", current: false },
  ];
export { navigation,admin_navigation }