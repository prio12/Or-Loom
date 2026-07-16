// components/layout/Drawer.tsx
interface DrawerProps {
  id: string;
  children: React.ReactNode;
  position?: "left" | "right";
}

export default function Drawer({
  id,
  children,
  position = "right",
}: DrawerProps) {
  return (
    <div className="drawer">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-50">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white min-h-full w-80 p-4">{children}</div>
      </div>
    </div>
  );
}
