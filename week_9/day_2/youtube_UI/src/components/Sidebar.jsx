
import React from "react";
import SidebarItem from "./SidebarItem";

const items = [
  { id: 1, label: "Accueil", icon: "🏠" },
  { id: 2, label: "Shorts", icon: "🎬" },
  { id: 3, label: "Abonnements", icon: "📺" },
  { id: 4, label: "Historique", icon: "🕒" },

];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {items.map((it) => (
        <SidebarItem key={it.id} icon={it.icon} label={it.label} />
      ))}

      <hr style={{ borderColor: "#383838", margin: "0.5rem 0" }} />

      <SidebarItem icon="👤" label="Leo Does Tech" />
      <SidebarItem icon="👤" label="CHANNEL RAMBLE" />
      <SidebarItem icon="👤" label="Kevin Breeze" />
    </aside>
  );
}