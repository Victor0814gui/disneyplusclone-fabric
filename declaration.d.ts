// navigation types
import { MemoryRouterProps } from "react-router-native";
declare function NativeRouter(
  props: NativeRouterProps
): React.ReactElement;

interface NativeRouterProps extends MemoryRouterProps {}

// assets
declare module "*.gif" { }
declare module "*.png" { }
declare module "*.jpg" { }


// mouse events
declare global {
  interface ViewProps {
    onMouseEnter: (e: any) => Promise<void>;
    onMouseLeave: (e: any) => Promise<void>;
  }
}