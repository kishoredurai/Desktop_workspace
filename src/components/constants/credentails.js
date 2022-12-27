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
    { name: "Container", href: "/admin/container", current: false },
    { name: "Images", href: "/admin/image", current: false },
    { name: "Ticket", href: "/ticket", current: false },
    { name: "Users", href: "/admin/container/users", current: false },

    // { name: "Projects", href: "#", current: false },
    // { name: "Calendar", href: "#", current: false },
];
export { navigation, admin_navigation }