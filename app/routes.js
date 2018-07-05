import Example1 from "./Pages/Example1";
import Example2 from "./Pages/Example2";
import Example3 from "./Pages/Example3";
import Example4 from "./Pages/Example4";
import Example5 from "./Pages/Example5";
import Example6 from "./Pages/Example6";
import SideMenu from "./SideMenu/SideMenu";
import { DrawerNavigator } from "react-navigation";

export default DrawerNavigator(
  {
    Example1: {
      screen: Example1
    },
    Example2: {
      screen: Example2
    },
    Example3: {
      screen: Example3
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
);
